import "./HeroPig.scss";
import Pig from "../../../../../../assets/img/hero/hero-pig/pig.webp";

function HeroPig() {
  return (
    <div className='hero__pig'>
      <img className='hero__image' loading='lazy' src={Pig} alt='Man' />
    </div>
  );
}

export default HeroPig;
