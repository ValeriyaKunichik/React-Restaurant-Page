import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { data, images } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Вы останитесь довольны" />
      <h1 className="headtext__cormorant">Today&apos;s Special</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_zakus  flex__center">
        <p className="app__specialMenu-menu_heading">Холодные закуски</p>
        <div className="app__specialMenu_menu_items">
          {data.zakus.map((item, index) => (
            <MenuItem key={item.title + index} title={item.title} price={item.price} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu__img" />
      </div>

      <div className="app__specialMenu-menu_goryach  flex__center">
        <p className="app__specialMenu-menu_heading">Горячие блюда</p>
        <div className="app__specialMenu_menu_items">
          {data.goryach.map((item, index) => (
            <MenuItem key={item.title + index} title={item.title} price={item.price} tags={item.tags} />
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: 15 }}>
      <button type="button" className="custom__button">Полное меню</button>
    </div>
  </div>
);

export default SpecialMenu;
