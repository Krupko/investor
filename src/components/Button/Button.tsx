import './Button.scss';

interface ButtonProps {
  className?: string;
  label: string;
}

function Button(props: ButtonProps) {
  const { className = '', label } = props;

  return <button className={`${className} btn btn-reset`}>{label}</button>;
}

export default Button;
