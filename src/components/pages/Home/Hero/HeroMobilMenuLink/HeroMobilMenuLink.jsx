import './HeroMobilMenuLink.scss'

function HeroMobilMenuLink({href, label}) {
	return (
		<a
			className="hero__link-mobile"
			href={href}
		>
			{label}
		</a>
	)
}

export default HeroMobilMenuLink