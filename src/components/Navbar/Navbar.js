import React from 'react';
import './Navbar.css';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { useStateValue } from '../../StateProvider';

function Navbar() {
  const [, dispatch] = useStateValue();

  const handleShowMenu = () => {
    dispatch({
      type: 'SHOW_MENU',
      id: true,
    });
  };
  return (
    <div className="navbar">
      <div className="navbar__left">
        <div className="navbar__menu nav__border" onClick={handleShowMenu}>
          <MenuOutlinedIcon />
          <p>All</p>
        </div>
        <ul className="navbar__links">
        <li className="nav__link nav__border">Amazon miniTV</li>
          <li className="nav__link nav__border">Today's Deals</li>
          <li className="nav__link nav__border">Customer Service</li>
          <li className="nav__link nav__border desktop">Gift Cards</li>
          <li className="nav__link nav__border desktop">Sell</li>
          <li className="nav__link nav__border desktop">Registry</li>
          <li className="nav__link nav__border desktop">Prime</li>
        </ul>
      </div>
      <div className="navbar__right nav__border">
        <p>Amazon's response to COVID-19 |Shop now</p>
      </div>
    </div>
  );
}

export default Navbar;
