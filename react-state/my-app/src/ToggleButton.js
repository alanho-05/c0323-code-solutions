import { useState } from 'react';
import './ToggleButton.css';

export default function ToggleButton({ text, color }) {
  const [isClicked, setIsClicked] = useState(false);
  console.log('useState:', isClicked);

  function handleClick() {
    console.log('before setter:', isClicked);
    setIsClicked(!isClicked);
    console.log('after setter:', isClicked);
  }

  return (
    <button className={isClicked ? color : 'white'} onClick={handleClick}>
      {text}
    </button>
  );
}
