import React from "react"
import Modal from "react-modal"
import CreateProductForm from "./CreateProductForm"
import EditProductForm from "./EditProductForm"

import { observable } from "mobx"
import { observer, inject } from "mobx-react"

@inject(["products"])
@observer
class ProductsTable extends React.Component {
  @observable modalIsOpen = false
  @observable needsUpdate = false

  componentDidMount() {
    this.props.products.fetchAll()
  }

  openEditModal = () => {
    this.modalIsOpen = true
    this.needsUpdate = true
  }

  openCreateModal = () => {
    this.modalIsOpen = true
  }

  closeModal = () => {
    this.modalIsOpen = false
    this.needsUpdate = false
  }

  removeProduct = productId => {
    if (window.confirm("Are you sure?")) {
      this.props.products.remove(productId)
    }
  }

  render() {
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
            {this.props.products.all.map(product => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.stock}</td>
                <td>{product.price}</td>
                <td>
                  <img className="thumb" src={product.main_img_url} alt="" />
                </td>
                <td>{product.status}</td>
                <td>
                  <a
                    className="edit button is-primary is-outlined"
                    onClick={this.openEditModal}
                  >
                    Edit
                  </a>
                  <Modal
                    isOpen={this.modalIsOpen}
                    onRequestClose={this.closeModal}
                    contentLabel="Modal"
                  >
                    <a
                      className="button is-primary is-outlined is-pulled-right"
                      onClick={this.closeModal}
                    >
                      Close
                    </a>

                    {this.needsUpdate ? (
                      <EditProductForm product={product} />
                    ) : (
                      <CreateProductForm closeModal={this.closeModal} />
                    )}
                  </Modal>
                </td>

                <td>
                  <a
                    onClick={() => this.removeProduct(product.id)}
                    className="button is-danger is-outlined remove"
                  >
                    remove
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <a
          className="button is-primary is-outlined"
          onClick={this.openCreateModal}
        >
          Create New Product
        </a>
      </div>
    )
  }
}

export default ProductsTable
