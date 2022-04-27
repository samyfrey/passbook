import React from 'react'
import {
  Legend,
  Bar,
  BarChart,
  XAxis,
  CartesianGrid,
  LabelList,
  Tooltip,
  YAxis
} from 'recharts'

export const ChartBar = ({ data }) => {
  return (
    <BarChart width={330} height={260} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey='name' />
      <YAxis />
      <Tooltip />
      <Legend wrapperStyle={{ position: 'absolute' }}/>
      <Bar dataKey='YTD' fill="#8884d8">
        <LabelList dataKey="YTD" position="top" />

      </Bar>
      <Bar dataKey='Budget' fill="#82ca9d">
        <LabelList className="legendChart" dataKey="Budget" position="top" />

      </Bar>
    </BarChart>

  )
}
