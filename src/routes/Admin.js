import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

import AdminNavPage from '../components/admin/AdminNavPage'
import AdminPage from '../components/admin/AdminPage'
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

  const returnToMainPage = () => setCurrentPage(0)

  let pageContent
  if (authenticated) {
    switch(currentPage){
      case 0:
        pageContent = <AdminNavPage setPage={setCurrentPage} />
        break

      case 1:
        pageContent = <AdminPage title='Approve Pending Submissions' back={returnToMainPage}/>
        break

      case 2:
        pageContent = <AdminPage title='Select a New Active Prompt' back={returnToMainPage}>
            <button onClick={() => console.log('selecting new prompt')}>Confirm</button>
          </AdminPage>
        break

      case 3:
        pageContent = <AdminPage title='Edit Prompt Lists' back={returnToMainPage}/>
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
