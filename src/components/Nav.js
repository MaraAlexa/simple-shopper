import React from 'react'

import '../styles/Nav.css'

const Nav = ({ activeTab, onTabChange }) =>

<nav className="navbar">
  <div className="navbar-brand">
    <a className="navbar-item" href="http://bulma.io">
      <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
    </a>
  </div>{/* end navbar-brand here */}
  <ul className="navbar-end">
    <li className={`nav-item ${activeTab === 0 && 'selected'}`}>
      <a onClick={() => onTabChange(0)} className="navbar-item">ItemsPage</a>
    </li>
    <li className={`nav-item ${activeTab === 1 && 'selected'}`}>
      <a onClick={() => onTabChange(1)} className="navbar-item">Cart</a>
    </li>

  </ul>

  <div className="navbar-burger">
    <span></span>
    <span></span>
    <span></span>
  </div>

</nav>
export default Nav
