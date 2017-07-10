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
    cart: []
  }

  handleTabChange = (index) => {
    this.setState({
      activeTab: index
    })
  }

  handleAddToCart = (product) =>
    this.setState({
      cart: [...this.state.cart, product.id]
    })

  renderContent() {
    switch (this.state.activeTab) {
      default:
      case 0: return <ProductsPage
                        products={products}
                        onAddToCart={this.handleAddToCart}
                      />
      case 1: return <CartPage cart={this.state.cart}  />
      {/* <span>You have added {this.state.cart.length} products</span> */}
    }
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
