import React, {useState, useEffect} from 'react'

const useFetch = (serverUrl) => {
  const [error, setError] = useState('')

  const fetchData = async (address, handleResponse, requestOptions) => {
    try {
      let url = `${serverUrl}/${address}`
      const response = await fetch(url, requestOptions)
      const contentType = response.headers.get('content-type')

      if (contentType?.includes('application/json'))
      {
        const dataObject = await response.json()
        handleResponse(dataObject)
      } else
      {
        const dataString = await response.text()

        try {
          const dataObject = JSON.parse(dataString)
          handleResponse(dataObject)
        } catch(error)
        {
          handleResponse(dataString)
        }
      }
    }
    catch(error) {
      let errorString = JSON.stringify(error)
      if (errorString === '{}')
        errorString = 'There was an issue fetching from the server'
      console.error(errorString)
      setError(errorString)
    }
  }

  return [fetchData, error, setError]
}

export default useFetch