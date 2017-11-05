import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Notification = styled.div`
  background: linear-gradient(to right, #4776e6, #8e54e9);
  margin-top: 5rem;
  padding: 2rem;
  color: white;
  border-radius: .2rem;
  line-height: 1.5rem;
  border: 10px solid white;
`

const EmptyCartMessage = ({ pageName }) =>
  <Notification className="notification animated fadeInDown">
      You cart is <strong>empty</strong>.
      Add products to your cart before proceeding to the {pageName} page. <Link className='is-link' to='/products'>Go to Products</Link>
  </Notification>

export default EmptyCartMessage
