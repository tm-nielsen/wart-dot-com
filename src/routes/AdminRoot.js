import React from 'react'
import { Navigate, Link, Outlet } from 'react-router-dom'
import { useAuthContext } from '../contexts/AuthContext'
import "../styles/admin.css"


const AdminRoot = () => {
  const {authorized} = useAuthContext()

  if (!authorized)
    return <Navigate to='/login' />

  return (
    <>
      <div id='admin-page'>
        <Outlet />
      </div>
      <div className="flex-row">
        <Link to='/admin'>Admin</Link>
        <Link to='/'>Home</Link>
      </div>
    </>
  )
}

export default AdminRoot
