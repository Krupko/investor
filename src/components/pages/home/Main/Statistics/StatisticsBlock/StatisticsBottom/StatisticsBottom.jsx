import './StatisticsBottom.scss'

import Card from '../../../../../../Card/Card.jsx'
import Button from '../../../../../../Button/Button.jsx'
import StatisticsPig from './StatisticBottomPig/StatisticBottomPig.jsx'


function StatisticsBottom() {
  return (
    <div className='statistic__bottom'>
      <Card className='statistic__bottom-card statistic__bottom-card-purple'>
        <h4 className='statistic__bottom-card-title statistic__bottom-card-title-purple'>
          Почему нужно инвестировать?
        </h4>
        <p>
          Инвестирование&nbsp;&mdash; это не&nbsp;просто способ приумножения
          капитала, но&nbsp;и&nbsp;ключ к&nbsp;финансовой независимости
          и&nbsp;долгосрочной стабильности. Инвестиции позволяют вашим
          средствам работать на&nbsp;вас, преодолевать инфляцию и&nbsp;создавать
          основу для вашего будущего благосостояния.
        </p>
      </Card>
      <Card className='statistic__bottom-card'>
        <h4 className='statistic__bottom-card-title'>
          Ваш путь к финансовой свободе и успеху в инвестициях
        </h4>
        <p>
          Повышаем финансовую грамотность: учимся управлять бюджетом,
          прощаться с&nbsp;долгами и&nbsp;инвестировать
        </p>

        <StatisticsPig />

        <Button
          className='statistic__bottom-button'
          children='Узнать подробнее' />
      </Card>
    </div>
  )
};


export default StatisticsBottom
