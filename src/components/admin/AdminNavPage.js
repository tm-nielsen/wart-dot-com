import React from 'react'

const AdminNavPage = ({setPage}) => {
  return (
    <>
      <h1>Admin</h1>
      <a onClick={() => setPage(1)}>Approve Submissions</a>
      <a onClick={() => setPage(2)}>Select New Prompt</a>
      <a onClick={() => setPage(3)}>Edit</a>
    </>
  )
}

export default AdminNavPage