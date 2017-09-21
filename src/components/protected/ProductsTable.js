import React from "react"

import { observable } from "mobx"
import { observer} from "mobx-react"

import Toggle from 'react-toggle'
import 'react-toggle/style.css'

import '../../styles/ProductsTable.css'

import EditProductModal from './modals/EditProductModal'

@observer
class ProductsTable extends React.Component {
  @observable modalIsOpen = false
  @observable product = {}

  openEditModal = (productId) => {
    this.modalIsOpen = true
    this.product = this.props.products.filter(p => p.id === Number(productId))[0]
  }

  closeModal = () => {
    this.modalIsOpen = false
  }

  render() {
    const { products, removeProduct } = this.props
    return (
      <div className="column is-8 is-offset-2">
        <table className="table is-bordered is-striped">
          <thead>
            <tr>
              <th>
                <abbr title="ID">ID</abbr>
              </th>
              <th>
                <abbr title="Name">Name</abbr>
              </th>
              <th>
                <abbr title="Stock">Stock</abbr>
              </th>
              <th>
                <abbr title="Price">Price</abbr>
              </th>
              <th>
                <abbr title="Thumb">Thumb</abbr>
              </th>
              <th>
                <abbr title="Status">Status</abbr>
              </th>
            </tr>
          </thead>

          <tbody>
            {products.map(product => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>
                  {
                    product.stock <= 0 ?
                      <span className="tag is-danger out-of-stock">Out of stock</span>
                      :
                      product.stock
                  }
                </td>
                <td>{product.price}</td>
                <td>
                  <img className="thumb" src={product.main_img_url} alt="" />
                </td>
                <td className='status'>
                  <Toggle
                    defaultChecked={true} />
                </td>
                <td>
                  <a
                    className="button is-small is-primary is-outlined"
                    onClick={() => this.openEditModal(product.id)}
                  >
                    Edit
                  </a>

                </td>

                <td>
                  <a
                    onClick={() => removeProduct(product.id)}
                    className="button is-small is-danger is-outlined remove"
                  >
                    remove
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <EditProductModal
          modalIsOpen={this.modalIsOpen}
          closeModal={this.closeModal}
          product={this.product}
        />

      </div>
    )
  }
}

export default ProductsTable
