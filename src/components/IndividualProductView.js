import React from 'react'
import '../styles/Product.css'
import { inject, observer} from 'mobx-react'


@inject(['products'])
@observer class IndividualProductView extends React.Component {



  componentWillMount(){
    this.props.products.fetchAll()
    console.log(this.props.products.all);
  }


  render(){
    const {onAddToCart, buyProduct, product} = this.props
    // const { all } = this.props.products
    // const product = all.filter(p => p.id === parseInt(this.props.match, 10) )
    return(
      <div className="card individual-product-view">
        <div className="primary-image-wrapper">
          <figure className="image">
            <img src={product.main_img_url} alt={product.name} />
          </figure>
        </div>
        <div className="secondary-images-wrapper">
          <figure className="image is-128x128">
            <img src={product.second_img_url} alt={product.name} />
          </figure>
          <figure className="image is-128x128">
            <img src={product.third_img_url} alt={product.name} />
          </figure>
          <figure className="image is-128x128">
            <img src={product.fourth_img_url} alt={product.name} />
          </figure>
        </div>
        <div className="card-content">
          <div className="product-info">
                <p className="title is-2 product-name">{product.name}</p>
                <p className="subtitle is-5 product-price">
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
    )
  }

}



export default IndividualProductView
