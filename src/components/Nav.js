import React from 'react'

import '../styles/Nav.css'

const Nav = () =>

<nav className="navbar">
  <div className="navbar-brand">
    <a className="navbar-item" href="http://bulma.io">
      <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
    </a>
  </div>{/* end navbar-brand */}
  <div className="navbar-end">
    <a href="" className="navbar-item">ItemsPage</a>
    <a href="" className="navbar-item">Cart</a>
  </div>

  <div className="navbar-burger">
    <span></span>
    <span></span>
    <span></span>
  </div>

</nav>
export default Nav
