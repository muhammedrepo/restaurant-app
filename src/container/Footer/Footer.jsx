import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="app__footer section__padding">
      <FooterOverlay />
      <Newsletter />

      <div className="app__footer-links">
        <div className="app__footer-links_contact">
          <h1 className="app__footer-headtext">Contact Us</h1>
          <p className="p__opensans">
            23 1st floor, Pentagon Plaza, Ikeja, Lagos
          </p>
          <p className="p__opensans">+234 805-555-2323</p>
          <p className="p__opensans">+234 805-555-2323</p>
        </div>
        <div className="app__footer-links_logo">
          <img src={images.gericht} alt="footer-logo" />
          <p className="p__opensans">
            The best to find yourself is to loose yourself in service of others
          </p>
          <img
            src={images.spoon}
            className="spoon__img"
            style={{ marginTop: 15 }}
            alt="spoon"
          />
          <div className="app__footer-links_icons">
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </div>
        </div>
        <div className="app__footer-links_work">
          <h1 className="app__footer-headtext">Working Hour</h1>
          <p className="p__opensans">Monday - Friday:</p>
          <p className="p__opensans">08:00 am - 12:00 am</p>
          <p className="p__opensans">Saturdey - Sunday:</p>
          <p className="p__opensans">08:00 am - 12:00 am</p>
        </div>
      </div>
      <div className="footer__copyright">
        <p className="p__opensans">2022 Gericht. All right reserved</p>
      </div>
    </div>
  );
};

export default Footer;
