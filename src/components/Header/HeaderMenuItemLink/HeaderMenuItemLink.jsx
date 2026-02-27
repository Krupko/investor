import './HeaderMenuItemLink.scss'

function HeaderMenuItemLink({item, onClick}) {
	const handleClick = (e) => {
		e.preventDefault()
		onClick(item.href, item.label)
	}
	return (
		<a
			className={`header__link ${item.isSpecial ? 'header__link--black' : ''}`}
			href={item.href}
			onClick={handleClick}
		>
			{item.label}
		</a>
	)
}

export default HeaderMenuItemLink