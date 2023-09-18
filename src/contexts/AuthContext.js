import React, { createContext, useContext, useState } from 'react'
import useFetch from '../FetchMethods'

const AuthContext = createContext()

export const useAuthContext = () => useContext(AuthContext)

const AuthContextProvider = ({children}) => {
  const {get} = useFetch()
  const [password, setPassword] = useState('')
  const [authorized, setAuthorized] = useState(false)

  const submitPassword = (value) => {
    setPassword(value)
    let success
    get(`authenticate/${value}`, (response) => {
      success = response === true
      setAuthorized(success)
    })
    return success
  }

  return (
    <AuthContext.Provider value={{password, authorized, submitPassword}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider