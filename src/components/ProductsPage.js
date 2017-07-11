import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import '../styles/ProductsPage.css'


const ProductsPage = ({products, onAddToCart}) =>
  <div className="products-page">
    <h2>Items Page</h2>
    <ul className="products">
      {
        products.map(product =>
          <li className="product" key={product.id}>
            <Product
              product={product}
              onAddToCart={() => onAddToCart(product)}
            />
          </li>

        )
      }
    </ul>
    
  </div>



ProductsPage.propTypes = {
  products: PropTypes.array.isRequired,
  onAddToCart: PropTypes.func.isRequired
}

export default ProductsPage
