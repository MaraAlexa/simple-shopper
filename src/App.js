import React, { Component } from 'react'
import './styles/App.css'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// components
import Nav from './components/Nav'
import ProductsPage from './components/ProductsPage'
import CartPage from './components/CartPage'
import CheckoutPage from './components/CheckoutPage'
import IndividualProductView from './components/IndividualProductView'
import products from './data/products'

// begin adding stripe 

class App extends Component {
  state = {
    cart: [],
    isActive: ''
  }

  findProductById = (productId) => {
    var product = products.find(product => product.id === parseInt(productId, 10))
    return {...product}
  }


  handleAddToCart = (product) =>
    this.setState({
      cart: [...this.state.cart, product.id],
    })

  handleRemoveOne = (product) => {
    let index = this.state.cart.indexOf(product.id)
    this.setState({
      cart: [
        ...this.state.cart.slice(0, index),
        ...this.state.cart.slice(index + 1)
      ]
    })
  }

  toggleMobileNav = () =>  {
    let toggle = this.state.isActive ? '' : 'is-active animated fadeIn'
    this.setState({
      isActive: toggle
    })
  }

  renderCart() {
    // count how many of each product in cart
    let productsCount = this.state.cart.reduce((productsCount, productId) => {
      productsCount[productId] = productsCount[productId] || 0
      productsCount[productId] ++
      return productsCount
    }, {})
    // create an array of products
    let cartProducts = Object.keys(productsCount).map(productId => {
      // find product by its ID
      var product = products.find(product => product.id === parseInt(productId, 10))
      // create a new product that also has a count property
      return {
        ...product,
        count: productsCount[productId]
      }
    })
    return (
      cartProducts
    )
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Nav
            cart={this.state.cart}
            toggleMobileNav={this.toggleMobileNav}
            isActive={this.state.isActive}
          />
          <div className="content">
            <Switch>
              <Route exact path='/'
                render={() => <ProductsPage products={products} />}
              />
              <Route exact path='/products'
                render={() => <ProductsPage products={products} />}
              />
              <Route path='/products/:id' render={({match}) =>
                <IndividualProductView
                  product={this.findProductById(match.params.id)}
                  onAddToCart={this.handleAddToCart}
                  buyProduct='Add to cart'
                />
              }
              />
              <Route path='/cart' render={() =>
                <CartPage
                  cartProducts={this.renderCart()}
                  onAddOne={this.handleAddToCart}
                  onRemoveOne={this.handleRemoveOne}
                />
              }
              />
              <Route path='/checkout' render={() =>
                <CheckoutPage cartProducts={this.renderCart()} />
              } />
            </Switch>

          </div>
        </div>
      </Router>
    );
  }
}

export default App
