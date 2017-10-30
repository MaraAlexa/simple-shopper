import React from 'react'
import '../styles/IndividualProductPage.css'
// import styled from 'styled-components'
import ProductName from '../reusable-components/ProductName'

const Product = ({ product, onAddToCart, buyProduct }) =>
  <div className="card product-card">
    <div className="card-image">
      <figure className="image">
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
        {/* <p className="title is-4 prod-name">{product.name}</p> */}
        <ProductName className='has-text-centered'>{product.name}</ProductName>
        {/* <p className="subtitle is-6 has-text-centered">
          € {product.price/100}
        </p> */}
      </div>
  </div>


export default Product
