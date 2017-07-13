import React from 'react'
import PropTypes from 'prop-types'
import '../styles/CartPage.css'

import Product from './Product'

const CartPage = ({ cart, cartProducts, onAddOne, onRemoveOne }) =>
  <div className='cart-page'>
    <h2 className='cart-title'>Cart Page</h2>
    <ul className='cart-list'>
      {
        cartProducts.map(product =>
          <li
            key={product.id}
            className='CartPage-item'
          >
            <Product
              // onAddToCart={() => onAddToCart(product)}
              product={product}
            />
            <div className="cart-product-controls">
              <button
                className='remove-one button is-primary is-outlined'
                onClick={() => onRemoveOne(product)}
              >
                &ndash;
              </button>

              <span className='product-count'>{product.count}</span>

              <button
                className="add-one button is-danger is-outlined"
                onClick={() => onAddOne(product)}
              >
                +
              </button>
            </div>
          </li> )
      }
    </ul>

  </div>

// CartPage.propTypes = {
//   products: PropTypes.array.isRequired
// }

export default CartPage
