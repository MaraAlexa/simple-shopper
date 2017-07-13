import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../styles/Nav.css'

const Nav = ({ activeTab, onTabChange, cart }) =>
  <nav className="navbar">
    <div className="navbar-brand">
      <Link to='/' className="navbar-item">
        <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
      </Link>
    </div>{/* end navbar-brand here */}

    <ul className="navbar-end">
      <li>
        <NavLink exact activeClassName='active' to='/' className="navbar-item">
          ProductsPage
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/cart' className="navbar-item">
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
        </NavLink>
      </li>
    </ul>

    <div className="navbar-burger">
      <span></span>
      <span></span>
      <span></span>
    </div>

  </nav>

export default Nav
