import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <h1>SESAME</h1>
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#home">Главная</a></li>
        <li className="p__opensans"><a href="#about">О нас</a></li>
        <li className="p__opensans"><a href="#menu">Меню</a></li>
        <li className="p__opensans"><a href="#gallery">Галерея</a></li>
        <li className="p__opensans"><a href="#contact">Контакты</a></li>
      </ul>
      <div className="app__navbar-login">
        <a href="/" className="p__opensans">Забронировать столик</a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="#home" onClick={() => setToggleMenu(false)}>Главная</a></li>
              <li><a href="#about" onClick={() => setToggleMenu(false)}>О нас</a></li>
              <li><a href="#menu" onClick={() => setToggleMenu(false)}>Меню</a></li>
              <li><a href="#gallery" onClick={() => setToggleMenu(false)}>Галерея</a></li>
              <li><a href="#contact" onClick={() => setToggleMenu(false)}>Контакты</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
