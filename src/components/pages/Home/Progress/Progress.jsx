import './Progress.scss';
import Men from './img/men1.webp';
import Button from '@src/components/Button/Button.tsx';

function Progress() {
  return (
    <div className="progress__wrapper-flex">
      <div className="progress">
        <div className="progress__wrapper-left">
          <ul className="progress__list list-reset">
            <li className="progress__item">
              На фондовом рынке <br />с 2009 года
            </li>
            <li className="progress__item">
              100.000+ человек <br />
              подписаны на соц.сети
            </li>
            <li className="progress__item">
              6000+ следуют <br />
              стратегиям в Пульсе
            </li>
            <li className="progress__item">
              99% клиентов получают <br />
              финансовый результат
            </li>
          </ul>

          <div className="progress__image">
            <img
              className="progress__pic"
              src={Men}
              alt="men"
              loading="lazy"
              width="434"
              height="652"
            />
          </div>
        </div>

        <section className="progress__wrapper-right">
          <h4 className="progress__title">Алексей Линецкий</h4>
          <p className="progress__text">
            Инвестор, автор стратегий автоследования, эксперт в&nbsp;области
            инвестиций и&nbsp;личных финансов.
          </p>
          <p className="progress__education">
            Магистр Права и&nbsp;экономики, MBA, ФСФР 1.0
          </p>

          <Button className="progress__button" label="Мой путь к инвестициям" />
        </section>
      </div>

      <Button
        className="progress__button progress__button-480"
        label="Мой путь к инвестициям"
      />
    </div>
  );
}

export default Progress;
