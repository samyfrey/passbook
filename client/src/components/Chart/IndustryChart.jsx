import React from 'react'
import './chart.scss'

import {
  PieChart,
  Pie,
  LabelList
//   Label
} from 'recharts'

const IndustryChart = () => {
//   const data01 = [
//     {
//       name: 'Group A',
//       value: 400
//     },
//     {
//       name: 'Group B',
//       value: 300
//     }
//   ]
  const data02 = [
    {
      name: 'Group A',
      value: 2400
    },
    {
      name: 'Group B',
      value: 4567
    },
    {
      name: 'Group C',
      value: 1398
    },
    {
      name: 'Group D',
      value: 9800
    },
    {
      name: 'Group E',
      value: 3908
    },
    {
      name: 'Group F',
      value: 4800
    }
  ]

  const renderLabel = (props) => {
    const { x, y, width } = props
    const radius = 10

    return (
      <g>
        <circle cx={x + width / 2} cy={y - radius} r={radius} fill="#8884d8" />
      </g>
    )
  }
  return (
    <div>

      <PieChart width={730} height={250}>
        <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8">
          {/* <LabelList dataKey="name" position="outside" /> */}
          <LabelList content={renderLabel} />
        </Pie>
        {/* <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d"> */}

        {/* </Pie> */}
      </PieChart>

    </div>
  )
}

export default IndustryChart
