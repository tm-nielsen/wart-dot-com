import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import Login from '../components/admin/Login'


const Admin = ({serverUrl}) => {
  const {get, post, patch} = useFetch(serverUrl)
  const [password, setPassword] = useState('')
  const [showWrong, setShowWrong] = useState(false)
  const [authenticated, setAuthenticated] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)


  const onLoginSubmit = (value) => {
    setPassword(value)
    get(`authenticate/${value}`, (response) => {
      setAuthenticated(response === true)
      setShowWrong(response !== true)
      setTimeout(() => setShowWrong(false), 2000)
    })
  }
  
  // 4 pages
  // main with buttons

  // approve/reject pending
  // confirm selection of new prompt
  // edit: insert/delete directly

  let pageContent
  if (authenticated) {
    switch(currentPage){
      case 0:
        pageContent = (
          <>
            <button onClick={() => setCurrentPage(1)}>Approve Submissions</button>
            <button onClick={() => setCurrentPage(2)}>Select New Prompt</button>
            <button onClick={() => setCurrentPage(3)}>Edit</button>
          </>
        )
        break

      case 1:
        pageContent = (
          <>
            <button onClick={() => setCurrentPage(0)}>Back</button>
            <h1>Approve Pending Submissions</h1>
          </>
        )
        break

      case 2:
        pageContent = (
          <>
            <button onClick={() => setCurrentPage(0)}>Back</button>
            <h1>Select a New Active Prompt</h1>
            <button onClick={() => console.log('selecting new prompt')}>Confirm</button>
          </>
        )
        break

      case 3:
        pageContent = (
          <>
            <button onClick={() => setCurrentPage(0)}>Back</button>
            <h1>Edit Prompt Lists</h1>
          </>
        )
        break
    }
  }
  else {
    pageContent = <Login onSubmit={onLoginSubmit} showWrong={showWrong} />
  }
  
  return (
    <>
      {pageContent}
      <Link to='/'>Home</Link>
    </>
  )
  
}

export default Admin
