import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">Наша миссия</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans_chef">Каждый день мы предоставляем гастрономическое удовольствие в уютной обстановке наших ресторанов, чтобы завоевать сердца гостей. .</p>
        </div>
        <p className="p__opensans_chef"> Быть лидером среди сетевых семейных ресторанов, не следуя, а предвосхищая ожидания гостей, коллег, партнеров благодаря профессиональному ведению бизнеса и высочайшему уровню качества еды, напитков и сервиса от самого сердца. </p>
      </div>

      <div className="app__chef-sign">
        <p>Егор Суслов</p>
        <p className="p__opensans_chef">Chef & Основатель</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;
