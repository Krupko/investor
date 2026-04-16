import './Channel.scss';
import Button from '../../../Button/Button.tsx';
import phone1 from '../../../../assets/img/channel/phone1.png';
import phone2 from '../../../../assets/img/channel/phone2.png';

function Channel() {
  return (
    <div className="channel">
      <section className="channel__content">
        <h4 className="channel__title">Закрытый канал</h4>

        <ul className="channel__text list-reset">
          <li>Сообщество инвесторов: от&nbsp;новичков до&nbsp;профи</li>
          <li>
            Закрытый чат для обсуждения торговых <br />
            идей и&nbsp;общения на&nbsp;различные темы
          </li>
          <li>Обучение, портфель, сделки, ответы</li>
        </ul>

        <Button className="channel__button" label="Подать заявку" />
      </section>

      <div className="channel__image">
        <div className="channel__pic channel__pic1">
          <img
            src={phone1}
            loading="lazy"
            alt="phone"
            width="314"
            height="600"
          />
        </div>
        <div className="channel__pic channel__pic2">
          <img
            src={phone2}
            loading="lazy"
            alt="phone"
            width="314"
            height="600"
          />
        </div>
      </div>

      <div className="channel__button-wrapper460">
        <Button label="Подать заявку" />
      </div>
    </div>
  );
}
export default Channel;
