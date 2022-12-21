import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Новости нашего ресторана" />
      <h1 className="headtext__cormorant">Подпишись на нашу рассылку</h1>
      <p className="p__opensans">Не пропусти новейшие предложения!</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder="Введите свой email " />
      <button type="button" className="custom__button">Подписаться</button>
    </div>
  </div>
);

export default Newsletter;
