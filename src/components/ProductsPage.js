import React from 'react'
import Product from './Product'
import Spinner from 'react-spinkit'
import '../styles/ProductsPage.css'

import { Link } from 'react-router-dom'
import { inject, observer } from 'mobx-react'


@inject(['products'])
@observer class ProductsPage extends React.Component {

  componentWillMount() {
    this.props.products.fetchAll()
  }

  render() {

    const { all, isLoading } = this.props.products

    return(

        <div className="products-page">
          <h2>Products Page</h2>
          <ul className="products columns is-mobile">
            {
              isLoading ?
              <Spinner name="ball-scale-ripple" color="brown"/>
              :
              all.map(product =>
                <li
                  className="product column is-one-third is-half-mobile"
                  key={product.id}
                >
                  <Link to={`/products/${product.id}`}>
                    <Product
                      product={product}
                      onAddToCart={null}
                    />
                  </Link>
                </li>
              )
            }
          </ul>
        </div>

    )
  }
}


export default ProductsPage
