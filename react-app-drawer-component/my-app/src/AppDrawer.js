import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import './AppDrawer.css';

/**
 * Creates the app drawer
 * @param {string} title: AppDrawer's header
 * @param {Array} menu: An array of objects for all menu items
 * @returns
 */

export default function AppDrawer({ title, menu }) {
  const [isShowing, setIsShowing] = useState(false);

  function toggleShowing() {
    setIsShowing(!isShowing);
  }

  return (
    <>
      <FaBars className="menu-icon" onClick={toggleShowing} />
      <Backdrop status={isShowing} onToggle={toggleShowing} />
      <MenuBar
        text={title}
        menuPages={menu}
        status={isShowing}
        onToggle={toggleShowing}
      />
    </>
  );
}

/**
 * A shade overlay. Appears when app drawer is open.
 * @param {Boolean} status: The state value indicating if drawer is open or not.
 * @param {Function} onToggle: Event handler prop to inform parent it was clicked on.
 * @returns
 */

function Backdrop({ status, onToggle }) {
  return (
    <div
      className={`menu-shade ${status ? 'is-drawn' : ''}`}
      onClick={onToggle}></div>
  );
}

/**
 * Side menu for the app drawer
 * @param {string} text:  The menu header
 * @param {Array} menuPages: An array of objects for all menu items
 * @param {Boolean} status: The state value indicating if drawer is open or not.
 * @param {Function} onToggle: Event handler prop to inform parent it was clicked on.
 * @returns
 */

function MenuBar({ text, menuPages, status, onToggle }) {
  return (
    <div className={`menu-drawer ${status ? 'is-open' : ''}`}>
      <h1 className="menu-heading">{text}</h1>
      <Menu menuPages={menuPages} onToggle={onToggle} />
    </div>
  );
}

/**
 * Renders each menu item from the menuPages array.
 * @param {Array} menuPages: An array of objects for all menu items
 * @param {Function} onToggle: Event handler prop to inform parent it was clicked on.
 * @returns
 */

function Menu({ menuPages, onToggle }) {
  const menuEntry = menuPages.map((menu) => (
    <p key={menu.id} onClick={onToggle} className="menu-item">
      {menu.page}
    </p>
  ));
  return menuEntry;
}
