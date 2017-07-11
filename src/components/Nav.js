import React from 'react'

import '../styles/Nav.css'

const Nav = ({ activeTab, onTabChange, cart }) =>
  <nav className="navbar">
    <div className="navbar-brand">
      <a className="navbar-item" href="index.html">
        <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
      </a>
    </div>{/* end navbar-brand here */}

    <ul className="navbar-end">
      <li className={`nav-item ${activeTab === 0 && 'selected'}`}>
        <a onClick={() => onTabChange(0)} className="navbar-item">
          ItemsPage
        </a>
      </li>
      <li className={`nav-item ${activeTab === 1 && 'selected'}`}>
        <a onClick={() => onTabChange(1)} className="navbar-item">
          Cart
          <span className="icon">
            <i className="fa fa-cart-arrow-down fa-5" aria-hidden="true"></i>
          </span>
          {
            cart.length ?
              <span className='tag is-danger animated rubberBand'>
                {cart.length}
              </span>
              :
              null
          }
        </a>
      </li>
    </ul>

    <div className="navbar-burger">
      <span></span>
      <span></span>
      <span></span>
    </div>

  </nav>

export default Nav
