import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../styles/LandingPageStatic.css'
import ReactCSSTransitionGroup from 'react-transition-group'

const LandingPageStatic = () => (
  <div className="landing-page">
    <div className="page-header">
      <div className="filter" />
      <div className="content-center">
        <p className="title is-size-1">An open road adventure</p>
        <p className="subtitle is-size-4">Made possible by our reliable gear</p>

        <NavLink
          activeClassName="active"
          className="button is-success cta-large-btn"
          to="/products"
        >
          See our products
        </NavLink>
        <br />
      </div>
    </div>
  </div>

  /* <p className="title best-selling-title">Best selling products</p> */


  /* <div className="best-seller-wrap columns">
      <div className="card column">
        <div className="card-image">
          <figure className="image is-3by2 static-product-one">
            <img src='' alt=""/>
          </figure>
        </div>
      </div>
      <div className="card column">
        <div className="card-image">
          <figure className="image is-3by2 static-product-two">
            <img src='' alt=""/>
          </figure>
        </div>
      </div>
      <div className="card column">
        <div className="card-image">
          <figure className="image is-3by2 static-product-three">
            <img src='' alt=""/>
          </figure>
        </div>
      </div>
    </div> */
)


export default LandingPageStatic
