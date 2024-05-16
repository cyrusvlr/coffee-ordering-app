import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Order your favorite coffee here</h2>
        <p>Choose from a diverse menu featuring different types of great coffee at an affordable price.
        We are a home-grown coffee company focused on making premium beverages more accessible.
        </p>
        <a href="#explore-menu"><button>View Menu</button></a>
      </div>
    </div>
  )
}

export default Header