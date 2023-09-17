import React, {useState, useEffect} from 'react'
import useFetch from '../hooks/useFetch'
import "../styles/admin.css"

import AdminPageNavigator from '../components/admin/AdminPageNavigator'
import Login from '../components/admin/Login'


const Admin = ({serverUrl}) => {
  const {get, post, patch} = useFetch(serverUrl)
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


  const commitApprovedPrompts = (promptList) => {
    console.log('committng approved prompts', promptList)
    console.log(pendingWords)

    // get('category/pending', setPendingWords)
  }

  const commitRejectedPrompts = (promptList) => {
    console.log('committing rejected prompts', promptList)

    // get('category/pending', setPendingWords)
  }

  const confirmSelectionOfNewPrompt = () => {
    console.log('selection of new active prompt confirmed')
  }

  const insertPrompt = (prompt, category) => {
    console.log('inserting prompt', prompt, 'into category', category)
  }

  const removePrompt = (prompt) => {
    console.log('removing', prompt, 'from all lists')
  }


  return (
    <>
      {authenticated?
      <AdminPageNavigator
        pendingPrompts={pendingWords} commitApproved={commitApprovedPrompts} commitRejected={commitRejectedPrompts}
        confirmSelect={confirmSelectionOfNewPrompt}
        insertPrompt={insertPrompt} removePrompt={removePrompt}
      />
      :<Login onSubmit={onLoginSubmit} showWrong={showWrong} />}
      
    </>
  )
  
}

export default Admin
