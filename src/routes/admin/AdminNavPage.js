import React from 'react'
import { Link } from 'react-router-dom'

const AdminNavPage = () => {
  return (
    <>
      <h1>Admin</h1>
      <Link to='approve'>Approve Submissions</Link>
      <Link to='confirm'>Select New Prompt</Link>
      <Link to='edit'>Edit</Link>
    </>
  )
}

export default AdminNavPage