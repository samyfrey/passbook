import React from 'react'
import './navbar.scss'
import { Link } from 'react-router-dom'
import SearchBar from '../Search/SearchBar'
import { UilLock, UilLockOpenAlt, UilSignOutAlt } from '@iconscout/react-unicons'
const TopBar = ({ user, clients }) => {
  const signedInOptions = (
    <div className='signed-in-menu'>
      <Link to='/account/sign-out'><UilSignOutAlt className="icon"/> Sign Out</Link>

    </div>
  )

  return (
    <div className='top-bar'>
      <div className="logo">PASSBOOK

        {/* <img src={logo} alt='' /> */}
      </div>
      <div className="search-bar">
        <SearchBar data={clients}/>
      </div>

      <div className="user-register">

        {user &&
        <>
          <UilLockOpenAlt className="icon"/>
          <span>{user.email}</span>

        </>
        }
        {user &&
          signedInOptions
        }
        {!user &&
        <Link to='/account/register'><UilLock className="icon"/>
         Sign-in/Register</Link>
        }
      </div>

    </div>

  )
}

export default TopBar
