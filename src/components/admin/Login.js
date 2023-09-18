import React, {useState} from 'react'
import { Link, redirect, Navigate } from 'react-router-dom'
import { useAuthContext } from '../../contexts/AuthContext'

const Login = () => {
  const [password, setPassword] = useState('')
  const [showWrong, setShowWrong] = useState(false)
  const {submitPassword, authorized} = useAuthContext()

  const handleChange = (event) => {
    setPassword(event.target.value)
  }

  const handleSubmit = async(event) => {
    event.preventDefault()
    if (password) {
      submitPassword(password, (passwordWasCorrect) => setShowWrong(!passwordWasCorrect))
      setPassword('')
    }
  }

  if (authorized)
    return <Navigate to='/admin' />

  return (
    <div id="login-root">
      <h1>Enter Password</h1>
      <form id='login-form' onSubmit={handleSubmit}>
        <input className='text-field shadow' placeholder='enter password'
          value={password} onChange={handleChange}/>
      </form>
      {showWrong? <h1>WRONG</h1>: null}
      <Link to='/'>Home</Link>
    </div>
  )
}

export default Login