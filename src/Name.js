import React, { useState, useCallback } from 'react'

import './Name.css'
import Pane from './components/pane'
import Input from './components/input'
import Button from './components/button'
import Response from './components/response'
import Footer from './components/footer'
import { useFetch } from './hooks'

export default () => {
  const [url, setUrl] = useState('')
  const [requestUrl, setRequestUrl] = useState('')
  const { status, data } = useFetch(requestUrl)

  const handleChange = useCallback((event) => {
    setUrl(event.target.value)
  }, [])

  const handleClick = useCallback(() => {
    setRequestUrl(url)
  }, [url])

  return (
    <div className="Name">
      <h1>Name Service</h1>
      <Pane style={{ height: '20rem' }}>
        <Input handleChange={handleChange} />
        <Response url={requestUrl} responseData={data} status={status} />
        <Button handleClick={handleClick} />
      </Pane>
      {data && <Footer responseData={data} status={status} />}
    </div>
  )
}
