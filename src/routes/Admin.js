import React, {useState, useEffect} from 'react'
import useFetch from '../hooks/useFetch'
import "../styles/admin.css"

import AdminPageNavigator from '../components/admin/AdminPageNavigator'
import Login from '../components/admin/Login'


const Admin = ({serverUrl}) => {
  const {get, post, patch, fetchDelete} = useFetch(serverUrl)
  const [password, setPassword] = useState('')
  const [showWrong, setShowWrong] = useState(false)
  const [authenticated, setAuthenticated] = useState(false)
  const [pendingWords, setPendingWords] = useState([])


  useEffect(() => {
    get('category/pending', setPendingWords)
  }, [])

  const onLoginSubmit = (value) => {
    setPassword(value)
    get(`authenticate/${value}`, (response) => {
      setAuthenticated(response === true)
      setShowWrong(response !== true)
      setTimeout(() => setShowWrong(false), 2000)
    })
  }


  const commitPromptApproval = async(approvedPrompts, rejectedPrompts) => {
    console.log('committing approved prompts', approvedPrompts)
    await patch('approve', {password, approvedPrompts}, logResponse)

    console.log('committing rejected prompts', rejectedPrompts)
    await patch('reject', {password, rejectedPrompts}, (logResponse))

    get('category/pending', setPendingWords)
  }

  const confirmSelectionOfNewPrompt = () => {
    console.log('selection of new active prompt confirmed')
    patch('select', {password}, logResponse)
  }

  const insertPrompt = (prompt, category) => {
    console.log('inserting prompt', prompt, 'into category', category)
    post('insert', {password, prompt, category}, logResponse)
  }

  const removePrompt = (prompt) => {
    console.log('removing', prompt, 'from all lists')
    fetchDelete('', {password, prompt}, logResponse)
  }

  const overrideActivePrompt = (prompt) => {
    console.log('overwriting current prompt with', prompt)
    patch('override', {password, prompt}, logResponse)
  }

  const logResponse = (response) => {
    console.log(response)
  }


  return (
    <>
      {authenticated?
      <AdminPageNavigator
        pendingPrompts={pendingWords} commitApproval={commitPromptApproval}
        confirmSelect={confirmSelectionOfNewPrompt} overrideActive={overrideActivePrompt}
        insertPrompt={insertPrompt} removePrompt={removePrompt}
      />
      :<Login onSubmit={onLoginSubmit} showWrong={showWrong} />}
      
    </>
  )
  
}

export default Admin
