import React from "react"
import EditProductForm from "../EditProductForm"
import Modal from "react-modal"

const custom = {
  content: {
    top: "60px"
  }
}

const EditProductModal = ({ product, modalIsOpen, closeModal }) => (
  <Modal isOpen={modalIsOpen} contentLabel="Modal" style={custom}>
    <a
      className="button is-primary is-outlined is-pulled-right"
      onClick={closeModal}
    >
      Close
    </a>
    <EditProductForm product={product} closeModal={closeModal}/>
  </Modal>
)

export default EditProductModal
