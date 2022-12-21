import images from './images';

const zakus = [
  {
    title: 'Русская закуска',
    price: '3400 т',
  },
  {
    title: 'Холодец',
    price: '2500 т',
  },
  {
    title: 'Классическая Моцарелла',
    price: '2900 т',
  },
  {
    title: 'Салат "Свекольный" под сыром',
    price: '1800 т',
  },
  {
    title: 'Фирменный салат с рукколой',
    price: '2500 т',
  },
];

const goryach = [
  {
    title: 'Медальоны из телятины',
    price: '4200 т',
  },
  {
    title: 'Паста Болоньезе',
    price: '3600 т',
  },
  {
    title: 'Паста в сливочном соусе с лососем',
    price: '2800 т',
  },
  {
    title: 'Хинкали',
    price: '3200 т',
  },
  {
    title: 'Праздничный плов',
    price: '3600 т',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { zakus, goryach, awards };
