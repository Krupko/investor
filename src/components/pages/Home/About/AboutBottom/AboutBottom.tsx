import './AboutBottom.scss';
import AboutBottomCard from './AboutBottomCard/AboutBottomCard.jsx';
import { ABOUTBOTTOMCARD } from '../../../../arrayLibraries/aboutbottomcard.ts';
import type { AboutBottomCardItem } from '../../../../arrayLibraries/aboutbottomcard.ts';

function AboutBottom() {
  return (
    <div className="about__bottom">
      {ABOUTBOTTOMCARD.map((card: AboutBottomCardItem) => (
        <AboutBottomCard
          key={card.id}
          title={card.title}
          p1={card.p1}
          p2={card.p2}
          p3={card.p3}
          label={card.label}
          p31={card.p31}
          image={card.image}
          imagew={card.imagew}
        />
      ))}
    </div>
  );
}

export default AboutBottom;
