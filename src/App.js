import React, { Component } from 'react'
import './styles/App.css'

// components
import ItemsPage from './components/ItemsPage'
import Nav from './components/Nav'
import products from './data/products'

class App extends Component {
  state = {
    activeTab: 0
  }

  handleTabChange = (index) => {
    this.setState({
      activeTab: index
    })
  }

  renderContent() {
    switch (this.state.activeTab) {
      default:
      case 0: return <span>Items</span>
      case 1: return <span>Cart</span>
    }
  }

  render() {
    let {activeTab} = this.state
    return (
      <div className="App">
        <Nav
          activeTab={activeTab}
          onTabChange={this.handleTabChange}
        />
        <div className="content">
          {this.renderContent()}
          {/* <ItemsPage products={products} /> */}
        </div>

      </div>
    );
  }
}

export default App
