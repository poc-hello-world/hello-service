import React from 'react'
import 'wired-elements'
import './response.css'

const errorCodes = {
  500: 'Internal Server Error',
  404: 'Not Found',
}
export default ({ url, responseData, status }) => (
  <wired-card style={{ width: '100%', height: '100%' }} elevation="1">
    {!url && <p>No requests made so no response data available yet...</p>}
    {status === 'fetching' && <p>Retrieving response...</p>}
    {Object.keys(errorCodes).includes(status) && <p>{errorCodes[status]}</p>}
    {url && status === 'fetched' && (
      <div className="wrapped">
        <p>{`Response from ${url}:`}</p>
        <p>{JSON.stringify(responseData)}</p>
      </div>
    )}
  </wired-card>
)
