import React from "react";
import { BsList, BsYoutube, BsGrid3X3Gap } from 'react-icons/bs';
import { RiVideoAddLine } from 'react-icons/ri';
import { BiBell } from 'react-icons/bi';
import { ImYoutube2 } from 'react-icons/im'
import '../styles/NavBar.css'
import SearchBar from "./SearchBar";
import ProfileIcon from "./ProfileIcon";

function NavBar() {
  return (
    <nav>
      <div className='nav-headers'>
        <BsList className='icons'/>
        <div className = 'youtube-logo'>
          <BsYoutube fill='red' color='white' className='icons'/>
          <ImYoutube2 className='youtube-icon'/>
        </div>
      </div>
      <SearchBar />
      <div className='account-actions'>
        <RiVideoAddLine className='icons'/>
        <BsGrid3X3Gap className='icons'/>
        <BiBell className='icons'/>
        <ProfileIcon className='icons'/>
      </div>
    </nav>
  )
}

export default NavBar;