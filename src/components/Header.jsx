import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/header.css"

const Header = ({showAdminLink}) => {
  return  (
    <div className="flex-row header">
      <a href="https://linktr.ee/gamedesignclub" target = "_blank" id="club-link">
        <p id="club-link-text">GDC</p>
      </a>
      <p className='header-text'>
        WArt is hosted by the University of Calgary Game Design Club
      </p>
      {showAdminLink?
        <Link to='/admin' className='link' id='admin-link'>Admin</Link>
      :<p className='disabled-admin-link'>Admin</p>}
    </div>
  )
}


export default Header