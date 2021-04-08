import React from 'react'
import 'wired-elements'
import './footer.css'
import Loader from './loader'

export default ({ status, responseData = ['!'] }) => {
  const value = responseData[Object.keys(responseData).pop()]
  return (
    <div className="footer">
      {status !== 'fetching' && <h1 className="heading">{value}</h1>}
      {value !== '!' && ['idle', 'fetching'].includes(status) && (
        <Loader status={status} />
      )}
    </div>
  )
}
