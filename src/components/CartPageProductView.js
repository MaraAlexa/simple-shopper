import React from 'react'
import '../styles/Product.css'


const CartPageProductView = ({ product, onAddToCart, buyProduct }) =>
  <div>
      <div className="media">
        <figure className="image cart-page-img-wrap">
          <img src={product.image} alt={product.name} />
        </figure>
        <div className="media-content">
          <div className="content">
            <p className="title is-4">{product.name}</p>
            <p className="subtitle is-6">
              <span className="icon">
                <i className="fa fa-eur" aria-hidden="true"></i>
              </span>
              {product.price/100}
            </p>
            <p>{product.description}</p>

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
  </div>


export default CartPageProductView
