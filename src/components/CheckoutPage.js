import React from 'react'
import '../styles/CheckoutPage.css'

import TotalOrder from './TotalOrder'


const CheckoutPage = ({ cartProducts }) =>
  <div className='columns is-mobile checkout-wrapper'>
    <div className="column is-half is-offset-one-quarter">

      <section className="your-details">
        <p className="subtitle">Your Details</p>

        <div className="field">
          <p className="control has-icons-left">
            <input className="input" type="text" placeholder='First and Last Name' />
            <span className="icon is-small is-left">
              <i className="fa fa-user-o"></i>
            </span>
          </p>
        </div>

        <div className="field">
          <p className="control has-icons-left">
            <input className="input" type="email" placeholder="Email" />
            <span className="icon is-small is-left">
              <i className="fa fa-envelope-o"></i>
            </span>
          </p>
        </div>

        <div className="field">
          <p className="control has-icons-left">
            <input className="input" type="tel" placeholder='Phone' />
            <span className="icon is-small is-left">
              <i className="fa fa-mobile"></i>
            </span>
          </p>
        </div>
      </section>

      <hr/>

      <section className="ship-to">
        <p className="subtitle">Ship to</p>
        <div className="field">
          <p className="control has-icons-left">
            <input className="input" type="text" placeholder='First and Last Name' />
            <span className="icon is-small is-left">
              <i className="fa fa-user-o"></i>
            </span>
          </p>
        </div>

        <div className="field">
          <p className="control has-icons-left">
            <span className="select">
              <select>
                <option>Country</option>
                <option>Netherlands</option>
                <option>Italy</option>
                <option>Germany</option>
              </select>
            </span>
            <span className="icon is-small is-left">
              <i className="fa fa-globe"></i>
            </span>
          </p>
        </div>

        <div className="field is-grouped">
          <p className="control has-icons-left">
            <input className="input" type="text" placeholder='City' />
            <span className="icon is-small is-left">
              <i className="fa fa-map-o"></i>
            </span>
          </p>
          <p className="control has-icons-left">
            <input className="input" type="text" placeholder='Postal Code' />
            <span className="icon is-small is-left">
              <i className="fa fa-map-o"></i>
            </span>
          </p>

        </div>

        <div className="field">
          <p className="control has-icons-left">
            <input className="input" type="text" placeholder='Street Address' />
            <span className="icon is-small is-left">
              <i className="fa fa-map-o"></i>
            </span>
          </p>
        </div>

      </section>

      <hr/>

      <section className="bill-to">

        <p className="subtitle">Bill To</p>

        <div className="field">
          <p className="control has-icons-left">
            <input className="input" type="text" placeholder='Card Details' />
            <span className="icon is-small is-left">
              <i className="fa fa-credit-card"></i>
            </span>
          </p>
        </div>

      </section>

      <hr/>

      <section className="invoice">
        {
          cartProducts.length > 0 ? <TotalOrder cartProducts={cartProducts} /> : null
        }
      </section>


      <div className="field is-grouped submit">
        <p className="control">
          <button className="button is-link">Cancel</button>
        </p>
        <p className="control">
          <button className="button is-primary">Submit</button>
        </p>
      </div>

    </div>
  </div>


export default CheckoutPage
