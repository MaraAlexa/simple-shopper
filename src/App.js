import React, { Component } from "react";
import "./styles/App.css";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

// components
import Nav from "./components/Nav";
import ProductsPage from "./components/ProductsPage";
import CartPage from "./components/CartPage";
import CheckoutPage from "./components/CheckoutPage";
import FormErrors from "./components/FormErrors";
import IndividualProductView from "./components/IndividualProductView";
import AdminPage from "./components/protected/AdminPage";
import LoginPage from "./components/LoginPage";
import LandingPageStatic from "./components/static/LandingPageStatic";

import { inject, observer } from "mobx-react";

import { StripeProvider } from "react-stripe-elements";

@inject(["products"])
@inject("user")
@observer
class App extends Component {
  state = {
    cart: [],
    isActive: "", // mobile Nav

    // form fields validation state
    email: "",
    name: "",
    phone: "",
    selectedCountry: "",
    city: "",
    postalCode: "",
    address: "",
    // formErrors state
    formErrors: {
      email: "",
      name: "",
      phone: "",
      selectedCountry: "",
      city: "",
      postalCode: "",
      address: ""
    },
    emailValid: "",
    nameValid: "",
    phoneValid: "",
    selectedCountryValid: "",
    cityValid: "",
    postalCodeValid: "",
    addressValid: "",
    // form validation state
    formValid: false
  };

  PrivateRoute = ({ component: Component }) => {
    return (
      <Route
        render={props =>
          this.props.user.authenticated === true ? (
            <Component {...props} />
          ) : (
            <Redirect to="/login" />
          )}
      />
    );
  };
  PublicRoute = ({ component: Component }) => {
    return (
      <Route
        render={props =>
          this.props.user.authenticated === false ? (
            <Component {...props} />
          ) : (
            <Redirect to="/admin" />
          )}
      />
    );
  };

  findProductById = productId => {
    const product = this.props.products.all.find(
      product => product.id === parseInt(productId, 10)
    );
    return { ...product };
  };

  handleAddToCart = product =>
    this.setState({
      cart: [...this.state.cart, product.id]
    });

  handleRemoveOne = product => {
    let index = this.state.cart.indexOf(product.id);
    this.setState({
      cart: [
        ...this.state.cart.slice(0, index),
        ...this.state.cart.slice(index + 1)
      ]
    });
  };

  toggleMobileNav = () => {
    let toggle = this.state.isActive ? "" : "is-active animated fadeIn";
    this.setState({
      isActive: toggle
    });
  };

  validateField = (fieldName, value) => {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let nameValid = this.state.nameValid;
    let phoneValid = this.state.phoneValid;
    let selectedCountryValid = this.state.selectedCountryValid;
    let cityValid = this.state.cityValid;
    let postalCodeValid = this.state.postalCodeValid;
    let addressValid = this.state.addressValid;

    switch (fieldName) {
      case "email":
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? "" : " is invalid";
        break;
      case "name":
        nameValid = value.match(/^[a-zA-Z ]{3,30}$/);
        fieldValidationErrors.name = nameValid ? "" : " is too short";
        break;
      case "phone":
        phoneValid = value.match(/^\d{10}$/);
        fieldValidationErrors.phone = phoneValid ? "" : " is invalid!";
        break;
      case "selectedCountry":
        selectedCountryValid = value.length <= 11;
        fieldValidationErrors.selectedCountry = selectedCountryValid
          ? ""
          : " unselected!";
        break;
      case "city":
        cityValid = value.match(/^[a-zA-Z ]{3,30}$/); // only letters of length 3 to 30
        fieldValidationErrors.city = cityValid ? "" : " is invalid!";
        break;
      case "postalCode":
        postalCodeValid = value.match(/^[\w.%+-]{4,6}$/); // between 4 and 6 letters OR numbers eg 1142AB- to be refined for NL
        fieldValidationErrors.postalCode = postalCodeValid
          ? ""
          : " is invalid!";
        break;
      case "address":
        addressValid = value.match(/^[A-Za-z0-9 _]*[A-Za-z]+[A-Za-z0-9 _]*$/); // allows for combination of letters  and numbers and an optional space // only numbers not allowed
        fieldValidationErrors.address = addressValid ? "" : " is invalid!";
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        emailValid: emailValid,
        nameValid: nameValid,
        phoneValid: phoneValid,
        selectedCountryValid: selectedCountryValid,
        cityValid: cityValid,
        postalCodeValid: postalCodeValid,
        addressValid: addressValid
      },
      this.validateForm
    );
  };

  validateForm = () => {
    this.setState({
      formValid:
        this.state.emailValid &&
        this.state.nameValid &&
        this.state.phoneValid &&
        this.state.selectedCountryValid &&
        this.state.cityValid &&
        this.state.postalCodeValid &&
        this.state.addressValid
    });
  };

  handleUserInput = e => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState(
      {
        [name]: value
      },
      () => {
        this.validateField(name, value);
      }
    );
  };

  renderCart() {
    // count how many of each product in cart
    let productsCount = this.state.cart.reduce((productsCount, productId) => {
      productsCount[productId] = productsCount[productId] || 0;
      productsCount[productId]++;
      return productsCount;
    }, {});
    // create an array of products
    let cartProducts = Object.keys(productsCount).map(productId => {
      // find product by its ID
      const product = this.props.products.all.find(
        product => product.id === parseInt(productId, 10)
      );
      // create a new product that also has a count property
      return {
        ...product,
        count: productsCount[productId]
      };
    });
    return cartProducts;
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Nav
            cart={this.state.cart}
            toggleMobileNav={this.toggleMobileNav}
            isActive={this.state.isActive}
            user={this.props.user}

          />
          <div className="content">
            <Switch>
              <Route exact path="/" render={() => <LandingPageStatic />} />
              <Route exact path="/products" render={() => <ProductsPage />} />
              <Route
                path="/products/:id"
                render={({ match }) => (
                  <IndividualProductView
                    onAddToCart={this.handleAddToCart}
                    match={match.params.id}
                  />
                )}
              />
              <Route
                path="/cart"
                render={() => (
                  <CartPage
                    cartProducts={this.renderCart()}
                    onAddOne={this.handleAddToCart}
                    onRemoveOne={this.handleRemoveOne}
                  />
                )}
              />

              <this.PublicRoute path="/login" component={LoginPage} />
              <this.PrivateRoute path="/admin" component={AdminPage} />
              <Route
                path="/checkout"
                render={() => (
                  <StripeProvider apiKey="pk_test_d5pgMWZSGWQZ530wrp1EM3ET">
                    <CheckoutPage
                      cartProducts={this.renderCart()}
                      email={this.state.email}
                      cardholderName={this.state.name}
                      phone={this.state.phone}
                      selectedCountry={this.state.selectedCountry}
                      city={this.state.city}
                      postalCode={this.state.postalCode}
                      address={this.state.address}
                      // formErrors={this.state.formErrors}
                      handleUserInput={this.handleUserInput}
                      formValid={this.state.formValid}
                      nameValid={this.state.nameValid}
                      emailValid={this.state.emailValid}
                      phoneValid={this.state.phoneValid}
                      selectedCountryValid={this.state.selectedCountryValid}
                      cityValid={this.state.cityValid}
                      postalCodeValid={this.state.postalCodeValid}
                      addressValid={this.state.addressValid}
                    >
                      <FormErrors formErrors={this.state.formErrors} />
                    </CheckoutPage>
                  </StripeProvider>
                )}
              />
              <Route
                render={() => <p className="subtitle">Page not found!!!</p>}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
