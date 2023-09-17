import React, {useState} from 'react'
import "../../styles/login.css"

const Login = ({onSubmit}) => {
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
        <input id='password-field' className='shadow' placeholder='enter password'
          value={password} onChange={handleChange}/>
      </form>
    </div>
  )
}

export default Login