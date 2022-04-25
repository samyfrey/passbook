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

  // <div className="navbar">
  //   <div className="wrapper">
  //     <div className="search">
  //       <input type="text" placeholder="Search..." />
  //       <SearchOutlinedIcon />
  //     </div>
  //     <div className="items">
  //       <div className="item">
  //         <LanguageOutlinedIcon className="icon" />
  //         English
  //       </div>

  //       <div className="item">
  //         <FullscreenExitOutlinedIcon className="icon" />
  //       </div>
  //       <div className="item">
  //         <NotificationsNoneOutlinedIcon className="icon" />
  //         <div className="counter">1</div>
  //       </div>
  //       <div className="item">
  //         <ChatBubbleOutlineOutlinedIcon className="icon" />
  //         <div className="counter">2</div>
  //       </div>
  //       <div className="item">
  //         <ListOutlinedIcon className="icon" />
  //       </div>
  //       <div className="item">
  //         {/* <img
  //           src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
  //           alt=""
  //           className="avatar"
  //         /> */}
  //       </div>
  //     </div>
  //   </div>
  // </div>
  )
}

export default TopBar
