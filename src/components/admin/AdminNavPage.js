import React from 'react'
import AdminPage from './AdminPage'

const AdminNavPage = ({setPage}) => {
  return (
    <div id='admin-page'>
      <h1>Admin</h1>
      <button onClick={() => setPage(1)}>Approve Submissions</button>
      <button onClick={() => setPage(2)}>Select New Prompt</button>
      <button onClick={() => setPage(3)}>Edit</button>
    </div>
  )
}

export default AdminNavPage