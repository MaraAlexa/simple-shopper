import React from 'react'
import TotalOrder from './TotalOrder'
import AddressSection from './AddressSection'
import CardSection from './CardSection'
import { injectStripe } from 'react-stripe-elements'

// begin form validation
class CheckoutForm extends React.Component {

  handleSubmit = (event) => {
    event.preventDefault()
    let form = document.querySelector('form')
    let extraDetails = {
      name: form.querySelector('input[name=name]').value,
      email: form.querySelector('input[name=email]').value,
      phone: form.querySelector('input[name=phone]').value,
      address_country: form.querySelector('select[name=selectedCountry]').value,
      // shipName: form.querySelector('input[name=shipTo-name]').value,
      address_city: form.querySelector('input[name=city]').value,
      address_zip: form.querySelector('input[name=postalCode]').value,
      address_line1: form.querySelector('input[name=address]').value,
    }

    this.props.stripe.createToken(extraDetails).then(({token}) => {
      console.log('Received Stripe token: ', token)
    })

  }

  render() {
    const {cartProducts, email, cardholderName, phone, selectedCountry, city, postalCode, address, formErrors, handleUserInput, formValid, emailValid, phoneValid, selectedCountryValid, cityValid, postalCodeValid, addressValid} = this.props;

    return(
      <form onSubmit={this.handleSubmit} >

        <AddressSection
          cartProducts={cartProducts}
          email={email}
          cardholderName={cardholderName}
          phone={phone}
          city={city}
          postalCode={postalCode}
          selectedCountry={selectedCountry}
          address={address}
          handleUserInput={handleUserInput}
          formErrors={formErrors}
          emailValid={emailValid}
          phoneValid={phoneValid}
          selectedCountryValid={selectedCountryValid}
          cityValid={cityValid}
          postalCodeValid={postalCodeValid}
          addressValid={addressValid}
        />

        <CardSection />

        <section className="invoice">
          {
            cartProducts.length > 0 ? <TotalOrder cartProducts={cartProducts} /> : null
          }
        </section>

        <div className="field is-grouped submit">
          <p className="control">
            <button className="button is-primary" type='submit' disabled={!formValid}>Confirm Order</button>
          </p>
        </div>
      </form>
    )
  }

}

export default injectStripe(CheckoutForm)
