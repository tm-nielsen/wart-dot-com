import React, { useState, useEffect } from 'react'
import { wrappedGet } from '../FetchMethods'

const ServerStatusWrapper = ({children}) => {
  const [serverStatus, setServerStatus] = useState(false)

  useEffect(() => {
    wrappedGet('status', setServerStatus)
  }, [])

  if (serverStatus) return children
  else return (
    <div style={{height: '60vh'}}>
      <h1>Server Offline</h1>
    </div>
  )
}

export default ServerStatusWrapper