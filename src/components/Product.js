import React from 'react'
import '../styles/Product.css'


const Product = ({ product, onAddToCart, buyProduct }) =>
  <div className="card">
    <div className="card-image">
      <figure className="image is-4by3">
        {
          product.stock > 0 ?
            null
            :
          <div className="notification out-of-stock">
            <strong>Out Of Stock</strong>
          </div>
        }
        <img src={product.main_img_url} alt={product.name} />
      </figure>
    </div>
    <div className="card-content">
      <div className="media">
        <div className="media-content">
          <p className="title is-4">{product.name}</p>
          <p className="subtitle is-6">
            <span className="icon">
              <i className="fa fa-eur" aria-hidden="true"></i>
            </span>
            {product.price/100}
          </p>
        </div>
      </div>

      <div className="content">
        {product.description}
        <br />

        {
          buyProduct ?
          <button
            className="addToCart button is-primary is-outlined"
            onClick={() => onAddToCart(product)}
          >
            Add to cart
          </button>
          :
          null

        }
      </div>
    </div>
  </div>


export default Product
