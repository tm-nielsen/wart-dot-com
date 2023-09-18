const serverUrl = 'http://localhost:3001'

export const wrappedGet = (address, handleResponse) => {
  wrappedFetch(address, handleResponse)
}

export const wrappedPost = (address, requestBody, handleResponse) => {
  wrappedFetch(address, handleResponse, makeRequestOptions('POST', requestBody))
}

export const wrappedPatch = (address, requestBody, handleResponse) => {
  wrappedFetch(address, handleResponse, makeRequestOptions('PATCH', requestBody))
}

export const wrappedDelete = (address, requestBody, handleResponse) => {
  wrappedFetch(address, handleResponse, makeRequestOptions('DELETE', requestBody))
}

const makeRequestOptions = (methodName, requestBody) => {
  return {
    method: methodName,
    body: JSON.stringify(requestBody),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  }
  }

const wrappedFetch = async(address, handleResponse, requestOptions) => {
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
export default wrappedFetch