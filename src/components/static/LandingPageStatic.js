import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../styles/LandingPageStatic.css'

const LandingPageStatic = () => (
  <div className="landing-page">
    <div className="page-header">
      <div className="filter" />
      <div className="content-center">
        <p className="title">An open road adventure</p>
        <p className="subtitle">Made possible by our reliable gear</p>

        <NavLink
          activeClassName="active"
          className="button is-primary is-outlined cta-large-btn"
          to="/products"
        >
          See our products
        </NavLink>
        <br />
      </div>
    </div>
  </div>
)


export default LandingPageStatic
