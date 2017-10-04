import React from 'react'
import '../styles/Product.css'
import { inject, observer} from 'mobx-react'
import ProcessImage from 'react-imgpro'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'


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
    console.log(product)
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
            />
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
          </div>
        </div>
      </div>
    )
  }

}


export default IndividualProductView
