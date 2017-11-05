import React, { Component } from 'react'
import './styles/App.css'

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

// components reorganized
import Nav from './components/Nav'
import ProductsPage from './components/ProductsPage'
import CartPage from './components/CartPage'
import CheckoutPage from './components/CheckoutPage'
// import FormErrors from './components/FormErrors'
import IndividualProductView from './components/IndividualProductView'
import AdminPage from './components/protected/AdminPage'
import LoginPage from './components/LoginPage'
import LandingPageStatic from './components/static/LandingPageStatic'
import Thanks from './components/Thanks'

import { inject, observer } from 'mobx-react'

import { StripeProvider } from 'react-stripe-elements'

@inject(['products'])
@inject('user')
@observer
class App extends Component {
  state = {
    cart: []
  }

  PrivateRoute = ({ component: Component }) => {
    return (
      <Route
        render={props =>
          this.props.user.authenticated === true ? (
            <Component {...props} />
          ) : (
            <Redirect from="/admin" to="/login" />
          )}
      />
    )
  }
  PublicRoute = ({ component: Component }) => {
    return (
      <Route
        render={props =>
          this.props.user.authenticated === false ? (
            <Component {...props} />
          ) : (
            <Redirect from="/login" to="/admin" />
          )}
      />
    )
  }

  findProductById = productId => {
    const product = this.props.products.all.find(
      product => product.id === parseInt(productId, 10)
    )
    return { ...product }
  }

  handleAddToCart = product =>
    this.setState({
      cart: [...this.state.cart, product.id]
    })

  handleRemoveOne = product => {
    let index = this.state.cart.indexOf(product.id)
    this.setState({
      cart: [
        ...this.state.cart.slice(0, index),
        ...this.state.cart.slice(index + 1)
      ]
    })
  }

  toggleMobileNav = () => {
    let toggle = this.state.isActive ? '' : 'is-active animated fadeIn'
    this.setState({
      isActive: toggle
    })
  }


  renderCart() {
    // 1. count how many of each product in cart
    let productsCount = this.state.cart.reduce((productsCount, productId) => {
      productsCount[productId] = productsCount[productId] || 0
      productsCount[productId]++
      return productsCount
    }, {})// {14: 1, 15: 2}

    // 2. create an array of products
    let cartProducts = Object.keys(productsCount).map(productId => { // ['14', '15'].map
        // find product by its ID
      const product = this.props.products.all.find(
        product => product.id === parseInt(productId, 10)
      )
        // create a new product that also has a count property
      return {
        ...product,
        count: productsCount[productId]
      }
    })
    return cartProducts
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

              <Route path="/thanks" render={() => <Thanks />} />

              <this.PublicRoute path="/login" component={LoginPage} />
              <this.PrivateRoute path="/admin" component={AdminPage} />
              <Route
                path="/checkout"
                render={() => (
                  <StripeProvider apiKey="pk_test_d5pgMWZSGWQZ530wrp1EM3ET">
                    <CheckoutPage
                      cartProducts={this.renderCart()}
                    >
                      {/* <FormErrors formErrors={this.state.formErrors} /> */}
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
    )
  }
}

export default App
