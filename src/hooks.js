import { useState, useEffect } from 'react'

const useFetch = (requestUrl) => {
  const [status, setStatus] = useState('idle')
  const [data, setData] = useState({})

  useEffect(() => {
    if (!requestUrl) return

    const fetchData = async () => {
      setStatus('fetching')
      let response = {}
      try {
        response = await fetch(requestUrl)
        const data = await response.json()
        setData(data)
        setStatus('fetched')
      } catch (e) {
        setStatus(`${response.status}`)
      }
    }

    fetchData()
  }, [requestUrl])

  return { status, data }
}

export { useFetch }
