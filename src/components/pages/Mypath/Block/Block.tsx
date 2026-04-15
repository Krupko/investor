import './Block.scss';
import { BlockProps } from '@/components/arrayLibraries/mypath';

export const Block = ({
  className = '',
  classNameSVG,
  webp,
  avif,
  jpg,
  alt = 'Изображение',
  width = 375,
  height = 500,
  label,
  label2,
}: BlockProps) => {
  if (!jpg) {
    console.warn('Нет Изображения');
    return null;
  }

  return (
    <div className={`mypath__block ${className}`}>
      <picture className="mypath__image">
        {webp && <source srcSet={webp} type="image/webp" />}
        {avif && <source srcSet={avif} type="image/avif" />}
        <img src={jpg} loading="lazy" alt={alt} width={width} height={height} />
      </picture>

      <div>
        {label && <p className={`mypath__text ${classNameSVG}`}>{label}</p>}
        {label2 && <p className="mypath__text">{label2}</p>}
      </div>
    </div>
  );
};
