import './AboutTop.scss'

import AboutTopCard from './AboutTopCard/AboutTopCard.jsx';
import {ABOUTTOPCARD} from "@src/components/arrayLibraries/abouttopcard.js";

function AboutTop() {
	return (
		<div className="about__top">
			{ABOUTTOPCARD.map((item, index) => (
				<AboutTopCard
					key={index}
					title={item.title}
					text={item.text}
					participants={item.participants}
				/>
			))}
		</div>
	)
}

export default AboutTop