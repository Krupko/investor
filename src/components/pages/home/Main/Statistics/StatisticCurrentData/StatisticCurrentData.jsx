import './StatisticCurrentData.scss'

function StatisticCurrentData() {

	const currentMonth = new Date().toLocaleDateString('ru-RU', {month: 'long', day: 'numeric'})
	const currentWeek = Math.ceil((new Date() - new Date(new Date().getFullYear(), 0, 1))
		/ (7 * 24 * 60 * 60 * 1000));

	return (
		<p className="current-data">
			Сегодня {currentMonth}, идет {currentWeek} неделя
		</p>
	)
}

export default StatisticCurrentData