import React, { createContext, useContext, useState } from 'react'
import {wrappedGet} from '../FetchMethods'

const AuthContext = createContext()

export const useAuthContext = () => useContext(AuthContext)

const AuthContextProvider = ({children}) => {
  const [password, setPassword] = useState('')
  const [authorized, setAuthorized] = useState(false)

  const submitPassword = (value, handleResponse) => {
    setPassword(value)
    wrappedGet(`authenticate/${value}`, (response) => {
      let success = response === true
      setAuthorized(success)
      handleResponse(success)
    })
  }

  return (
    <AuthContext.Provider value={{password, authorized, submitPassword}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider