import React from 'react'
import '../styles/IndividualProductPage.css'
import { inject, observer} from 'mobx-react'
// import ProcessImage from 'react-imgpro'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'

import ProductName from '../reusable-components/ProductName'


@inject(['products'])
@observer
class IndividualProductView extends React.Component {

  componentWillMount(){
    this.props.products.fetchAll() // -> this.props.products.all
  }

  findProductById = productId => {
    const product = this.props.products.all.find(
      product => product.id === parseInt(productId, 10)
    );
    return { ...product };
  }


  render(){

    const { onAddToCart, match } = this.props;
    const product = this.findProductById(match)

    const images = [
      {
        original: product.main_img_url,
        thumbnail: product.main_img_url
      },
      {
        original: product.second_img_url,
        thumbnail: product.second_img_url
      },
      {
        original: product.third_img_url,
        thumbnail: product.third_img_url
      },
      {
        original: product.fourth_img_url,
        thumbnail: product.fourth_img_url
      }
    ]


    return(
      <div className="card individual-product-view">
        <div className="primary-image-wrapper">
          <figure className="image show-page">
            <ImageGallery
              items={images}
              slideInterval={2000}
              onImageLoad={this.handleImageLoad}
              showFullscreenButton={false}
              showPlayButton={false}
              disableArrowKeys={true}
              showNav={false}
            />
          </figure>

        </div>

        <div className="card-content ind-prod-view">
          <ProductName>{product.name}</ProductName>
          <p className="subtitle is-5 product-price">
            € {product.price/100}
            <span className='underline'></span>
          </p>

          <p className='description'>{product.description}</p>

          <div className="choose-wrap">
            <p className="subtitle has-text-centered">Choose a color</p>

            <div className="tags">
              <span className="tag is-dark"></span>
              <span className="tag is-primary"></span>
              <span className="tag is-info"></span>
              <span className="tag is-success"></span>
            </div>

          </div>

          <div className="choose-wrap">
            <p className="subtitle has-text-centered">Choose a size</p>

            <div className="tags">
              <span className="tag">10</span>
              <span className="tag">20</span>
              <span className="tag">30</span>
              <span className="tag">40</span>
              <span className="tag">50</span>
              <span className="tag">60</span>
              <span className="tag">70</span>
            </div>

          </div>

            {
              product.stock > 0 ?
              <button
                className="addToCart button is-primary is-outlined"
                onClick={() => onAddToCart(product)}
              >
                Add to cart
              </button>
              :
              <button disabled className="button is-danger is-outlined out-of-stock-btn">Out of stock</button>

            }

            <div className="added-info-footer tabs">
                <ul className="links">
                  <li className='is-active'>
                    <a>Details</a>
                  </li>
                  <li>
                    <a>Features</a>
                  </li>
                  <li>
                    <a>Shipping</a>
                  </li>
                </ul>
            </div>

        </div>
      </div>
    )
  }

}


export default IndividualProductView
