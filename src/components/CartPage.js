import React from 'react'
import PropTypes from 'prop-types'
import '../styles/CartPage.css'

import Product from './Product'

const CartPage = ({ cart, cartProducts }) =>
  <div className='cart-page'>
    <h2 className='cart-title'>Cart Page</h2>
    <ul className='cart-list'>
      {
        cartProducts.map(product =>
          <li
            key={product.id}
            className='CartPage-item'
          >
            <Product product={product} />
          </li> )
      }
    </ul>

  </div>

CartPage.propTypes = {
  products: PropTypes.array.isRequired
}

export default CartPage
