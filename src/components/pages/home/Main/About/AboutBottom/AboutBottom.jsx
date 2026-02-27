import './AboutBottom.scss'
import AboutBottomCard from './AboutBottomCard/AboutBottomCard.jsx'
import {ABOUTBOTTOMCARD} from "@src/components/arrayLibraries/aboutbottomcard.js";

function AboutBottom(props) {
	return (
		<div className="about__bottom">
			{ABOUTBOTTOMCARD.map((item) =>
				<AboutBottomCard
					key={item.id}
					title={item.title}
					p1={item.p1}
					p2={item.p2}
					p3={item.p3}
					label={item.label}
					p31={item.p31}
					image={item.image}
					imagew={item.imagew}
				/>
			)}
		</div>
	)
}

export default AboutBottom