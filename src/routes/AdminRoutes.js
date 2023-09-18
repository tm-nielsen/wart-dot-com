import React, {useState, useEffect, useContext, createContext} from 'react'
import { Route, Routes} from 'react-router-dom'
import useFetch from '../FetchMethods'
import "../styles/admin.css"

import AdminRoot from '../components/admin/AdminRoot'
import AdminNavPage from '../components/admin/AdminNavPage'
import ApprovalPage from '../components/admin/ApprovalPage'
import ConfirmSelectPage from '../components/admin/ConfirmSelectPage'
import EditPage from '../components/admin/EditPage'

import AdminPageNavigator from '../components/admin/AdminPageNavigator'
import Login from '../components/admin/Login'

export const AuthContext = createContext({ password:'', authenticated:false })


const Admin = (serverUrl) => {
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
        <Route exact path='/login' element={<Login onSubmit={onLoginSubmit} showWrong={showWrong}/>}/>
        <Route exact path='/admin' element={<AdminRoot />}>
          <Route index element={<AdminNavPage />} />
          <Route path='approve' element={<ApprovalPage pendingPrompts={pendingWords} commitApproval={commitPromptApproval} />}/>
          <Route path='confirm-select' element={<ConfirmSelectPage confirm={confirmSelectionOfNewPrompt} />} />
          <Route path='edit' element={<EditPage insertPrompt={insertPrompt} removePrompt={removePrompt} overrideActive={overrideActivePrompt} />} />
        </Route>
      </>
  )

  // return (
  //   <>
  //     {authenticated?
  //     <AdminPageNavigator
  //       pendingPrompts={pendingWords} commitApproval={commitPromptApproval}
  //       confirmSelect={confirmSelectionOfNewPrompt} overrideActive={overrideActivePrompt}
  //       insertPrompt={insertPrompt} removePrompt={removePrompt}
  //     />
  //     :<Login onSubmit={onLoginSubmit} showWrong={showWrong} />}
      
  //   </>
  // )
  
}

export default Admin
