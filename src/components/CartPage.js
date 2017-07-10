import React from 'react'
import '../styles/CartPage.css'

const CartPage = ({ cart }) =>
  <div className='cart-page'>
    <h2>Cart Page</h2>
    <span>You have added {cart.length} products</span>
  </div>

export default CartPage
