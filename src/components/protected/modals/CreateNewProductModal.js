import React from 'react'
import CreateProductForm from '../CreateProductForm'
import Modal from 'react-modal'

const custumStyles = {
  content: {
    top: '60px'
  }
}

class CreateNewProductModal extends React.Component {
  render(){
    const { modalIsOpen, closeModal, openCreateModal } = this.props
    return(
      <div className="create-new-product-modal-wrapper">
        <Modal
          isOpen={modalIsOpen}
          contentLabel='Modal'
          style={custumStyles}
          >
            <a className="button is-primary is-outlined is-pulled-right"
              onClick={closeModal}
              >
              Close
            </a>
            <CreateProductForm />

        </Modal>
        <a className="button is-primary is-outlined"
          onClick={openCreateModal}>
          Create New Product
        </a>
      </div>
    )
  }
}

export default CreateNewProductModal
