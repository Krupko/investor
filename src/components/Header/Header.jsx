import './Header.scss';
import HeaderMenu from '@src/components/Header/HeaderMenu/HeaderMenu.jsx';
import { MENUITEMS } from '../arrayLibraries/menuItems.js';

function Header() {
  const handleMenuClick = (_href, _label) => {
    // Обработка клика по меню
  };

  return (
    <header className="header container">
      <HeaderMenu items={MENUITEMS} onItemClick={handleMenuClick} />
    </header>
  );
}

export default Header;
