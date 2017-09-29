import React from "react"
import axios from "axios"
import Dropzone from "react-dropzone" // dropzone for images
import { Image } from "cloudinary-react"
import cloudinary from '../../api/cloudinary-upload-info'

import { observable } from "mobx"
import { observer, inject } from "mobx-react"
// import DevTools from 'mobx-react-devtools'

@inject(['products'])
@observer
class CreateProductForm extends React.Component {
  @observable images_url = []
  @observable images_id = []

  createProduct = e => {
    e.preventDefault()

    const product = {
      name: this.name.value,
      description: this.description.value,
      price: this.price.value,
      stock: this.stock.value,
      size: [this.size.value],
      color: [this.color.value],
      main_img_url: this.images_url[0],
      second_img_url: this.images_url[1],
      third_img_url: this.images_url[2],
      fourth_img_url: this.images_url[3]
    }
    // saving the new product to the backend
    this.props.products.add(product)
    // reset the form and close the modal
    this.productForm.reset()
    this.images_url = []
    this.images_id = []
    this.props.closeModal()
  }

  handleDrop = files => {
    files.map(file => {
      // initial formData
      // const apiKey = "839416173789535"

      const formData = new FormData()
      formData.append("file", file)
      // formData.append('picture', file.picture)
      // formData.append('main_img_url', file.images_url[0])
      formData.append("tags", `codeinfuse, medium, gist`)
      formData.append("upload_preset", cloudinary.uploadPreset) // the code is the preset string provided by cloudinary
      formData.append("api_key", cloudinary.apiKey)
      formData.append("timestamp", (Date.now() / 1000) | 0)

      // making the ajax request
      // const cloudinaryUrl =
      //   "https://api.cloudinary.com/v1_1/dcbdbitwq/image/upload"

      return axios
        .post(cloudinary.API_BASE_URL, formData, {
          headers: { "X-Requested-With": "XMLHttpRequest" }
        })
        .then(response => {
          this.images_url.push(response.data.secure_url)
          this.images_id.push(response.data.public_id)
        })
        .catch(error => {
          console.log(error)
        })
    }) // end of loop
  }

  render() {
    const hasImg = this.images_id !== null
    // const cloudName = 'dokwuww30'
    return (
      <form
        onSubmit={this.createProduct}
        ref={input => (this.productForm = input)}
      >
        {/* <DevTools /> */}
        <section className="create">
          <p className="subtitle">Upload product images</p>

          <div className="upload-img-wrapper">
            <Dropzone
              ref="dropzone"
              onDrop={this.handleDrop}
              accept="image/*"
              multiple={true}
              className="dropzone-img-preview column is-half"
            >
              <p>
                Drop here your product's <b>images</b>
                <span className="upload-icon">
                  <i className="fa fa-upload" aria-hidden="true" />
                </span>
              </p>
            </Dropzone>
            {this.images_id.length > 0 ? (
              <ul className="columns images_wrapper">
                <li className="column is-half">
                  <Image
                    className="product-image"
                    cloudName={cloudinary.cloudName}
                    publicId={this.images_id[0]}
                    width="200"
                    crop="scale"
                  />
                </li>
                <li className="column is-half">
                  <Image
                    className="product-image"
                    cloudName={cloudinary.cloudName}
                    publicId={this.images_id[1]}
                    width="200"
                    crop="scale"
                  />
                </li>
                <li className="column is-half">
                  <Image
                    className="product-image"
                    cloudName={cloudinary.cloudName}
                    publicId={this.images_id[2]}
                    width="200"
                    crop="scale"
                  />
                </li>
                <li className="column is-half">
                  <Image
                    className="product-image"
                    cloudName={cloudinary.cloudName}
                    publicId={this.images_id[3]}
                    width="200"
                    crop="scale"
                  />
                </li>
              </ul>
            ) : null}
          </div>

          <div className="field form-group">
            <div className="control has-icons-left">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                className="input"
                ref={input => (this.name = input)}
                name="name"
                placeholder="Product Name"
              />
            </div>
          </div>

          <div className="field form-group">
            <div className="control has-icons-left">
              <label htmlFor="name">Description *</label>
              <textarea
                name=""
                id=""
                rows="4"
                className="textarea"
                placeholder="Description"
                ref={input => (this.description = input)}
              />
            </div>
          </div>

          <div className="field form-group">
            <div className="control has-icons-left">
              <label htmlFor="price">Price *</label>
              <input
                type="text"
                className="input"
                ref={input => (this.price = input)}
                name="price"
                placeholder="Product Price"
              />
            </div>
          </div>

          <div className="field form-group">
            <div className="control has-icons-left">
              <label htmlFor="stock">Stock *</label>
              <input
                type="text"
                className="input"
                ref={input => (this.stock = input)}
                name="stock"
                placeholder="Stock"
              />
            </div>
          </div>

          <div className="field form-group">
            <div className="control has-icons-left">
              <label htmlFor="size">Size *</label>
              <input
                type="text"
                className="input"
                ref={input => (this.size = input)}
                name="size"
                placeholder="Product Size: S M L XL"
              />
            </div>
          </div>

          <div className="field form-group">
            <div className="control has-icons-left">
              <label htmlFor="color">Color *</label>
              <input
                type="text"
                className="input"
                ref={input => (this.color = input)}
                name="color"
                placeholder="Product Color"
              />
            </div>
          </div>
        </section>

        <button
          className="button is-primary is-pulled-right"
          type="submit"
          disabled={!hasImg}
        >
          Submit
        </button>
      </form>
    )
  }
}

export default CreateProductForm
