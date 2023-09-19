import React, { useState, useEffect, useRef } from 'react'
import { wrappedGet } from '../FetchMethods'


const ServerStatusWrapper = ({children}) => {
  const [serverStatus, setServerStatus] = useState(false)
  const [dotCount, setDotCount] = useState(0)

  useEffect(() => {
    wrappedGet('status', setServerStatus)
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


  if (serverStatus) return children
  else return (
    <div style={{height: '60vh'}}>
      <h1>Connecting to Server{'.'.repeat(dotCount)}</h1>
    </div>
  )
}

export default ServerStatusWrapper