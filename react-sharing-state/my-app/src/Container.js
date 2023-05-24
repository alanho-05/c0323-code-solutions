import React from 'react';
import { useState } from 'react';

export default function Container({ items }) {
  const [current, setCurrent] = useState(0);

  function prevEntry() {
    const prevIndex = (current - 1 + items.length) % items.length;
    setCurrent(prevIndex);
  }

  function nextEntry() {
    const nextIndex = (current + 1) % items.length;
    setCurrent(nextIndex);
  }

  function selectEntry(index) {
    setCurrent(index);
  }

  return (
    <div>
      <div>{items[current]}</div>
      <div>
        <CustomButton text="Prev" onCustomClick={prevEntry} />
        <Indicators
          count={items.length}
          index={current}
          onSelect={selectEntry}
        />
        <CustomButton text="Next" onCustomClick={nextEntry} />
      </div>
    </div>
  );
}

/**
 * Or: function CustomButton({ text, bkgColor = 'white', onCustomClick })
 */
function CustomButton({ text, bkgColor, onCustomClick }) {
  return (
    <button
      onClick={onCustomClick}
      style={{ backgroundColor: bkgColor ?? 'white' }}>
      {text}
    </button>
  );
}

function Indicators({ count, index, onSelect }) {
  const buttons = [];
  for (let i = 0; i < count; i++) {
    buttons.push(
      <CustomButton
        key={i}
        text={i}
        onCustomClick={() => onSelect(i)}
        bkgColor={i === index ? 'lightblue' : undefined}
      />
    );
  }
  return <div>{buttons}</div>;
}
