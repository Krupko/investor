import React, { useState } from 'react';
import './Mypath.scss';
import { Segment } from '../../Segment/Segment';
import Burger from '../../Burger/Burger.jsx';
import MypathMobilMenu from '../../Burger/MobilMenu/MobilMenu';
import { MYPATH } from '../../arrayLibraries/mypath';
import { Block } from './Block/Block';

function Mypath() {
  const [isMenuOpen, setIsMemoOpen] = useState(false);

  const openMenu = () => {
    setIsMemoOpen(true);
  };

  const closeMenu = () => {
    setIsMemoOpen(false);
  };

  return (
    <main className="main container">
      <Segment className="mypath" title="Мой путь к инвестициям" size={2}>
        <Burger onOpen={openMenu} />
        <MypathMobilMenu isOpen={isMenuOpen} onClose={closeMenu} />

        <Block
          jpg={MYPATH[0].jpg}
          avif={MYPATH[0].avif}
          webp={MYPATH[0].webp}
          label={MYPATH[0].label}
          alt={MYPATH[0].alt}
        />
        <Block
          className="block-svg"
          classNameSVG="text-svg"
          jpg={MYPATH[1].jpg}
          avif={MYPATH[1].avif}
          webp={MYPATH[1].webp}
          label={MYPATH[1].label}
          alt={MYPATH[1].alt}
        />
        <Block
          jpg={MYPATH[2].jpg}
          avif={MYPATH[2].avif}
          webp={MYPATH[2].webp}
          label={MYPATH[2].label}
          label2={MYPATH[2].label2}
          alt={MYPATH[2].alt}
        />
        <Block
          className="block-svg"
          classNameSVG="text-svg"
          jpg={MYPATH[3].jpg}
          avif={MYPATH[3].avif}
          webp={MYPATH[3].webp}
          label={MYPATH[3].label}
          alt={MYPATH[3].alt}
        />
      </Segment>
    </main>
  );
}

export default Mypath;
