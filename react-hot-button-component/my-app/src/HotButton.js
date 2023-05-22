import './HotButton.css';
import { useState } from 'react';

export default function HotButton({ color }) {
  const [index, setIndex] = useState(0);

  function handleClick() {
    setIndex(index + 1);
  }

  return <button></button>;
}
