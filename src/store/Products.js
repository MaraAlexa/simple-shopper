import { observable, action } from "mobx"
import Api from "../api/index"

class Products {
  products_path = "/products"
  orders_path = "/orders"
  // initial state
  @observable all = []
  @observable isLoading = false

  @action async fetchAll() {
    this.isLoading = true
    const response = await Api.get(this.products_path)
    const status = await response.status

    if (status === 200) {
      // update state
      this.all = await response.json()
    }
  }

  @action async add(product) {
    const response = await Api.post(this.products_path, product)
    const status = await response.status
    if(status === 201) {
      this.fetchAll()
    }
  }

  @action async send_order(order_data) {
    const response = await Api.post(this.orders_path, order_data)
    const status = await response.status
    if(status === 201) {
      this.fetchAll()
      // redirect to thank you page
      window.location.replace('thanks')
    }
  }

  @action async remove(productId) {
    this.isLoading = true
    const response = await Api.delete(`${this.products_path}/${productId}`)
    const status = await response.status
    if (status === 200) {
      this.isLoading = false
      this.fetchAll()
    }
  }

  @action async edit(productId, data) {
    this.isLoading = true
    const response = await Api.put(`${this.products_path}/${productId}`, data)
    const status = await response.status
    if(status === 200) {
      this.isLoading = false
      this.fetchAll()
    }
  }
}

export default new Products()
