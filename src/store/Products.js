// const baseUrl = 'http://localhost:3000/v1/products'



import { observable, action } from "mobx"
import Api from "../api/index"

class Products {
  path = "/products"
  // initial state
  @observable all = []
  @observable isLoading = false

  @action async fetchAll() {
    this.isLoading = true
    const response = await Api.get(this.path)
    const status = await response.status

    if (status === 200) {
      // update state
      this.all = await response.json()
    }
  }

  @action async remove(productId) {
    this.isLoading = true
    const response = await Api.delete(`${this.path}/${productId}`)
    const status = await response.status
    if (status === 200) {
      this.isLoading = false
      this.fetchAll()
    }
  }
}

export default new Products()
