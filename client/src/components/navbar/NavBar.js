import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import NotificationsIcon from '@mui/icons-material/Notifications'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import logo from '../../images/netflix-logo.png'
import './navbar.scss'

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled((window.pageYOffset == 0) ? false : true)
    return () => window.onscroll = null
  }

  return (
    <div className={(isScrolled) ? "navbar scrolled" : "navbar"}>
      <div className='container'>
          <div className='left'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png'
            alt=''
            />
            <span>Homepage</span>
            <span>Series</span>
            <span>Movies</span>
            <span>New and Popular</span>
            <span>My List</span>
          </div>
          <div className='right'>
             <SearchIcon className='icon'/>
             <span>KID</span>
             <NotificationsIcon className='icon'/>
             <img src='https://media-exp1.licdn.com/dms/image/C5603AQEciiR9b5STuQ/profile-displayphoto-shrink_100_100/0/1570028147976?e=1669852800&v=beta&t=HcwSnWGjIIyjIl2vftrmxncu4sKUVmvvr4LextetWmE'/>
             <div className='profile'>
                <ArrowDropDownIcon className='icon'/>
                <div className='options'>
                  <span>Settings</span>
                  <span>Logout</span>
                </div>
             </div>
             
          </div>
      </div>  
    </div>
  )
}

export default NavBar