import "./Mentor.scss";
import Link from "../../../../Links/Link.jsx";

function Mentor() {
  return (
    <div className='mentor'>
      <div className='mentor__top'>
        <section className='mentor__description'>
          <h4 className='mentor__title'>Наставничество 2024</h4>
          <p className='mentor__text'>
            Программа наставничества предназначена для тех, кто стремится
            освоить все аспекты рынка, хочет смотреть на&nbsp;его механизмы
            с&nbsp;глубоким пониманием, избежать типичных инвестиционных ошибок
            и&nbsp;многократно увеличить свой капитал
          </p>
        </section>

        <p className='mentor__text mentor__text-right'>
          Длительность программы: 1 год
          <br />6 месяцев - теории, 6 месяцев - практики
        </p>
      </div>

      <Link
        className='mentor__link'
        label='Попасть в предзапись'
        href='#telegram'
      />

      <span>Среднегодовая доходность 35% +</span>
    </div>
  );
}
export default Mentor;
