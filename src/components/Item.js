import React from 'react'

import '../styles/Item.css'

const Item = () =>
  <div className='item-content'>
    <img src="http://via.placeholder.com/140x100" alt=""/>
    <div className="item-info">
      <div className="name-and-description">
        <h4>Product Name</h4>
        <p className="short-description">Short description</p>
      </div>
      <div className="buy-item">
        <div className="price">$221</div>
        <button className="addToCart button is-primary is-outlined">Add to cart</button>
      </div>
    </div>

  </div>

export default Item
