import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/header.css"

const Header = () => {
  return  (
    <div className="flex-row header">
      <a href="https://linktr.ee/gamedesignclub" target = "_blank" id="club-link">
        <p id="club-link-text">GDC</p>
      </a>
      <p className='header-text'>
        WArt is hosted by the University of Calgary Game Design Club
      </p>
      <Link to='/admin' className='link' id='admin-link'>Admin</Link>
    </div>
  )
}


export default Header