import React from 'react'

const AdminPage = ({title, back, children}) => {
  return (
    <div id='admin-page'>
      <button onClick={back}>Back</button>
      <h1>{title}</h1>
      {children}
    </div>
  )
}

export default AdminPage