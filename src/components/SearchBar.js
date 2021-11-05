import React from "react";
import { BsSearch } from 'react-icons/bs';
import { BiMicrophone } from 'react-icons/bi';
import '../styles/SearchBar.css';

function SearchBar() {
  return (
    <div className='search-container'>
      <form className='search-form'>
        <input type='search'></input>
        <BsSearch className='submit-search-icon'/>
      </form>
      <div className='microphone-search'>
        <BiMicrophone className='microphone-icon'/>
      </div>
    </div>
  )
}

export default SearchBar;