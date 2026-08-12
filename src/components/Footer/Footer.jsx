import "./Footer.css";
import logo from "../../assets/logo.png";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-left">
        <img src={logo} alt="logo" />

        <p>
          Lorem ipsum dolor sit amet,<br />
          adipiscing mauris consec<br />
          tetuer elit...
        </p>
      </div>


      <div className="footer-column">
        <h3>SOCIAL</h3>
        <p>Facebook</p>
        <p>Instagram</p>
        <p>Pinterest</p>
        <p>Twitter</p>
      </div>


      <div className="footer-column">
        <h3>OUR COMPANY</h3>
        <p>Delivery</p>
        <p>Legal Notice</p>
        <p>Terms and conditions</p>
        <p>Secure payment</p>
      </div>


      <div className="footer-column">
        <h3>INFORMATION</h3>
        <p>
          43 Brook St, Mayfair,<br/>
          London, UK
        </p>

        <p>(00) +123 4567 8900</p>
        <p>bridge@example.com</p>
      </div>

    </footer>
  );
}

export default Footer;