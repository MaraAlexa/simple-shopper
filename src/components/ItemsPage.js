import React from 'react'
import Item from './Item'
import '../styles/ItemsPage.css'


class ItemsPage extends React.Component {
  render() {
    return (
      <div className="items-page">
        <h2>Items Page</h2>
        {
          this.props.products.map(product =>
            <Item key={product.id} product={product} />
          )
        }
      </div>
    )
  }
}



export default ItemsPage
