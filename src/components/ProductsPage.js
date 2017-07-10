import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import '../styles/ProductsPage.css'


const ProductsPage = ({products, onAddToCart}) =>
  <div className="products-page">
    <h2>Items Page</h2>
    {
      products.map(product =>
        <Product
          key={product.id}
          product={product}
          onAddToCart={() => onAddToCart(product)}
        />
      )
    }
  </div>



ProductsPage.propTypes = {
  products: PropTypes.array.isRequired,
  onAddToCart: PropTypes.func.isRequired
}

export default ProductsPage
