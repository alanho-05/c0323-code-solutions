import { useState } from 'react';
import './Accordion.css';

/**
 * An accordion of languages.
 * @param prop1 {topic}: expected to be an array of objects.
 * @returns a wrapped React DOM for each array entry.
 */

export default function Accordion({ topic }) {
  const [isActive, setIsActive] = useState();

  const topics = topic.map((x, index) => (
    <Subject
      key={index}
      text={x.topic}
      description={x.detail}
      active={isActive === index}
      onShow={() => (isActive === index ? setIsActive() : setIsActive(index))}
    />
  ));

  return <div>{topics}</div>;
}

/**
 * A component that creates the textbox for languages and their description
 * @param {string} text: a string value for each topic
 * @param {string} description: a string value for each topic's description
 * @param {Boolean} active: a Boolean value to signal if topic's description should be showing
 * @param {function} onshow: an event handler function to signal to parent component it has been clicked on
 * @returns the created text elements
 */

function Subject({ text, description, active, onShow }) {
  return (
    <>
      <div className="textbox m-auto graybg" onClick={onShow}>
        <h2>{text}</h2>
      </div>
      {active && (
        <div className="textbox m-auto">
          <p>{description}</p>
        </div>
      )}
    </>
  );
}
