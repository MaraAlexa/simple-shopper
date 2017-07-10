import React from 'react'
import PropTypes from 'prop-types'
import '../styles/Product.css'


const Product = ({ product, onAddToCart }) =>
  <div className='item-content'>
    <img  className='product-thumb'
      src={product.image}
      alt={product.name}
    />
    <div className="item-info">
      <div className="name-and-description">
        <h4>{product.name}</h4>
        <p className="short-description">{product.description}</p>
      </div>
      <div className="buy-item">
        <div className="price">
          <span className="icon">
            <i className="fa fa-eur" aria-hidden="true"></i>
          </span>
          {product.price/100}
      </div>
        <button
          className="addToCart button is-primary is-outlined"
          onClick={onAddToCart}
        >
          Add to cart
        </button>
      </div>
    </div>
  </div>

Product.propTypes = {
  product: PropTypes.object.isRequired,
  onAddToCart: PropTypes.func.isRequired
}



export default Product
