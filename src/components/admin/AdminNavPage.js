import React from 'react'

const AdminNavPage = ({setPage}) => {
  return (
    <>
      <h1>Admin</h1>
      <button onClick={() => setPage(1)}>Approve Submissions</button>
      <button onClick={() => setPage(2)}>Select New Prompt</button>
      <button onClick={() => setPage(3)}>Edit</button>
    </>
  )
}

export default AdminNavPage