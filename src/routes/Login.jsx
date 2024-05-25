import React, {useState} from 'react'
import { Navigate } from 'react-router-dom'
import { useAuthContext } from '../contexts/AuthContext'

import AdminFooter from '../components/admin/AdminFooter'
import ServerStatusWrapper from '../components/ServerStatusWrapper'


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
    <div className='fill-height login-root'>
      <ServerStatusWrapper>
        <label htmlFor='adminPassword' className='login-label'>Enter Password</label>
        <form className='login-form' onSubmit={handleSubmit}>
          <input type='password' id='adminPassword' name='password' autoComplete='current-password'
            className='text-field shadow' placeholder='enter password'
            value={password} onChange={handleChange}/>
          <button type='submit'>
            Log In
          </button>
        </form>
        <h1 className='login-error-display'>{showWrong? 'WRONG': ''}</h1>
      </ServerStatusWrapper>
      <AdminFooter />
    </div>
  )
}

export default Login