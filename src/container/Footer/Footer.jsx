import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Контакты:</h1>
        <p className="p__opensans_black">пр.Аль-Фараби 115А</p>
        <p className="p__opensans_black">+7 777 4444444</p>
        <p className="p__opensans_black">+7 7142-444-444</p>
      </div>

      <div className="app__footer-links_logo">
        <p className="p__opensans_black">&quot;Лучший способ найти себя - это потерять себя в служении другим.&quot; Ганди.</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Время работы:</h1>
        <p className="p__opensans_black">Пон - Пт:</p>
        <p className="p__opensans_black">10:00 - 02:00</p>
        <p className="p__opensans_black">Сб - Вс: </p>
        <p className="p__opensans_black">10:00 - 03:00</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans_black">2022 Sesame. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;
