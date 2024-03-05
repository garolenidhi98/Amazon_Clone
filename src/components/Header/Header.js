import React from 'react';
import "./Header.css";
import logo from '../../media/amazon-logo.png';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link ,useHistory  } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';
import { auth } from '../../vendors/firebase';
import indiaIcon from '../../media/india-icon.webp';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';

function Header() {
  const [{ cart, user } ] = useStateValue();
  const history = useHistory();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
      history.push('/');
    }
  }

  return (
    <div className='header'>

      {/* logo */}
      <Link to="/">
        <div className="header__border">
            <img src={logo} alt="" className="header__logo" />
          </div>
      </Link>
      
      <div className="header__border deliverBorder">
        <div className="header__deliver">
          <RoomOutlinedIcon />
          <div className="header__option">
            <span className="header__optionLineOne">Deliver to</span>
            <span className="header__optionLineTwo">India</span>
          </div>
        </div>
      </div>

      {/* input search bar */}
      <div className="header__search">
        <input type="text" placeholder="Search Amazon.in" className="header__searchInput" />
        <SearchIcon className='header__searchIcon' />
      </div>

      {/* header nav */}
      <div className="header__nav">
        <div className="header__border languageBorder">
          <div className="header__option header__language">
           <img className="header__flag" src={indiaIcon} alt="" />
          </div>
        </div>
        <Link to={!user && '/login'} className="header__signInLink">
        <div className="header__border">
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">Hello, {user ? user.email : 'Sign in'}</span>
            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Account & Lists'}</span>
          </div>
          </div>
        </Link>
        <Link to={!user ? '/login' : '/orders'} className="header__ordersLink">
        <div className="header__border">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
            </div>
          </div>
        </Link>
        <Link to="/checkout" className="header__cart">
        <div className="header__optionCart">
          <div className="header__optionCart">
            <ShoppingCartOutlinedIcon />
            <span className="header__optionLineTwo header__cartCount">
              {cart?.length}
            </span>
          </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;



