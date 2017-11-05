import React from 'react'

const subtotal = (productsInCart) =>
  productsInCart.reduce((sum, product) => sum + (product.price * product.count)/100, 0)

const TotalOrder = ({ cartProducts }) =>
  <article className="message">
    <div className="message-body">
      <div className="inline">
        <h4 className="subtitle is-4">Subtotal</h4>
        <span className="icon">
          <i className="fa fa-eur" aria-hidden="true"></i>
          {subtotal(cartProducts)}
        </span>

      </div>
      <div className="inline">
        <h4 className="subtitle is-4">Shipping</h4>
        <span className="icon">
          <i className="fa fa-eur" aria-hidden="true"></i>
          5
        </span>
      </div>
      <div className="inline">
        <h4 className="subtitle is-4">Total</h4>
        <span className="icon">
          <i className="fa fa-eur" aria-hidden="true"></i>
          {subtotal(cartProducts) + 5}
        </span>
      </div>
    </div>
  </article>



export default TotalOrder
