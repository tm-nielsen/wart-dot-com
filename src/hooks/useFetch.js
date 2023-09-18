const serverUrl = 'http://localhost:3001'

const useFetch = () => {

  const get = async(address, handleResponse) => {
    await wrapFetch(address, handleResponse)
  }

  const post = async(address, requestBody, handleResponse) => {
    await wrapFetch(address, handleResponse, getRequestOptions('POST', requestBody))
  }

  const patch = async(address, requestBody, handleResponse) => {
    await wrapFetch(address, handleResponse, getRequestOptions('PATCH', requestBody))
  }

  const fetchDelete = async(address, requestBody, handleResponse) => {
    await wrapFetch(address, handleResponse, getRequestOptions('DELETE', requestBody))
  }

  const getRequestOptions = (methodName, requestBody) => {
    return {
      method: methodName,
      body: JSON.stringify(requestBody),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    }
  }

  const wrapFetch = async(address, handleResponse, requestOptions) => {
    try {
      let url = `${serverUrl}/${address}`
      const response = await fetch(url, requestOptions)
      const contentType = response.headers.get('Content-type')

      if (contentType?.includes('application/json'))
      {
        const dataObject = await response.json()
        handleResponse(dataObject)
      } else
      {
        const dataString = await response.text()
        handleResponse(dataString)
      }
    }
    catch(error) {
      let errorString = JSON.stringify(error)
      if (errorString === '{}')
        errorString = 'There was an issue fetching from the server'
      console.error(errorString)
    }
  }

  return {get, post, patch, fetchDelete}
}

export default useFetch