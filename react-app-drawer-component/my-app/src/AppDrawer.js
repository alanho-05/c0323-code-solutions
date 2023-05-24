import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import './AppDrawer.css';

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

function Backdrop({ status, onToggle }) {
  return (
    <div
      className={`menu-shade ${status ? 'is-drawn' : ''}`}
      onClick={onToggle}></div>
  );
}

function MenuBar({ text, menuPages, status, onToggle }) {
  return (
    <div className={`menu-drawer ${status ? 'is-open' : ''}`}>
      <h1 className="menu-heading">{text}</h1>
      <Menu menuPages={menuPages} onToggle={onToggle} />
    </div>
  );
}

function Menu({ menuPages, onToggle }) {
  const menuEntry = menuPages.map((menu) => (
    <p key={menu.id} onClick={onToggle} className="menu-item">
      {menu.page}
    </p>
  ));
  return menuEntry;
}
