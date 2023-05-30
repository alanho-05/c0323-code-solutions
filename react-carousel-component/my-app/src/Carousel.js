import { useState, useEffect } from 'react';
import {
  FaChevronRight,
  FaChevronLeft,
  FaRegCircle,
  FaCircle,
} from 'react-icons/fa';
import './Carousel.css';

/**
 * Creates a carousel.
 * @param {Array} images: An array of image objects.
 * @returns
 */

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
      <Content image={images[currentIndex]} />
      <Indicators images={images} index={currentIndex} onSelect={selectIndex} />
      <div className="carousel-control">
        <FaChevronRight onClick={nextIndex} />
      </div>
    </div>
  );
}

/**
 * Displays the image of current index.
 * @param {Object} image: image object of currentIndex.
 * @returns
 */

function Content({ image }) {
  return (
    <div className="carousel-image-container">
      <img
        className="carousel-image"
        src={image.imgLocation}
        alt={image.name}
      />
    </div>
  );
}

/**
 * Creates row of progress dot and fills the dot for currently displayed content.
 * @param {Array} images: An array of image objects.
 * @param {Number} index: The current index the carousel is on.
 * @param {Function} onSelect: Event handler to send parent the image id to display.
 * @returns
 */

function Indicators({ images, index, onSelect }) {
  return (
    <div className="carousel-progress">
      {images.map((image) =>
        index === image.id ? (
          <FaCircle
            key={image.id}
            onClick={() => onSelect(image.id)}
            className="carousel-progress-icon"
          />
        ) : (
          <FaRegCircle
            key={image.id}
            onClick={() => onSelect(image.id)}
            className="carousel-progress-icon"
          />
        )
      )}
    </div>
  );
}
