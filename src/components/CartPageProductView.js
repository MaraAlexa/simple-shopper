import React from 'react'
import '../styles/IndividualProductPage.css'
import ProductName from '../reusable-components/ProductName'

const CartPageProductView = ({ product, onAddToCart, buyProduct }) => (
  <div className="media">
    <figure className="image cart-page-img-wrap">
      <img src={product.main_img_url} alt={product.name} />
    </figure>
    <div className="media-content">
      <div className="content">
        {/* <p className="title is-size-5-mobile prod-name-cart-page">{product.name}</p> */}
        <ProductName className='is-size-5-mobile'>{product.name}</ProductName>
        <p className="price-cart-prod">
         €  {product.price / 100}
        </p>
      </div>
    </div>
  </div>
)

export default CartPageProductView
