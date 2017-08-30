import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../styles/LandingPageStatic.css'


const LandingPageStatic = () =>
  <div className="landing-page">
    <div className="page-header">
      <div className="filter"></div>
      <div className="content-center">
        <p className="title">Landing Page - persisting data</p>
        <p className="subtitle">This is where all starts</p>
        <NavLink
          activeClassName='active'
          className="button is-success is-outlined"
          to='/products'
          >
            See our products
        </NavLink>
      </div>
    </div>

    <p className="title best-selling-title">Best selling products</p>
    <div className="best-seller-wrap columns">
      <div className="card column">
        <div className="card-image">
          <figure className="image is-3by2 static-product-one">
          </figure>
        </div>
      </div>
      <div className="card column">
        <div className="card-image">
          <figure className="image is-3by2 static-product-two">
          </figure>
        </div>
      </div>
      <div className="card column">
        <div className="card-image">
          <figure className="image is-3by2 static-product-three">
          </figure>
        </div>
      </div>
    </div>
  </div>




export default LandingPageStatic
