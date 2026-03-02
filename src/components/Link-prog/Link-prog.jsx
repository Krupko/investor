import "./Link-prog.scss";

function LinkProg({ className = "", href, children }) {
  return (
    <a className={`link-prog ${className}`} href={href}>
      {children}
    </a>
  );
}
export default LinkProg;
