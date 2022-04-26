import React from 'react'
import './features.scss'
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
// import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
// import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined'
// import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
// import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined'

const FeatureCard = ({ title, data, isMoney }) => {
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{title}</span>
        <span className="counter">
          {isMoney && '$'}
          {data}
          {isMoney && 'MM'}
        </span>
        {/* <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff} %
        </div>
        {data.icon} */}
      </div>
    </div>
  )
}

export default FeatureCard
