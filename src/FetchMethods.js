const serverUrl = 'http://localhost:3001'

export const wrappedGet = async(address, handleResponse) => {
  await wrappedFetch(address, handleResponse)
}

export const wrappedPost = async(address, requestBody, handleResponse) => {
  await wrappedFetch(address, handleResponse, makeRequestOptions('POST', requestBody))
}

export const wrappedPatch = async(address, requestBody, handleResponse) => {
  await wrappedFetch(address, handleResponse, makeRequestOptions('PATCH', requestBody))
}

export const wrappedDelete = async(address, requestBody, handleResponse) => {
  await wrappedFetch(address, handleResponse, makeRequestOptions('DELETE', requestBody))
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

    if (handleResponse) {
      if (contentType?.includes('application/json'))
      {
        const dataObject = await response.json()
        try { handleResponse(dataObject) }
        catch(error) { console.error(error) }
      } else
      {
        const dataString = await response.text()
        try { handleResponse(dataString) }
        catch (error) { console.log(error) }
      }
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