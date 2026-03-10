import './Statistics.scss'
import StatisticCurrentData from './StatisticCurrentData/StatisticCurrentData.jsx'
import StatisticsBlock from './StatisticsBlock/StatisticsBlock.jsx'

function Statistics() {
  return (
    <section className="statistics">
      <StatisticCurrentData />
      <StatisticsBlock />
    </section>
  )
}

export default Statistics
