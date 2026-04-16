import { useState } from 'react';
import './Mypath.scss';
import { Segment } from '../../Segment/Segment';
import Burger from '../../Burger/Burger';
import MypathMobilMenu from '../../Burger/MobilMenu/MobilMenu';
import { MYPATH } from '../../arrayLibraries/mypath';
import { Block } from './Block/Block';
import Button from '../../Button/Button';
import { SegmentSmall } from '../../../components/SegmentSmall/SegmentSmall';

function Mypath(): React.ReactElement {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <main className="main container">
      <Segment className="mypath" title="Мой путь к инвестициям" size={2}>
        <Burger onOpen={openMenu} />
        <MypathMobilMenu isOpen={isMenuOpen} onClose={closeMenu} />

        {MYPATH.map((item, index) => (
          <Block
            key={item.id}
            className={index === 1 || index === 3 ? 'block-svg' : ''}
            classNameSVG={index === 1 || index === 3 ? 'text-svg' : ''}
            jpg={item.jpg}
            avif={item.avif}
            webp={item.webp}
            label={item.label}
            label2={item.label2}
            alt={item.alt}
          />
        ))}
        <SegmentSmall className="mypath__section">
          <h4 className="mypath__title">
            Добро пожаловать в мир фондового рынка вместе со мной!
          </h4>
          <Button className="mypath__button" label="Начать путь" />
        </SegmentSmall>
      </Segment>
    </main>
  );
}

export default Mypath;
