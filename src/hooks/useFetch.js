import React, {useState, useEffect} from 'react'

const serverUrl = 'http://localhost:3001'

const useFetch = () => {
  const [error, setError] = useState('')

  const fetchData = async (address, handleResponse, requestOptions) => {
    try {
      const response = await fetch(`${serverUrl}/${address}`, requestOptions)
      const data = await response.json()
      handleResponse(data)
    }
    catch(error) {
      let errorString = JSON.stringify(error)
      if (errorString !== '{}')
        setError(errorString)
      else
        setError('There was an issue fetching from the server')
    }
  }

  return [fetchData, error, setError]
}

export default useFetch