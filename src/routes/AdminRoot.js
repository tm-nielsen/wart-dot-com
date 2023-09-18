import React from 'react'
import { Navigate, Link, Outlet, useLocation } from 'react-router-dom'
import { useAuthContext } from '../contexts/AuthContext'
import "../styles/admin.css"

import AdminFooter from '../components/admin/AdminFooter'


const AdminRoot = () => {
  const location = useLocation()
  const {authorized} = useAuthContext()

  if (!authorized)
    return <Navigate to='/login' />

  return (
    <div style={{minHeight: '100vh'}}>
      <div id='admin-page'>
        <Outlet />
      </div>
      <AdminFooter showBack={location.pathname !== '/admin'} />
      {/* <div className="flex-row" id='admin-footer'>
        {?<Link to='/admin'>Admin</Link>:null}
        <Link to='/'>Home</Link>
      </div> */}
    </div>
  )
}

export default AdminRoot
