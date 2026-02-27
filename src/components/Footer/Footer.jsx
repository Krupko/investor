import './Footer.scss'

function Footer() {

	const currentYear = new Date().getFullYear()
	return (
		<footer className="footer">
			{currentYear}.All rights reserved
		</footer>
	)
}

export default Footer