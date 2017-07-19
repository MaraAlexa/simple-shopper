import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../styles/Nav.css'

const Nav = ({ activeTab, onTabChange, cart, toggleMobileNav, isActive }) =>
  <nav className="navbar">
    <div className="navbar-brand">

      <Link to='/' className="navbar-item">
        <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
      </Link>

        <div className="flex is-hidden-desktop">
          <NavLink activeClassName='active' to='/cart' className="navbar-item">
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

        <div
          id='navBurger'
          className={`navbar-burger burger ${isActive}`}
          onClick={toggleMobileNav}
          >

          <span></span>
          <span></span>
          <span></span>
        </div>
        </div>


    </div>{/* end navbar-brand here - contains the logo and the nav burger*/}

      <div
        id="navMobileLinks"
        className={`navbar-menu ${isActive}`}
      >
        <div className="navbar-end">
          <NavLink exact activeClassName='active' to='/' className="navbar-item">
            ProductsPage
          </NavLink>
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
        </div>
      </div>

  </nav>

export default Nav
