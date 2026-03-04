import "./Hobby.scss";
import card1 from "./image/card1.png";
import card2 from "./image/card2.png";
import card3 from "./image/card3.png";
import card4 from "./image/card4.png";

function Hobby() {
  return (
    <div className='hobby'>
      <div className='hobby__card'>
        <div className='hobby__card-image'>
          <img
            className='hobby__card-pic'
            src={card1}
            loading='lazy'
            width='430'
            height='240'
            alt='Hobby'
          />

          <img
            className='hobby__card-pic'
            src={card2}
            loading='lazy'
            width='430'
            height='240'
            alt='Hobby'
          />
        </div>

        <div className='hobby__card-image'>
          <img
            className='hobby__card-pic'
            src={card3}
            loading='lazy'
            width='430'
            height='240'
            alt='Hobby'
          />
          <img
            className='hobby__card-pic'
            src={card4}
            loading='lazy'
            width='430'
            height='240'
            alt='Hobby'
          />
        </div>
      </div>

      <section className='hobby__content'>
        <h5 className='hobby__title'>Хобби, которое приносит пользу людям</h5>

        <p className='hobby__text'>
          Канал о&nbsp;финансах и&nbsp;инвестициях простым языком. Здесь
          вы&nbsp;найдете последние новости финансового мира, выступления
          эмитентов, разборы компаний, образовательные материалы, а&nbsp;самое
          главное&nbsp;&mdash; идеи для сделок, которые помогут заработать более
          100% на&nbsp;фондовом рынке
        </p>

        <div className='hobby__avatar'>
          <picture className='hobby__avatar-image'>
            <img
              className='hobby__avatar-pic'
              src=''
              loading='lazy'
              alt='avatar'
              width='130'
              height='130'
            />
          </picture>

          <section className='hobby__avatar-content'>
            <h5 className='hobby__avatar-title'>Alexey Linetsky</h5>

            <div className='hobby__avatar-text'>
              <span>@AlexeyLinetsky</span>
              <span>30,8 тыс. подписчиков</span>
              <span>214 видео</span>
              <span>2 993 839 просмотров</span>
            </div>
          </section>
        </div>

        <a className='hobby__link' href='#'>
          Перейти на канал
        </a>
      </section>
    </div>
  );
}

export default Hobby;
