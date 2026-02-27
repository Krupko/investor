import './Header.scss';
import HeaderMenu from "@src/components/Header/HeaderMenu/HeaderMenu.jsx";
import {MENUITEMS} from "@src/components/arrayLibraries/menuItems.js";

function Header() {

	const handleMenuClick = (href, label) => {
		console.log(`Переход на:${label} (${href})`)
	}

	return (
		<header className="header container">
			<HeaderMenu
				items={MENUITEMS}
				onItemClick={handleMenuClick}
			/>
		</header>
	)
}

export default Header