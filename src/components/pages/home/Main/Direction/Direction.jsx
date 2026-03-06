import "./Direction.scss";

function Direction() {
  return (
    <div className='direction'>
      <div className='direction__wrapper'>
        <section className='direction__social'>
          <h6 className='direction__title'>Соц.сети</h6>

          <div className='direction__card'>
            <ul className='birection__list list-reset'>
              <li className='direction__item'>
                YouTube
                <span className='span-light'>17 565</span>
              </li>
              <li className='direction__item'>
                Telegram
                <span className='span-light'>14 565</span>
              </li>
              <li className='direction__item'>
                Пульс
                <span className='span-light'>25 676</span>
              </li>
              <li className='direction__item'>
                Вконтакте
                <span className='span-light'>505</span>
              </li>
            </ul>
          </div>
        </section>

        <section className='direction__social'>
          <h6 className='direction__title'>Стратегии</h6>

          <div className='direction__card'>
            <ul className='birection__list list-reset'>
              <li className='direction__item'>
                Автоследование
                <span className='director__indicator'>
                  +97%
                  <span className='span-light'>за год</span>
                </span>
              </li>
              <li className='direction__item'>
                Комон
                <spana className='director__indicator'>
                  +97%
                  <span className='span-light'>за год</span>
                </spana>
              </li>
              <li className='direction__item'>
                10/40k
                <spana className='director__indicator'>
                  +97%
                  <span className='span-light'>за год</span>
                </spana>
              </li>
            </ul>
          </div>
        </section>

        <section className='direction__social'>
          <h6 className='direction__title'>Обучение</h6>

          <div className='direction__card'>
            <ul className='birection__list list-reset'>
              <li className='direction__item'>YouTube</li>
              <li className='direction__item'>Telegram</li>
              <li className='direction__item'>Пульс</li>
              <li className='direction__item'>Вконтакте</li>
            </ul>
          </div>
        </section>
      </div>

      <div className='direction__contact'>
        <p className='direction__text'>
          Для связи можете использовать соц.сети или написать на&nbsp;почту
        </p>

        <h6>ИП Линецкий А.М</h6>

        <p className='direction__text'>
          Пользовательское соглашение Соглашение на&nbsp;обработку персональных
          данных Политика конфиденциальности Публичная оферта
        </p>
      </div>
    </div>
  );
}

export default Direction;
