import React from 'react'
import axios from 'axios'
import Dropzone from 'react-dropzone' // dropzone for images
import { Image } from 'cloudinary-react'

import { observable } from 'mobx'
import { observer } from 'mobx-react'

@observer class AdminPage extends React.Component {
  // mobx state for main_img_url
  @observable main_img_url = ''
  @observable main_img_id = ''

  createProduct = e => {
    e.preventDefault()
    const API_URL = 'http://localhost:3000/v1/products'

    const product = {
      name: this.name.value,
      description: this.description.value,
      price: this.price.value,
      stock: this.stock.value,
      size: this.size.value,
      color: this.color.value,
      main_img_url: this.main_img_url
    }

    axios.post(API_URL, {
      product
    })
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    })


    this.productForm.reset()
  }

  handleDrop = files => {
    files.map((file) => {
      // initial formData
      const cloudinaryPreset = 'j3oktzhi'
      const apiKey = '212252819131138'

      const formData = new FormData()
      formData.append('file', file)
      // formData.append('picture', file.picture)
      formData.append('main_img_url', file.main_img_url)
      formData.append('tags', `codeinfuse, medium, gist`)
      formData.append('upload_preset', cloudinaryPreset) // the code is the preset string provided by cloudinary
      formData.append('api_key', apiKey)
      formData.append('timestamp', (Date.now() / 1000) | 0)

      // making the ajax request
      const cloudinaryUrl = 'https://api.cloudinary.com/v1_1/dcbdbitwq/image/upload'

      return axios.post(cloudinaryUrl, formData, {
        headers: { 'X-Requested-With': 'XMLHttpRequest' }
      }).then((response) => {
        this.main_img_url = response.data.secure_url
        this.main_img_id = response.data.public_id
      })
      .catch(error => {
        console.log(error)
      })
    }) // end of loop
    // axios.all(uploaders).then((files) => {
    //   console.log(files);
    // })
  }


  render() {
    const hasImg = this.main_img_url !== '';
    return(
      <div className='column is-8 is-offset-2'>
        <p className="subtitle">CREATE A NEW PRODUCT</p>

        <form onSubmit={this.createProduct} ref={input => this.productForm = input} >
          <section className="create">

            <div className="field form-group">
              <div className="control has-icons-left">
                <label htmlFor="name">Name *</label>
                <input type="text" className="input"
                  ref={(input) => this.name = input}
                  name='name'
                  placeholder='Product Name'
                />
              </div>
            </div>

            <div className="field form-group">
              <div className="control has-icons-left">
                <label htmlFor="name">Description *</label>
                <textarea name="" id="" rows="4" className="textarea"
                    placeholder="Description"
                    ref={(input) => this.description = input}
                    >
                </textarea>
              </div>
            </div>

            <div className="field form-group">
              <div className="control has-icons-left">
                <label htmlFor="price">Price *</label>
                <input type="text" className="input"
                  ref={(input) => this.price = input}
                  name='price'
                  placeholder='Product Price'
                />
              </div>
            </div>

            <div className="field form-group">
              <div className="control has-icons-left">
                <label htmlFor="stock">Stock *</label>
                <input type="text" className="input"
                  ref={(input) => this.stock = input}
                  name='stock'
                  placeholder='Stock'
                />
              </div>
            </div>

            <div className="field form-group">
              <div className="control has-icons-left">
                <label htmlFor="size">Size *</label>
                <input type="text" className="input"
                  ref={(input) => this.size = input}
                  name='size'
                  placeholder='Product Size: S M L XL'
                />
              </div>
            </div>

            <div className="field form-group">
              <div className="control has-icons-left">
                <label htmlFor="color">Color *</label>
                <input type="text" className="input"
                  ref={(input) => this.color = input}
                  name='color'
                  placeholder='Product Color'
                />
              </div>
            </div>
            {/* file upload button by bulma */}
            {/* <div className="file">
              <label className="file-label">
                <input className="file-input" type="file" name="resume" />
                <span className="file-cta">
                  <span className="file-icon">
                    <i className="fa fa-upload"></i>
                  </span>
                  <span className="file-label">
                    Choose a file…
                  </span>
                </span>
              </label>
            </div> */}
            <p className="subtitle">Upload product images</p>
            <Dropzone
              ref="dropzone"
              onDrop={this.handleDrop}
              accept='image/*'
              multiple = {false}
            >
            <p>Drop here your files or click to upload</p>
            </Dropzone>
            {
              this.main_img_url !== '' ?
                <Image
                  cloudName="dcbdbitwq"
                  publicId={`${this.main_img_id}`}
                  width="300"
                  crop="scale"
                />
                :
                null
            }

          </section>

          <button className="button is-primary is-pulled-right"
                  type='submit'
                  disabled={!hasImg}>
            Submit
          </button>
        </form>
      </div>
    )
  }
}

export default AdminPage
