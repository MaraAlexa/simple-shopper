import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../images/bike-logo-no-bg.svg'
import '../styles/Nav.css'


class Nav extends React.Component {

  render() {
    const { cart, toggleMobileNav, isActive, user } = this.props
    return(
      <nav className="navbar">
        <div className="navbar-brand">

          <Link to='/' className="navbar-item logo-link">
            <img className='logo' src={logo} alt="Bike Shop Logo" />
          </Link>

            <div className="flex is-hidden-desktop">
              <NavLink activeClassName='active cart-link' to='/cart' className="navbar-item">
                <span className="icon">
                  <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>
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
              <NavLink exact activeClassName='active' to='/products' className="navbar-item">
                ProductsPage
              </NavLink>
              <NavLink activeClassName='active' to='/cart' className="navbar-item">
                Cart
                <span className="icon cart-icon-wrap">
                  <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>
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
              {
                user.authenticated ? <a onClick={() => user.destroySession()} className='navbar-item'>Sign Out!</a> : null
              }
            </div>
          </div>

      </nav>
    )
  }
}


export default Nav
