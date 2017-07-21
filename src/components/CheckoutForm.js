import React from 'react'
import TotalOrder from './TotalOrder'
import AddressSection from './AddressSection'
import CardSection from './CardSection'
import { injectStripe } from 'react-stripe-elements'

class CheckoutForm extends React.Component {

  handleSubmit = (event) => {
    event.preventDefault()
    let form = document.querySelector('form')
    let extraDetails = {
      name: form.querySelector('input[name=cardholder-name]').value,
      email: form.querySelector('input[name=cardholder-email]').value,
      phone: form.querySelector('input[name=cardholder-phone]').value,
      shipName: form.querySelector('input[name=shipTo-name]').value,
      address_city: form.querySelector('input[name=shipTo-city]').value,
      shipPostCode: form.querySelector('input[name=shipTo-postCode]').value,
      address_line1: form.querySelector('input[name=shipTo-street]').value,
    }

    this.props.stripe.createToken(extraDetails).then(({token}) => {
      console.log('Received Stripe token: ', token)
    })

  }

  render() {
    const {cartProducts} = this.props
    return(
      <form onSubmit={this.handleSubmit} >

        <AddressSection cartProducts={cartProducts} />

        <CardSection />

        <section className="invoice">
          {
            cartProducts.length > 0 ? <TotalOrder cartProducts={cartProducts} /> : null
          }
        </section>


        <div className="field is-grouped submit">
          <p className="control">
            <button className="button is-primary">Confirm Order</button>
          </p>
        </div>

      </form>
    )
  }

}


export default injectStripe(CheckoutForm)
