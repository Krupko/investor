import './StatisticsBlock.scss'

import StatisticsTop from './StatisticsTop/StatisticsTop.jsx'
import StatisticsBottom from './StatisticsBottom/StatisticsBottom.jsx'

function StatisticsBlock() {
  return (
    <div className="statistics__block">
      <StatisticsTop />
      <StatisticsBottom />
    </div>
  )
}

export default StatisticsBlock
