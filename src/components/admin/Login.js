import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const Login = ({onSubmit, showWrong}) => {
  const [password, setPassword] = useState('')

  const handleChange = (event) => {
    setPassword(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (password) {
      onSubmit(password)
      setPassword('')
    }
  }

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