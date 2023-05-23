import { useState } from 'react';
import './ToggleSwitch.css';

export default function ToggleSwitch() {
  const [toggle, setToggle] = useState(false);

  let text = toggle ? 'ON' : 'OFF';
  let toggleClass = toggle ? 'is-on' : '';

  return (
    <div className={`toggle-switch ${toggleClass}`}>
      <div className="slider" onClick={() => setToggle(!toggle)}>
        <div className="switch"></div>
      </div>
      <span>{text}</span>
    </div>
  );
}
