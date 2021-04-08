import React from 'react'
import 'wired-elements'
import './pane.css'

export default ({ children }) => (
  <wired-card style={{ width: '100%' }} elevation="2">
    <div className="pane">{children}</div>
  </wired-card>
)
