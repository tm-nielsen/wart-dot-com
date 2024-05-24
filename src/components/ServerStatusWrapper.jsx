import React, { useState, useEffect, useRef } from 'react'
import { getServerStatus, wrappedGet } from '../FetchMethods'


const ServerStatusWrapper = ({children, setExternalStatus}) => {
  const [serverStatus, setServerStatus] = useState(0)
  const [dotCount, setDotCount] = useState(0)

  useEffect(() => {
    getServerStatus((status) => {
      let newStatus = status? 1: -1
      setServerStatus(newStatus)
      if (setExternalStatus) setExternalStatus(newStatus)
    })
  }, [])

  // https://overreacted.io/making-setinterval-declarative-with-react-hooks/
  const useInterval = (callback, delay) => {
    const intervalRef = useRef()
    const callbackRef = useRef(callback)

    useEffect(() => {
      callbackRef.current = callback
    }, [callback])

    useEffect(() => {
      if (delay) {
        intervalRef.current = setInterval(() => callbackRef.current(), delay)
        return () => clearInterval(intervalRef.current)
      }
    }, [delay])

    return intervalRef
  }

  useInterval(() => setDotCount((dotCount + 1) % 4), 600)


  if (serverStatus === 1) return children
  else return (
    <div style={{height: '60vh'}}>
      <h1>{serverStatus === 0?
        `Connecting to Server${'.'.repeat(dotCount)}`
        :'Server is Unavailable'}</h1>
    </div>
  )
}

export default ServerStatusWrapper