import React from 'react'
import { Link } from 'react-router-dom'

const AdminFooter = ({showBack}) => {
  return (
    <div className='flex-row footer'>
      {showBack?<Link to=''>Back</Link>:null}
      <Link to='/'>main Page</Link>
    </div>
  )
}

export default AdminFooter