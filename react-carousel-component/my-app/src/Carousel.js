import { useState, useEffect } from 'react';
import {
  FaChevronRight,
  FaChevronLeft,
  FaRegCircle,
  FaCircle,
} from 'react-icons/fa';
import './Carousel.css';

export default function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(nextIndex, 3000);
    return () => clearInterval(interval);
  });

  function prevIndex() {
    const index = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(index);
  }

  function nextIndex() {
    const index = (currentIndex + 1) % images.length;
    setCurrentIndex(index);
  }

  function selectIndex(index) {
    setCurrentIndex(index);
  }

  return (
    <div className="carousel-container">
      <div className="carousel-control">
        <FaChevronLeft onClick={prevIndex} />
      </div>
      <Content images={images} index={currentIndex} />
      <Indicators images={images} index={currentIndex} onSelect={selectIndex} />
      <div className="carousel-control">
        <FaChevronRight onClick={nextIndex} />
      </div>
    </div>
  );
}

function Content({ images, index }) {
  return (
    <div className="carousel-image-container">
      <img
        className="carousel-image"
        src={images[index].imgLocation}
        alt={images[index].name}
      />
    </div>
  );
}

function Indicators({ images, index, onSelect }) {
  return (
    <div className="carousel-progress">
      {images.map((image) =>
        index === image.id ? (
          <FaCircle key={image.id} onClick={() => onSelect(image.id)} />
        ) : (
          <FaRegCircle key={image.id} onClick={() => onSelect(image.id)} />
        )
      )}
    </div>
  );
}
