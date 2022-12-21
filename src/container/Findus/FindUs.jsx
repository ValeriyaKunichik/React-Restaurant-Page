import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Контакты</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans_black">пр.Аль-Фараби 115А</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Часы работы:</p>
        <p className="p__opensans_black">Пон - Пт: 10:00 - 02:00 </p>
        <p className="p__opensans_black">Сб - Вс: 10:00 - 03:00 </p>
      </div>
      <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Забронировать столик</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;
