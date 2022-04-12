import React from 'react'
import {
  Legend,
  Bar,
  BarChart,
  XAxis,
  CartesianGrid,
  Tooltip,
  YAxis
} from 'recharts'

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398
  }

]
export const ChartBar = () => {
  return (
    <BarChart width={530} height={350} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="pv" fill="#8884d8" />
      <Bar dataKey="uv" fill="#82ca9d" />
    </BarChart>

  )
}

// export default BarChart
