import React, { Component } from 'react'
import './styles/App.css'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// components
import Nav from './components/Nav'
import ProductsPage from './components/ProductsPage'
import CartPage from './components/CartPage'
import Product from './components/Product'
import products from './data/products'

class App extends Component {
  state = {
    cart: [],
  }

  findProductById = (productId) => {
    var product = products.find(product => product.id === parseInt(productId, 10))
    return {...product}
  }


  handleAddToCart = (product) =>
    this.setState({
      cart: [...this.state.cart, product.id],
    })

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
                <Product product={this.findProductById(match.params.id)} onAddToCart={this.handleAddToCart} buyItem='Add to Cart'/>
              }
              />
              <Route path='/cart' render={() => <CartPage cartProducts={this.renderCart()} />} />
            </Switch>

          </div>
        </div>
      </Router>
    );
  }
}

export default App
