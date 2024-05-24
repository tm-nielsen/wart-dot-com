import React from 'react'

const ServerResponseDisplay = ({response, label}) => {
  if (response) return (
    <div className="flex-row">
      <h2 className='server-response-header'>{(label? label: 'Server Response') + ':'}</h2>
      <p style={{margin: 0}}>{response}</p>
    </div>
  )
}

export default ServerResponseDisplay