import React from 'react'

const ValidationError = (props) =>
  <ul className={`help is-danger is-pulled-right`}>
    <li>* This is not a valid {props.fieldName} *</li>
  </ul>

export default ValidationError
