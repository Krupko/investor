import './AboutBottomCard.scss';
import Card from '@src/components/Card/Card.jsx';
import Link from '../../../../../Link/Link.jsx';
function AboutBottomCard(props) {
  const { title, p1, p2, p3, label, p31, image, imagew } = props;

  const style = {
    minHeight: '60px',
    position: 'static',
    transform: 'translate(0)',
  };

  return (
    <Card className="about__card-bottom">
      <div className="about__card-bottom-wrapp">
        <div className="about__card-bottom-wrapper-text">
          <h4 className="about__card-bottom-title">{title}</h4>

          <p>{p1}</p>
          <p>{p2}</p>
          <p>
            {p3}
            <span>{label}</span>
            {p31}
          </p>
        </div>

        <picture className="about__card-bottom-picture">
          <source srcSet={imagew} type="image/webp" />
          <img
            className="about__card-bottom-img"
            loading="lazy"
            src={image}
            width="257"
            height="237"
            alt="card"
          />
        </picture>

        <Link
          className="about__card-bottom-link"
          label={'Перейти'}
          href={'#pulse'}
          style={style}
        />
      </div>
    </Card>
  );
}

export default AboutBottomCard;
