import './Hero.scss';
import HeroTitle from './HeroTitle/HeroTitle.jsx';
import HeroSubtitle from './HeroSubtitle/HeroSubtitle.jsx';
import Button from '../../../Button/Button.tsx';
import HeroPig from './HeroPig/HeroPig.jsx';
import HeroWallet from './HeroWallet/HeroWallet.jsx';
import Burger from '../../../Burger/Burger.jsx';
import HeroMobilMenu from '../../../Burger/MobilMenu/MobilMenu.jsx';
import { useState } from 'react';

function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <section className="hero">
        <HeroTitle />
        <HeroSubtitle />
        <HeroWallet />
        <Burger onOpen={openMenu} />
        <div className="hero__wrapper-btn">
          <Button className="hero__btn" label="С чего начать?" />
        </div>
        <HeroPig />
        <HeroMobilMenu isOpen={isMenuOpen} onClose={closeMenu} />
      </section>
    </>
  );
}

export default Hero;
