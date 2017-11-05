import React from 'react'
import '../styles/IndividualProductPage.css'
import ProductName from '../reusable-components/ProductName'
import ProductPrice from '../reusable-components/ProductPrice'


const CartPageProductView = ({ product, onAddToCart, buyProduct, onRemoveOne, onAddOne}) => (
  <div className="cart-page-media">
    <figure className="image cart-page-img-wrap">
      <img src={product.main_img_url} alt={product.name} />
    </figure>
      <div className="product-in-cart">
        {/* <p className="title is-size-5-mobile prod-name-cart-page">{product.name}</p> */}
        <ProductName id='cartpage-name'>{product.name}</ProductName>
        <ProductPrice>
         €  {product.price / 100}
       </ProductPrice>
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
