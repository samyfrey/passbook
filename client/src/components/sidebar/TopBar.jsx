import React from 'react'
import './navbar.scss'
import VpnKeyIcon from '@mui/icons-material/VpnKey'
import { Link } from 'react-router-dom'
import SearchBar from '../Search/SearchBar'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
const TopBar = ({ user, clients }) => {
  const signedInOptions = (
    <div className='signed-in-menu'>
      <Link to='/account/sign-out'><VpnKeyIcon className="icon"/> Sign Out</Link>

    </div>
  )

  return (
    <div className='top-bar'>
      <div className="search-bar">
        <SearchBar data={clients}/>
      </div>

      <div className="user-register">

        {user &&
        <>
          <AccountCircleIcon className="icon"/>
          <span>{user.email}</span>

        </>
        }
        {user &&
          signedInOptions
        }
        {!user &&
        <Link to='/account/register'><VpnKeyIcon className="icon"/> Sign-in/Register</Link>
        }
      </div>

      <div className="item">

      </div>
    </div>

  )
}

export default TopBar
