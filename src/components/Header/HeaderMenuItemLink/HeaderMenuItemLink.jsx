import { Link } from 'react-router-dom';
import './HeaderMenuItemLink.scss';

function HeaderMenuItemLink({ item, onClick }) {
  const handleClick = () => {
    onClick(item.href, item.label);
  };
  return (
    <>
      <Link
        className={`header__link ${item.isSpecial ? 'header__link--black' : ''}`}
        to={item.href}
        onClick={handleClick}
      >
        {item.label}
      </Link>
    </>
  );
}

export default HeaderMenuItemLink;
