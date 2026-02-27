import './HeaderMenuItem.scss'
import HeaderMenuItemLink from '@src/components/Header/HeaderMenuItemLink/HeaderMenuItemLink.jsx'

function HeaderMenuItem({item, onItemClick}) {

	return (
		<li
			className={`header__item item ${item.isSpecial ? 'header__item--gradient' : ''}`}
		>
			<HeaderMenuItemLink
				item={item}
				onClick={onItemClick}
			/>
		</li>
	)
}

export default HeaderMenuItem;