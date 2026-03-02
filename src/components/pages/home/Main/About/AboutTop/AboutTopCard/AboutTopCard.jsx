import "./AboutTopCard.scss";
import Card from "../../../../../../Card/Card.jsx";
import Link from "../../../../../../Link/Link.jsx";

function AboutTopCard({ title, text, participants }) {
  return (
    <Card className='about__card-top'>
      <span className='about__card-title'>{title}</span>
      <p className='about__card-text'>{text}</p>
      {participants && (
        <span className='about__card-participants'>{participants}</span>
      )}

      <Link className='card__link' label={"Перейти"} href={"#telegram"} />
    </Card>
  );
}

export default AboutTopCard;

