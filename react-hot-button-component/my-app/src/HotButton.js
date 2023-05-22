import './HotButton.css';
import { useState } from 'react';

export default function HotButton({ text }) {
  const [index, setIndex] = useState(0);

  function handleClick() {
    setIndex(index + 1);
  }

  let btnColor;

  if (index < 6) {
    btnColor = 'pur';
  } else if (index < 9) {
    btnColor = 'lightPur';
  } else if (index < 12) {
    btnColor = 'red';
  } else if (index < 15) {
    btnColor = 'orange';
  } else if (index < 18) {
    btnColor = 'yellow';
  } else btnColor = 'white';

  return (
    <>
      <button onClick={handleClick} className={btnColor}>
        {text}
      </button>
      <span>{index} Clicks</span>
    </>
  );
}
