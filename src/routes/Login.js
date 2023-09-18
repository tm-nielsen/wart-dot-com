import React, {useState} from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useAuthContext } from '../contexts/AuthContext'

import AdminFooter from '../components/admin/AdminFooter'


const Login = () => {
  const [password, setPassword] = useState('')
  const [showWrong, setShowWrong] = useState(false)
  const {submitPassword, authorized} = useAuthContext()

  const handleChange = (event) => {
    setPassword(event.target.value)
  }

  const handleSubmit = async(event) => {
    event.preventDefault()
    console.log('submitting password', password)
    if (password) {
      submitPassword(password, (passwordWasCorrect) => setShowWrong(!passwordWasCorrect))
      setPassword('')
    }
  }

  if (authorized)
    return <Navigate to='/admin' />

  return (
    <div id="login-root">
      <label htmlFor='password-field' className='login-label'>Enter Password</label>
      <form className='login-form' onSubmit={handleSubmit}>
        <input id='password-field' className='text-field shadow' placeholder='enter password'
          value={password} onChange={handleChange}/>
      </form>
      <h1 className='login-error-display'>{showWrong? 'WRONG': ''}</h1>
      <AdminFooter />
    </div>
  )
}

export default Login