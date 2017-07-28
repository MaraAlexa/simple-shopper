import React from 'react'
import '../styles/CheckoutPage.css'

// iterates through all the form validation errors and displays them
const FormErrors = ({ formErrors }) =>
  <div className='columns is-mobile checkout-wrapper'>
    <div className="formErrors column is-half is-offset-one-quarter">
      {
        Object.keys(formErrors).map((fieldName, i) => {
          if(formErrors[fieldName].length > 0) {
            return (
              <p key={i}>{fieldName} {formErrors[fieldName]}</p>
            )
          } else {
            return ''
          }
        })
      }
    </div>
  </div>


export default FormErrors
