import React from 'react'
import '../styles/Product.css'
import { inject, observer} from 'mobx-react'

@inject(['products'])
@observer
class IndividualProductView extends React.Component {

  componentWillMount(){
    this.props.products.fetchAll()
  }

  render(){
    const {onAddToCart, buyProduct, product} = this.props
    return(
      <div className="card individual-product-view">
        <div className="primary-image-wrapper">
          <figure className="image">
            <img src={product.main_img_url} alt={product.name} />
          </figure>
        </div>
        <div className="secondary-images-wrapper">
          <figure className="image">
            <img src={product.second_img_url} alt={product.name} />
          </figure>
          <figure className="image">
            <img src={product.third_img_url} alt={product.name} />
          </figure>
          <figure className="image">
            <img src={product.fourth_img_url} alt={product.name} />
          </figure>
        </div>
        <div className="card-content">
          <div className="info-product-wrapper">
                <h3 className="title is-2 product-name">{product.name}</h3>
                <p className="subtitle is-5 has-text-weight-bold product-price">
                  <span className="icon">
                    <i className="fa fa-eur" aria-hidden="true"></i>
                  </span>
                  {product.price/100}
                </p>
          </div>

          <div className="column info-product-wrapper">
            <p className='description'>{product.description}</p>

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
    )
  }

}


export default IndividualProductView
