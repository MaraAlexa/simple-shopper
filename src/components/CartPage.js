import React from 'react'
import '../styles/CartPage.css'
import { Link } from 'react-router-dom'

import CartPageProductView from './CartPageProductView'
import TotalOrder from './TotalOrder'
import EmptyCartMessage from '../reusable-components/EmptyCartMessage'



const CartPage = ({ cart, cartProducts, onAddOne, onRemoveOne }) =>
  <div className='cart-page'>
    <h2 className='cart-title'>Cart Page</h2>
    {
      cartProducts.length > 0 ?
      <ul className='cart-list'>
        {
          cartProducts.map(product =>
            <li
              key={product.id}
              className='CartPage-item box'
            >
              <CartPageProductView
                product={product}
                onAddOne={onAddOne}
                onRemoveOne={onRemoveOne}
              />
            </li>
          )
        }
        {/* cart products total */}
        <li className='cartPage-total'>
          {
            cartProducts.length > 0 ? <TotalOrder cartProducts={cartProducts} /> : null
          }

        </li>
        <div className="goto-checkout-wrap">
          <Link to='/checkout' className='button is-primary goto-checkout-btn'>Checkout</Link>
        </div>
      </ul>
      :
      <EmptyCartMessage pageName='Cart' />
    }


  </div>

export default CartPage
