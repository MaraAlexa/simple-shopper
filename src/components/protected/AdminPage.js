import React from "react";

import { observable } from "mobx";
import { observer, inject } from "mobx-react";
import CreateNewProductModal from './modals/CreateNewProductModal'

import "../../styles/AdminPage.css";

import ProductsTable from './ProductsTable'

@inject(["products"])
@observer
class AdminPage extends React.Component {
  @observable modalIsOpen = false;

  componentDidMount() {
    this.props.products.fetchAll();
  }

  openCreateModal = () => {
    this.modalIsOpen = true;
  };

  closeModal = () => {
    this.modalIsOpen = false;
  };

  removeProduct = productId => {
    if (window.confirm("Are you sure?")) {
      this.props.products.remove(productId);
    }
  };

  render() {
    const {all} = this.props.products
    return (
      <div className="column">
        {
          this.props.products.all.length > 0 ?
          <ProductsTable
            products={all}
            removeProduct={this.removeProduct}
          />
          :
          null
        }

        <CreateNewProductModal
          modalIsOpen={this.modalIsOpen}
          closeModal={this.closeModal}
          openCreateModal={this.openCreateModal}
        />


      </div>
    );
  }
}

export default AdminPage;
