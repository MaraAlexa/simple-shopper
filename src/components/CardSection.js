import React from 'react'
import { CardNumberElement, CardExpiryElement, CardCVCElement } from 'react-stripe-elements'
import '../styles/CardSection.css'

const createOptions = (fontSize: string) => {
  return {
    style: {
      base: {
        fontSize: '19px',
        color: '#424770',
        letterSpacing: '0.025em',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#9e2146',
      }
    }
  }
}

const CardSection = () =>
  <div className='bill-to-wrap'>
    <p className="subtitle bill-to">Bill To</p>
    <section className="bill-to columns">
      <div className="column">
        <label>
            Card number
            <CardNumberElement
             {...createOptions()}
            />
          </label>
      </div>
      <div className="column is-one-quarter">
        <label>
          Expiration date
          <CardExpiryElement
             {...createOptions()}
          />
        </label>
      </div>

      <div className="column is-one-quarter">
        <label>
          CVC
          <CardCVCElement
             {...createOptions()}
          />
        </label>
      </div>
    </section>
    <hr/>
  </div>

export default CardSection
