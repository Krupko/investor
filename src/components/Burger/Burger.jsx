import './Burger.scss';

import burger from './BurgerPig/burger.png';

function Burger(props) {
  const { onOpen } = props;

  return (
    <button className="hero__burger btn-reset" onClick={onOpen}>
      <img
        className="hero__burger-pig"
        loading="lazy"
        src={burger}
        width="54"
        height="54"
        alt="Wallet"
      />
    </button>
  );
}

export default Burger;
