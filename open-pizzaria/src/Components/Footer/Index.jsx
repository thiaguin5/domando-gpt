import "./Footer.css";

const Footer = (props) => {
  return (
    <footer className="Footer">
      <h1 className="Footer-title">
        {props.titleFooter}
      </h1>
    </footer>
  );
};

export default Footer;