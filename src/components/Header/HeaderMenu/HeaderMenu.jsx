import './HeaderMenu.scss';

import HeaderMenuItem from '@src/components/Header/HeaderMenuItem/HeaderMenuItem.jsx';

function HeaderMenu({ items, onItemClick }) {
  return (
    <ul className="header__list list-reset">
      {items.map(item => (
        <HeaderMenuItem key={item.id} item={item} onItemClick={onItemClick} />
      ))}
    </ul>
  );
}

export default HeaderMenu;
