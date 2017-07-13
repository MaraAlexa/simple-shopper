import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import '../styles/ProductsPage.css'

import { Link, Route } from 'react-router-dom'


const ProductsPage = ({products, onAddToCart, buyItem}) =>
  <div className="products-page">
    <h2>Products Page</h2>
    <ul className="products columns is-mobile">
      {
        products.map(product =>

          <li
            className="product column is-one-third"
            key={product.id}
          >
            <Link to={`/products/${product.id}`}>
              <Product
                product={product}
                onAddToCart={null}
                buyItem={buyItem}
              />
            </Link>
            {/* <Route path={`product/${product.id}`} render={({match}) => <h2>{match.params.product.id}</h2>} /> */}
          </li>

        )
      }
    </ul>

  </div>



// ProductsPage.propTypes = {
//   products: PropTypes.array.isRequired,
//   onAddToCart: PropTypes.func.isRequired
// }

export default ProductsPage
