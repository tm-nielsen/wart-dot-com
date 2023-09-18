import React, {useState, useEffect} from 'react'
import {wrappedGet, wrappedPost, wrappedPatch, wrappedDelete} from '../FetchMethods'
import "../styles/admin.css"

import AdminPageNavigator from '../components/admin/AdminPageNavigator'
import Login from '../components/admin/Login'


const Admin = () => {
  const [password, setPassword] = useState('')
  const [showWrong, setShowWrong] = useState(false)
  const [authenticated, setAuthenticated] = useState(false)
  const [pendingWords, setPendingWords] = useState([])


  useEffect(() => {
    wrappedGet('category/pending', setPendingWords)
  }, [])

  const onLoginSubmit = (value) => {
    setPassword(value)
    wrappedGet(`authenticate/${value}`, (response) => {
      setAuthenticated(response === true)
      setShowWrong(response !== true)
      setTimeout(() => setShowWrong(false), 2000)
    })
  }


  const commitPromptApproval = async(approvedPrompts, rejectedPrompts) => {
    console.log('committing approved prompts', approvedPrompts)
    await wrappedPatch('approve', {password, approvedPrompts}, logResponse)

    console.log('committing rejected prompts', rejectedPrompts)
    await wrappedPatch('reject', {password, rejectedPrompts}, (logResponse))

    wrappedGet('category/pending', setPendingWords)
  }

  const confirmSelectionOfNewPrompt = () => {
    console.log('selection of new active prompt confirmed')
    wrappedPatch('select', {password}, logResponse)
  }

  const insertPrompt = (prompt, category) => {
    console.log('inserting prompt', prompt, 'into category', category)
    wrappedPost('insert', {password, prompt, category}, logResponse)
  }

  const removePrompt = (prompt) => {
    console.log('removing', prompt, 'from all lists')
    wrappedDelete('', {password, prompt}, logResponse)
  }

  const overrideActivePrompt = (prompt) => {
    console.log('overwriting current prompt with', prompt)
    wrappedPatch('override', {password, prompt}, logResponse)
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
