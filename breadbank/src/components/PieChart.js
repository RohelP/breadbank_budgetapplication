import 'chart.js/auto';
import React from 'react'
import { Pie } from 'react-chartjs-2'

export const PieChart = (props) => {
  const amount = props.amount
  const expense = props.expense
  let chartData = {
    labels: ['Income','Expenses','Goal'],
    datasets:[
      {
        label:'Population',
        data:[
          amount,expense
        ],
        backgroundColor:[
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ]
      }
    ]
  }
  return (
    <div className='chart'>
      <Pie data={chartData}
        options={{
          maintainAspectRatio: false
        }}/>
    </div>
  )
}