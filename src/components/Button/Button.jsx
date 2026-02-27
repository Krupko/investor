import './Button.scss'

function Button(props) {

  const {
    className = '',
    children
  } = props

  return (
    <button className={`${className} btn btn-reset`}>{children}</button>
  )
}

export default Button

