import React from 'react'
import '../styles/Product.css'


const IndividualProductView = ({ product, onAddToCart, buyProduct }) =>
  <div className="card individual-product-view">
    <div className="card-image">
      <figure className="image">
        <img src={product.image} alt={product.name} />
      </figure>
    </div>
    <div className="card-content">
      <div className="title">
          <p className="title is-4">{product.name}</p>
          <p className="subtitle is-6 price">
            <span className="icon">
              <i className="fa fa-eur" aria-hidden="true"></i>
            </span>
            {product.price/100}
          </p>
      </div>

      <div className="content">
        <p className='description'>{product.description}</p>
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


export default IndividualProductView
