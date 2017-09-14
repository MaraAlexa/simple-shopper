import React from 'react'
import '../styles/CheckoutPage.css'
//for stripe
import { Elements } from 'react-stripe-elements'

import CheckoutForm from './CheckoutForm'


const CheckoutPage = ({ cartProducts, email, cardholderName, phone, selectedCountry, city, postalCode, address, handleUserInput, formValid, nameValid, emailValid, phoneValid, selectedCountryValid, cityValid, postalCodeValid, addressValid }) =>
  <div className='columns is-mobile checkout-wrapper'>
    <div className="column is-half is-offset-one-quarter">
      {
        cartProducts.length > 0 ?
        <Elements>
          <CheckoutForm
            cartProducts={cartProducts}
            email={email}
            cardholderName={cardholderName}
            phone={phone}
            selectedCountry={selectedCountry}
            city={city}
            postalCode={postalCode}
            address={address}
            handleUserInput={handleUserInput}
            formValid={formValid}
            nameValid={nameValid}
            emailValid={emailValid}
            phoneValid={phoneValid}
            selectedCountryValid={selectedCountryValid}
            cityValid={cityValid}
            postalCodeValid={postalCodeValid}
            addressValid={addressValid}
          />
        </Elements>
        :
        <p>Your cart is empthy, please add a product to proceed to checkout</p>
      }

    </div>
  </div>


export default CheckoutPage
