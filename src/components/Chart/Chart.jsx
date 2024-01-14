import React from 'react';
import './Chart.css';
import ChartBar from './ChartBar.jsx'

//for a single filtered year
const Chart = ({ dataPoints }) => {
  // const dataPointValues = dataPoints.map(dataPoint => dataPoint.value);
  // const maxValueOnChart = Math.max(...dataPointValues);
  let totalMax = dataPoints[0].value;
  for (let i = 0; i < dataPoints.length; i++) {
    if (totalMax < dataPoints[i].value) totalMax = dataPoints[i].value;
  }
  console.log('chart', totalMax);
  return (
    <div className='chart'>
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
        />
      ))}
    </div>
  )
}
export default Chart