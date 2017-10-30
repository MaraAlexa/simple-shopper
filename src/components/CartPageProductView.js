import React from 'react'
import '../styles/IndividualProductPage.css'
import ProductName from '../reusable-components/ProductName'


const CartPageProductView = ({ product, onAddToCart, buyProduct, onRemoveOne, onAddOne}) => (
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

    <div className="cart-product-controls">
      <a
        className='remove-one button is-white'
        onClick={() => onRemoveOne(product)}
      >
        {
          product.count > 1 ?
          <span className='button is-danger is-outlined'>&ndash;</span> : <span className='button is-light'>x</span>
        }
      </a>

      <span className='product-count'>{product.count}</span>

      <button
        className="add-one button is-primary is-outlined"
        onClick={() => onAddOne(product)}
      >
        +
      </button>
    </div>
  </div>
)

export default CartPageProductView
