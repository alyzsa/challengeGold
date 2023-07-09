import Facebook from "../../../assets/icon_facebook.svg";
import Instagram from "../../../assets/icon_instagram.svg";
import Twitter from "../../../assets/icon_twitch.svg";
import Mail from "../../../assets/icon_mail.svg";
import Twitch from "../../../assets/icon_twitch.svg";
import logo from "../../../assets/logo.svg";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-info">
        <p>
          Jalan Suroyo No. 161 Mayangan
          <br />
          Kota Probolonggo 672000
        </p>
        <p>binarcarrental@gmail.com</p>
        <p>081-233-334-808</p>
      </div>

      <div className="footer-links">
        <p>Our Service</p>
        <p>Why Us</p>
        <p>Testimonial</p>
        <p>FAQ</p>
      </div>

      <div className="footer-social">
        <p>Connect With Us</p>
        <div className="social-icons">
          <img src={Facebook} alt="Facebook" />
          <img src={Instagram} alt="Instagram" />
          <img src={Twitter} alt="Twitter" />
          <img src={Mail} alt="Mail" />
          <img src={Twitch} alt="Twitch" />
        </div>
      </div>

      <div className="footer-logo">
        <p>Copy Right Binar 2022</p>
        <img src={logo} alt="Logo" />
      </div>
    </div>
  );
}
