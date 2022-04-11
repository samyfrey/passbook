import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import './charts.scss'
const ProgressChart = ({ progress }) => {
  return (
    <div className="progressChart">
      <CircularProgressbar value={progress} text={`${Math.round(progress.toString())}%`} strokeWidth={5} />
    </div>)
}

export default ProgressChart
