import React, { Component } from 'react'
import './styles/App.css'

// components
import Nav from './components/Nav'
import ProductsPage from './components/ProductsPage'
import CartPage from './components/CartPage'
import products from './data/products'

class App extends Component {
  state = {
    activeTab: 0,
    cart: [],
  }

  handleTabChange = (index) => {
    this.setState({
      activeTab: index
    })
  }

  handleAddToCart = (product) =>
    this.setState({
      cart: [...this.state.cart, product.id],
    })

  renderContent() {
    switch (this.state.activeTab) {
      default:
      case 0: return <ProductsPage
                        products={products}
                        onAddToCart={this.handleAddToCart}
                      />
      case 1: return this.renderCart()
    }
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
      <CartPage products={cartProducts} />
    )
  }

  render() {
    let {activeTab} = this.state
    return (
      <div className="App">
        <Nav
          activeTab={activeTab}
          onTabChange={this.handleTabChange}
          cart={this.state.cart}
        />
        <div className="content">
          {this.renderContent()}

        </div>

      </div>
    );
  }
}

export default App
