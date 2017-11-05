import React from 'react'
import '../styles/IndividualProductPage.css'
import styled from 'styled-components'
import ProductName from '../reusable-components/ProductName'

const OutOfStockMsg = styled.div`
  position: absolute;
  width: 100%;
  top: 50%;
  background-color: rgba(255, 55, 55, 0.6);
  color: white;
`

const Product = ({ product, onAddToCart, buyProduct }) =>
  <div className="card product-card">

    <div className="card-image">
      <figure className="image">
        {
          product.stock > 0 ?
            null
            :
          <OutOfStockMsg className='notification out-of-stock'>
            <strong>Out Of Stock</strong>
          </OutOfStockMsg>
        }
        <img src={product.main_img_url} alt={product.name} />
      </figure>
    </div>

    <div className="card-content">
      <ProductName >{product.name}</ProductName>
    </div>
  </div>


export default Product
