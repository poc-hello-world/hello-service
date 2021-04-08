import React from 'react'
import 'wired-elements'

export default ({ handleChange }) => (
  <wired-input
    style={{ width: '100%' }}
    placeholder="Input service url"
    onInput={handleChange}
  ></wired-input>
)
