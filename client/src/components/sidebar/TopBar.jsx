import React from 'react'
import './navbar.scss'
import VpnKeyIcon from '@mui/icons-material/VpnKey'
import { Link } from 'react-router-dom'
import SearchBar from '../Search/SearchBar'

const TopBar = ({ user, clients }) => {
  console.log('data is', clients)
  return (
    <div className='top-bar'>
      <div className="search-bar">
        <SearchBar data={clients}/>
      </div>

      <div className="user-register">
        {user &&
        <p>{user.email}</p>
        }
        {!user &&
        <Link to='/account'><VpnKeyIcon className="icon"/> Register/Log in</Link>
        }
      </div>

      {/* <div className='links'><VpnKeyIcon className="icon"/><span> Register/Log in</span></div> */}
      <div className="item">
        {/* <ListOutlinedIcon className="icon" /> */}
      </div>
    </div>

  )
}

export default TopBar
