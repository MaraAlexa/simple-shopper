import React from 'react'

// components
import TotalOrder from './TotalOrder'
import CardSection from './CardSection'
// import ConfirmOrderBtn from './ConfirmOrderBtn'

import { injectStripe } from 'react-stripe-elements'
import { inject, observer } from 'mobx-react'
import { withRouter } from 'react-router-dom'

// begin form validation
@inject(['products'])
@observer
class CheckoutForm extends React.Component {
  state = {
    showError: false
  }

  handleSubmit = event => {
    event.preventDefault()
    const extraDetails = {
      name: this.name.value,
      email: this.email.value,
      phone: this.tel.value,
      address_country: this.country.value,
      address_city: this.city.value,
      address_zip: this.postcode.value,
      address_line1: this.street.value
    }

    this.props.stripe.createToken(extraDetails).then(({ token }) => {
      console.log('Received Stripe token: ', token)

      const order = {
        cart_products: this.props.cartProducts,
        name: extraDetails.name,
        email: extraDetails.email,
        tel: extraDetails.phone,
        country: extraDetails.address_country,
        city: extraDetails.address_city,
        postcode: extraDetails.address_zip,
        street: extraDetails.address_line1,
        stripe_token: token
      }
      // post request to save the order
      this.props.products.sendOrder(order)

      // empty form fields after submission
      this.checkoutForm.reset()

      // send to thank you page
      this.props.history.push('/thanks')
    })
  }

  render() {
    const { cartProducts } = this.props
    const { orderSaved } = this.props.products
    const buttonText = orderSaved ? 'Order was proccessed successfully' : 'Confirm Order'
    return (
      <form
        onSubmit={this.handleSubmit}
        ref={input => (this.checkoutForm = input)}
         className="payment-form"
      >
        <section className="client-details">
          <p className="subtitle">Contact Details</p>
          <div className="field form-group">
            <div className="control has-icons-left">
              <label htmlFor="name">Name *</label>
              <input
                ref={input => (this.name = input)}
                className="input"
                type="text"
                name="name"
                placeholder="First and Last Name"
              />
              <span className="icon is-small is-left icon-fix">
                <i className="fa fa-user-o" />
              </span>
            </div>
          </div>

          <div className={`field form-group`}>
            <div className="control has-icons-left has-icons-right">
              <label htmlFor="email">Email address *</label>
              <input
                ref={input => (this.email = input)}
                type="email"
                placeholder="Email"
                className="input"
                name="email"
              />
              <span className="icon is-small is-left icon-fix">
                <i className="fa fa-envelope-o" />
              </span>
            </div>
          </div>

          <div className="field form-group">
            <div className="control has-icons-left has-icons-right">
              <label htmlFor="phone">Mobile *</label>
              <input
                ref={input => (this.tel = input)}
                className="input"
                type="tel"
                placeholder="Phone: 10 Digids"
                name="phone"
              />
              <span className="icon is-small is-left icon-fix">
                <i className="fa fa-mobile" />
              </span>
            </div>
          </div>
        </section>

        <section className="ship-to">
          <p className="subtitle">Ship to</p>

          <div className="field form-group">
            <div className="control has-icons-left has-icons-right">
              <label htmlFor="selectedCountry">
                Select your country - Mandatory
              </label>
              <span className="select">
                <span className="icon is-small is-left">
                  <i className="fa fa-globe" />
                </span>

                <select
                  ref={input => (this.country = input)}
                  name="selectedCountry"
                  className="input"
                >
                  <option>Select Country</option>
                  <option value="Netherlands">Netherlands</option>
                  <option value="Italy">Italy</option>
                  <option value="Germany">Germany</option>
                </select>
              </span>
            </div>
          </div>

          <div className="field is-grouped form-group">
            <div className="control has-icons-left has-icons-right city">
              <label htmlFor="city">City *</label>
              <input
                ref={input => (this.city = input)}
                className="input"
                type="text"
                placeholder="City"
                name="city"
              />
              <span className="icon is-small is-left icon-fix">
                <i className="fa fa-map-o" />
              </span>
            </div>

            <div className="control has-icons-left has-icons-right postalCode">
              <label htmlFor="postalCode">Postal Code *</label>
              <input
                ref={input => (this.postcode = input)}
                className="input"
                type="text"
                name="postalCode"
                placeholder="Postal Code"
              />
              <span className="icon is-small is-left icon-fix">
                <i className="fa fa-map-o" />
              </span>
            </div>
          </div>

          <div className="field form-group">
            <div className="control has-icons-left has-icons-right">
              <label htmlFor="address">Street address *</label>
              <input
                ref={input => (this.street = input)}
                className="input"
                type="text"
                name="address"
                placeholder="Street Address"
              />
              <span className="icon is-small is-left icon-fix">
                <i className="fa fa-map-o" />
              </span>
            </div>
          </div>
        </section>

        <hr />

        <CardSection />

        <section className="invoice">
          {cartProducts.length > 0 ? (
            <TotalOrder cartProducts={cartProducts} />
          ) : null}
        </section>

        <div className="field is-grouped submit">
          <p className="control">
            <button disabled={orderSaved} className='button is-primary' type="submit">
              {buttonText}
            </button>
          </p>
        </div>


      </form>
    )
  }
}

export default injectStripe(withRouter(CheckoutForm))
