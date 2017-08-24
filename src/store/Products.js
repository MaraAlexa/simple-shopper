// const baseUrl = 'http://localhost:3000/v1/products'
//
// export const loadProducts = () => {
//   return fetch(baseUrl)
//     .then(res => res.json())
// }


import { observable, action } from 'mobx'
import Api from '../api/index'


class Products {
  path = '/products'
  @observable all = []
  @observable isLoading = false

  @action async fetchAll() {
    this.isLoading = true
    const response = await Api.get(this.path)
    const status = await response.status

    if (status === 200) {
      this.all = await response.json()
    }
  }
}


export default new Products()
