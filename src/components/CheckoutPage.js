import React from 'react'
import '../styles/CheckoutPage.css'
//for stripe
import { Elements } from 'react-stripe-elements'

import CheckoutForm from './CheckoutForm'
import EmptyCartMessage from '../reusable-components/EmptyCartMessage'


const CheckoutPage = ({ cartProducts }) =>
  <div className='columns is-mobile checkout-wrapper'>
    <div className="is-10-by-12-mobile is-half-desktop-centered">
      {
        cartProducts.length > 0 ?
        <Elements>
          <CheckoutForm
            cartProducts={cartProducts}
          />
        </Elements>
        :
        <EmptyCartMessage pageName='Checkout'  />
      }

    </div>
  </div>


export default CheckoutPage
