import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import Login from '../components/admin/Login'

const Admin = ({serverUrl}) => {
  const {get, post, patch} = useFetch(serverUrl)
  const [password, setPassword] = useState('')
  const [showWrong, setShowWrong] = useState(false)
  const [authenticated, setAuthenticated] = useState(false)

  const onLoginSubmit = (value) => {
    setPassword(value)
    get(`authenticate/${value}`, (response) => {
      setAuthenticated(response === true)
      setShowWrong(response !== true)
      setTimeout(() => setShowWrong(false), 2000)
    })
  }
  
  // primary (each own page)
  // select new prompt
  // approve/reject pending

  // secondary (all one page)
  // insert prompt
  // remove prompt

  let pageContent
  if (authenticated) {
    pageContent = <div>Admin</div>
  }
  else {
    pageContent = <Login onSubmit={onLoginSubmit} showWrong={showWrong} />
  }
  
  return (
    <>
      {pageContent}
      <Link to='/'>Back</Link>
    </>
  )
  
}

export default Admin
