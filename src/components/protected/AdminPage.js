import React from 'react'

import Modal from 'react-modal'

import { observable } from 'mobx'
import { observer } from 'mobx-react'
import DevTools from 'mobx-react-devtools'
import axios from 'axios'
import CreateProductForm from './CreateProductForm'

import '../../styles/AdminPage.css'

const instance = axios.create({
  headers: {
    'X-User-Email': localStorage.getItem('email'),
    'X-User-Token': localStorage.getItem('token')
  }
})

const PRODUCTS_API_URL = 'http://localhost:3000/v1/products'

@observer class AdminPage extends React.Component {

  @observable modalIsOpen = false
  @observable allProducts = []

  componentDidMount() {
    this.fetchProducts()
  }


  openModal = () => {
    this.modalIsOpen = true
  }
  closeModal = () => {
    this.modalIsOpen = false
  }

  fetchProducts = () => {
    return instance.get(PRODUCTS_API_URL)
      .then((response) => {
        this.allProducts = response.data
        console.log(this.allProducts)
      })
      .catch(function (error){
        console.log(error)
      })
  }

  render() {
    // const { all } = this.props.products
    return(
      <div className='column is-8 is-offset-2'>
        {/* <DevTools /> */}
        <a className='button is-primary is-outlined' onClick={this.openModal}>Create New Product</a>
        <Modal
          isOpen={this.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel='Modal'
          >
            <a className='button is-primary is-outlined is-pulled-right' onClick={this.closeModal}>Close</a>
            <h1>Modal Content</h1>
            <CreateProductForm />

        </Modal>

        <table className="table is-bordered is-striped">
          <thead>
            <tr>
              <th><abbr title="ID">ID</abbr></th>
              <th><abbr title="Name">Name</abbr></th>
              <th><abbr title="Stock">Stock</abbr></th>
              <th><abbr title="Price">Price</abbr></th>
              <th><abbr title="Thumb">Thumb</abbr></th>
              <th><abbr title="Status">Status</abbr></th>
            </tr>
          </thead>

          <tbody>
            {
              this.allProducts.map(product =>
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.stock}</td>
                  <td>{product.price}</td>
                  <td>
                    <img src={product.main_img_url} alt=""/>
                  </td>
                  <td>{product.status}</td>
                  <td><a href="" className="edit">edit</a></td>
                  <td><a href="" className="remove">remove</a></td>
                </tr>
              )
            }

          </tbody>
        </table>
      </div>
    )
  }
}

export default AdminPage
