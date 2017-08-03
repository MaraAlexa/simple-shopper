const baseUrl = 'http://localhost:3000/v1/products'

export const loadProducts = () => {
  return fetch(baseUrl)
    .then(res => res.json())
}
