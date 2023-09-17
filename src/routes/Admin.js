import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import Login from '../components/admin/Login'

const Admin = ({serverUrl}) => {
  const {get, post, patch} = useFetch(serverUrl)
  const [password, setPassword] = useState('')
  const [showWrongPasswordMessage, setShowWrongPasswordMessage] = useState(false)
  const [authenticated, setAuthenticated] = useState(false)

  const onLoginSubmit = (value) => {
    setPassword(value)
    get(`authenticate/${value}`, (response) => {
      setAuthenticated(response === true)
      setShowWrongPasswordMessage(response !== true)
      setTimeout(() => setShowWrongPasswordMessage(false), 2000)
    })
  }
  
  
  return (
    <>
      {authenticated?
        <div>Admin</div>
      :
        <Login onSubmit={onLoginSubmit} />
      }
      {showWrongPasswordMessage? <h1>WRONG</h1>: null}
      <Link to='/'>Back</Link>
    </>
  )
  
}

export default Admin
