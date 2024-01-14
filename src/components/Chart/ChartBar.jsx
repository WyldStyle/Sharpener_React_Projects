import './ChartBar.css';

const ChartBar = ({ key, value, maxValue, label }) => {
  // console.log('chartBar', key, value, maxValue, label);
  let barFillHeight = 0;
  if(maxValue){
  barFillHeight = Math.round((value / maxValue) * 100);
  }
  barFillHeight = barFillHeight + '%';
  // console.log(typeof barFillHeight, barFillHeight);
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: barFillHeight }}>
        </div>
      </div>
      {/* style takes only objects as parameters i.e. double {} */}
      <div className="chart-bar__label">{label}</div>
    </div>
  )
}
export default ChartBar;
//imported in Chart.jsx
