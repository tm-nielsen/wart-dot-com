import React, {useState} from 'react'
import useFetch from '../hooks/useFetch'

import AdminPageNavigator from '../components/admin/AdminPageNavigator'
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


  const commitApprovedPrompts = (promptList) => {

  }

  const commitRejectedPrompts = (promptList) => {

  }

  const confirmSelectionOfNewPrompt = () => {
    console.log('selection of new active prompt confirmed')
  }

  const insertPrompt = (prompt, category) => {

  }

  const removePrompt = (prompt) => {

  }


  return (
    <>
      {authenticated?
      <AdminPageNavigator
        commitApproved={commitApprovedPrompts} commitRejected={commitRejectedPrompts}
        confirmSelect={confirmSelectionOfNewPrompt}
        insertPrompt={insertPrompt} removePrompt={removePrompt}
      />
      :<Login onSubmit={onLoginSubmit} showWrong={showWrong} />}
      
    </>
  )
  
}

export default Admin
