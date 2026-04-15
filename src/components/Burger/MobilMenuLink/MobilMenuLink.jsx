import './MobilMenuLink.scss';

function MobilMenuLink({ href, label }) {
  return (
    <a className="hero__link-mobile" href={href}>
      {label}
    </a>
  );
}

export default MobilMenuLink;
