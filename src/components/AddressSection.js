import React from 'react'

const AddressSection = () =>
  <div>
    <section className="your-details">
      <p className="subtitle">Your Details</p>

      <div className="field">
        <p className="control has-icons-left">
          <input className="input" type="text" name='cardholder-name' placeholder='First and Last Name' />
          <span className="icon is-small is-left">
            <i className="fa fa-user-o"></i>
          </span>
        </p>
      </div>

      <div className="field">
        <p className="control has-icons-left">
          <input className="input" type="email" name='cardholder-email' placeholder="Email" />
          <span className="icon is-small is-left">
            <i className="fa fa-envelope-o"></i>
          </span>
        </p>
      </div>

      <div className="field">
        <p className="control has-icons-left">
          <input className="input" type="tel" name='cardholder-phone' placeholder='Phone' />
          <span className="icon is-small is-left">
            <i className="fa fa-mobile"></i>
          </span>
        </p>
      </div>
    </section>

    <hr/>

    <section className="ship-to">
      <p className="subtitle">Ship to</p>
      <div className="field">
        <p className="control has-icons-left">
          <input className="input" type="text" name='shipTo-name' placeholder='First and Last Name' />
          <span className="icon is-small is-left">
            <i className="fa fa-user-o"></i>
          </span>
        </p>
      </div>

      <div className="field">
        <p className="control has-icons-left">
          <span className="select">
            <select>
              <option>Country</option>
              <option>Netherlands</option>
              <option>Italy</option>
              <option>Germany</option>
            </select>
          </span>
          <span className="icon is-small is-left">
            <i className="fa fa-globe"></i>
          </span>
        </p>
      </div>

      <div className="field is-grouped">
        <p className="control has-icons-left">
          <input className="input" type="text" name='shipTo-city' placeholder='City' />
          <span className="icon is-small is-left">
            <i className="fa fa-map-o"></i>
          </span>
        </p>
        <p className="control has-icons-left">
          <input className="input" type="text" name='shipTo-postCode' placeholder='Postal Code' />
          <span className="icon is-small is-left">
            <i className="fa fa-map-o"></i>
          </span>
        </p>

      </div>

      <div className="field">
        <p className="control has-icons-left">
          <input className="input" type="text" name='shipTo-street' placeholder='Street Address' />
          <span className="icon is-small is-left">
            <i className="fa fa-map-o"></i>
          </span>
        </p>
      </div>

    </section>

    <hr/>
  </div>


export default AddressSection
