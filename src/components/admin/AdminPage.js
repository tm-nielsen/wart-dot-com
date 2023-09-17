import React from 'react'

const AdminPage = ({title, back, children}) => {
  return (
    <>
      <button onClick={back}>Back</button>
      <h1>{title}</h1>
      {children}
    </>
  )
}

export default AdminPage