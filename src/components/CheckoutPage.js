import React from 'react'
import '../styles/CheckoutPage.css'
//for stripe
import { Elements } from 'react-stripe-elements'

import CheckoutForm from './CheckoutForm'


const CheckoutPage = ({ cartProducts }) =>
  <div className='columns is-mobile checkout-wrapper'>
    <div className="column is-half is-offset-one-quarter">
      <Elements>
        <CheckoutForm cartProducts={cartProducts} />
      </Elements>
    </div>
  </div>


export default CheckoutPage
