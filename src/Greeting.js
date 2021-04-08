import React, { useState, useCallback } from 'react'

import './Greeting.css'
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
    <div className="Greeting">
      <h1>Greeter Service</h1>
      <Pane>
        <Input handleChange={handleChange} />
        <Response url={requestUrl} responseData={data} status={status} />
        <Button handleClick={handleClick} />
      </Pane>
      {data && <Footer responseData={data} status={status} />}
    </div>
  )
}
