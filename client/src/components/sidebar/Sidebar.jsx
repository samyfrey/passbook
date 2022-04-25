import './navbar.scss'
import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../images/passbook.png'
import DashboardIcon from '@mui/icons-material/Dashboard'
import PeopleIcon from '@mui/icons-material/People'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
import TimelineIcon from '@mui/icons-material/Timeline'
import PersonIcon from '@mui/icons-material/Person'

export function Sidebar () {
  return (
    <div className='sidebar'>
      {/* <GridViewIcon/> */}

      <div className="logo">

        <img src={logo} alt='' />
      </div>
      {/* <div className='top'><span className="logo">passbook</span></div> */}
      {/* <hr/> */}
      <div className='links'>
        <ul>
          <NavLink to='/'>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </NavLink>
          <NavLink to='/clients/' >
            <li><PeopleIcon className="icon"/>
              <span>Clients</span>
            </li>
          </NavLink>
          <NavLink to='/loans/' >
            <li><AccountBalanceIcon className="icon"/>
              <span>Loans</span>
            </li>
          </NavLink>
          <NavLink to='/budget/' >
            <li><TimelineIcon className="icon"/>
              <span>Budget</span>
            </li>
          </NavLink>
          <NavLink to='/account/' >
            <li><PersonIcon className="icon"/>
              <span>Account</span>
            </li>
          </NavLink>
        </ul>
      </div>
    </div>
  )
}

// export default Sidebar
