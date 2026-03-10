import "./Programme.scss";
import LinkProg from "../../../Link-prog/Link-prog.jsx";
import { PROGRAMMEMENTORS } from "../../../arrayLibraries/programm-mentors.js";

function Programme() {
  return (
    <section className='programme'>
      <h4 className='programme__title'>Программа наставничества</h4>

      <div className='programme__container'>
        {PROGRAMMEMENTORS.map((item) => (
          <LinkProg key={item.id} href={item.href} children={item.children} />
        ))}
      </div>
    </section>
  );
}

export default Programme;
