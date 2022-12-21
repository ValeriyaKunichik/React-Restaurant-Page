import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">О Нас</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Ресторан «Sesame» - ресторан с историей более 15 лет. Семь гастрономических кухонь, летняя площадка, доставка еды, напитков + take away. Любимое место в городе - «Sesame»</p>
        <button type="button" className="custom__button">Узнать больше</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
