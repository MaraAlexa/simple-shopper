import React, { Component } from 'react'
import './styles/App.css'

// components
import ItemsPage from './components/ItemsPage'
import Nav from './components/Nav'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <div className="content">
          <ItemsPage />
        </div>

      </div>
    );
  }
}

export default App
