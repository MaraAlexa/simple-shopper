import React from "react";

import Modal from "react-modal";

import { observable } from "mobx";
import { observer, inject } from "mobx-react";
// import DevTools from 'mobx-react-devtools'
import CreateProductForm from "./CreateProductForm";
import EditProductForm from "./EditProductForm";

import "../../styles/AdminPage.css";

import ProductsTable from './ProductsTable'

@inject(["products"])
@observer
class AdminPage extends React.Component {
  @observable modalIsOpen = false;
  @observable needsUpdate = false;

  componentDidMount() {
    this.props.products.fetchAll();
  }

  openEditModal = () => {
    this.modalIsOpen = true;
    this.needsUpdate = true;
  };

  openCreateModal = () => {
    this.modalIsOpen = true;
  };

  closeModal = () => {
    this.modalIsOpen = false;
    this.needsUpdate = false;
  };

  removeProduct = productId => {
    if (window.confirm("Are you sure?")) {
      this.props.products.remove(productId);
    }
  };

  render() {
    return (
      <div className="column">
        {
          this.props.products.all.length > 0 ?
          <ProductsTable/>
          :
          <div>
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

              {this.needsUpdate ?
                <EditProductForm  />
               :
                <CreateProductForm />
              }
            </Modal>
            <a
              className="button is-primary is-outlined"
              onClick={this.openCreateModal}
            >
              Create New Product
            </a>
          </div>
        }


      </div>
    );
  }
}

export default AdminPage;
