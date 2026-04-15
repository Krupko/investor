import './MobilMenu.scss';
import { CloseOutlined } from '@ant-design/icons';
import { MENUITEMS } from '@src/components/arrayLibraries/menuItems.js';
import MobilMenuLink from '../MobilMenuLink/MobilMenuLink';

function HeroMobilMenu({ isOpen, onClose }) {
  return (
    <div className={`hero__menu-wrapper ${isOpen ? 'active' : ''}`}>
      <button className="hero__menu-close btn-reset" onClick={onClose}>
        <CloseOutlined className="hero__icon-castom" />
      </button>

      <menu className="list-reset hero__menu-mobile">
        {MENUITEMS.map(item => {
          return (
            <li className="hero__item-mobile" key={item.id}>
              <MobilMenuLink href={item.href} label={item.label} />
            </li>
          );
        })}
      </menu>
    </div>
  );
}

export default HeroMobilMenu;
