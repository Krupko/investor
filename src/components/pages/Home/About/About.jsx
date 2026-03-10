import './About.scss'
import AboutTop from './AboutTop/AboutTop.jsx'
import AboutBottom from './AboutBottom/AboutBottom.jsx'

function About() {
	return (
		<section className="about">
			<AboutTop />
			<AboutBottom />
		</section>
	)
}

export default About