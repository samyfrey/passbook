import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined'
import './charts.scss'
const ProgressChart = ({ data, budgetData, budgetStat }) => {
  return (

    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue to Budget</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar className="circle" value={budgetStat.progress} text={`${Math.round(data.toString())}%`} strokeWidth={5} />        </div>
        <p className="title">YTD Revenue</p>
        <p className="amount"><span>$</span>{budgetData.ytdRev}<span>MM</span></p>
        <p className="desc">
          {/* Previous transactions processing. Last payments may not be included. */}
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">$-to-Budget</div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon fontSize="small"/>
              <div className="resultAmount"><span>$</span>{budgetStat.differenceYTD}<span>MM</span></div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">2022 Budget</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount"><span>$</span>{budgetData.thisYearBudget}<span>MM</span></div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">2021 Budget</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount"><span>$</span>{budgetData.lastYearBudget}<span>MM</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>

  // <div className="progressChart">

  // </div>
  )
}

export default ProgressChart
