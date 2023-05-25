import Carousel from './Carousel';

const images = [
  {
    id: 0,
    name: 'HTML',
    imgLocation: '/images/html.png',
  },
  {
    id: 1,
    name: 'CSS',
    imgLocation: '/images/css.png',
  },
  {
    id: 2,
    name: 'JavaScript',
    imgLocation: '/images/javascript.png',
  },
  {
    id: 3,
    name: 'React',
    imgLocation: 'logo512.png',
  },
];

function App() {
  return <Carousel images={images} />;
}

export default App;
