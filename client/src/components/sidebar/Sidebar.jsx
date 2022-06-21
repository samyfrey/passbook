import './navbar.scss'
import React from 'react'
import { NavLink } from 'react-router-dom'

import { UilEstate, UilUsersAlt, UilUniversity, UilChartLine, UilUserCircle } from '@iconscout/react-unicons'

function Sidebar ({ user }) {
  return (
    <nav className='sidebar'>
      {/* <GridViewIcon/> */}

      <div className="logo">PASSBOOK

        {/* <img src={logo} alt='' /> */}
      </div>
      {/* <div className='top'><span className="logo">passbook</span></div> */}
      {/* <hr/> */}
      <div className='links'>
        <ul>
          <NavLink to='/'>
            <li>
              <UilEstate className="icon" />
              <span>Dashboard</span>
            </li>
          </NavLink>
          <NavLink to='/clients/' >
            <li><UilUsersAlt className="icon"/>
              <span>Clients</span>
            </li>
          </NavLink>
          <NavLink to='/loans/' >
            <li><UilUniversity className="icon"/>
              <span>Loans</span>
            </li>
          </NavLink>
          <NavLink to='/budget/' >
            <li><UilChartLine className="icon"/>
              <span>Budget</span>
            </li>
          </NavLink>
          {user &&
          <NavLink to='/account/' >
            <li><UilUserCircle className="icon"/>
              <span>Account</span>
            </li>
          </NavLink>
          }
        </ul>
      </div>
    </nav>
  )
}

export default Sidebar
