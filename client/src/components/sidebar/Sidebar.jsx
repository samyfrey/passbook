import './sidebar.scss'
import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard'
import PeopleIcon from '@mui/icons-material/People'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
import TimelineIcon from '@mui/icons-material/Timeline'
import PersonIcon from '@mui/icons-material/Person'

export function Sidebar () {
  return (
    <div className='sidebar'>
      {/* <GridViewIcon/> */}

      <div className='top'><span className="logo">passbook</span></div>
      <hr/>
      <div className='center'>
        <ul>
          <li>
            <DashboardIcon />
            <span>Dashboard</span>
          </li>
          <li><PeopleIcon/><span>Clients</span></li>
          <li><AccountBalanceIcon/><span>Loans</span></li>
          <li><TimelineIcon/><span>Budget</span></li>
          <li><PersonIcon/><span>Profile</span></li>
        </ul>
      </div>
      <div className='bottom'>color options</div>
    </div>
  )
}

// export default Sidebar
