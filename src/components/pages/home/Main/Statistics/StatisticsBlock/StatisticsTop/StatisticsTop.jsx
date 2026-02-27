import './StatisticsTop.scss'
import Card from '../../../../../../Card/Card.jsx'
import Link from '../../../../../../Links/Link.jsx'

function StatisticsTop() {
  return <div className='statistic__top'>
    <Card className="statistic__top-card">
      <h4 className="statistic__top-title">Курсы валют</h4>

      <table>
        <tbody>
          <tr>
            <td>¥</td>
            <td className="col2">13₽</td>
            <td className="col3">+0,99%</td>
          </tr>
          <tr>
            <td>$</td>
            <td className="col2">96₽</td>
            <td className="col3">+0,99%</td>
          </tr>
          <tr>
            <td>€</td>
            <td className="col2">105₽</td>
            <td className="col3">-0,99%</td>
          </tr>
        </tbody>
      </table>
    </Card>

    <Card className="statistic__top-card">
      <div className="statistic__card-wrapper-content">
        <h4 className="statistic__top-title">
          Ключевая <br className="statistic__top-title-br555" /> ставка ЦБ<br className="statistic__top-title-br" />
          <span className="statistic__top-title-big">13%</span>
        </h4>
      </div>

      <div className="statistic__top-card-wrapper-content">
        <Link
          href={'#exclude'}
          label={"Смотреть"}
        />
        <span className="statistic__top-card-dat">Обзор обновлен 23.09</span>
      </div>
    </Card>

    <Card className="statistic__top-card">
      <div className="statistic__top-card-wrapper-content">
        <h4 className="statistic__top-title">
          Индекс Московской биржи<br className="statistic__top-title-br" />
          <span className="statistic__top-title-big">3049</span>
        </h4>
        <span className="statistic__top-card-proc">+0,99% к закрытию</span>
      </div>

      <div className="statistic__top-card-wrapper-content">
        <Link
          href={'#exclude'}
          label={"Смотреть"}
        />
        <span className="statistic__top-card-dat">Обзор обновлен 23.09</span>
      </div>
    </Card>
  </div>
}

export default StatisticsTop
