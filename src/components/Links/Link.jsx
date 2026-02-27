import './link.scss'


function Link({label, href, style, className}) {
	const classes = 'link ' + className
	return (
		<a
			className={classes}
			style={style}
		>
			{label}

			<svg className="link__svg card__link-svg icon-svg">
				<use href={href}></use>
			</svg>
		</a>
	)
}

export default Link