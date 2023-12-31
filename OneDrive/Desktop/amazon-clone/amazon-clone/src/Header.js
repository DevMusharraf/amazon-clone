import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
    const [{ basket, user }] = useStateValue();

 const login = () => {
  if (user) {
    auth.signOut ();
  }
 }


  return (
    <nav className="header">
      {/* {logo on the left img } */}
      <Link to="/">
        <img
          className="header__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>
      {/* {search box} */}
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      {/* {3 links} */}
      <div className="header__nav">
        {/* {1st link} */}
        <Link to={!user && "/login"} className="header__link">
          <div onClick={login} className="header__option">
            <span className="header__optionLineone">Hello {user?.email}</span>
            <span className="header__optionLinetwo">{user ? 'Sign Out' : 'Sign in'}</span>
          </div>
        </Link>

        {/* {2nd link} */}
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineone">Returns</span>
            <span className="header__optionLinetwo">& Orders</span>
          </div>
        </Link>

        {/* {3rd link} */}
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineone">Your</span>
            <span className="header__optionLinetwo">Prime</span>
          </div>
        </Link>

        {/* {4th link} */}
        <Link to="/checkout" className="header__link">
            <div className="header__optionBasket">

                {/* {Shopping icon of the basket} */}
                
                <ShoppingBasketIcon />
                
                {/* {Number of items in the basket} */}
                <span className="header__optionLinetwo header
                __basketCount">{basket?.length}</span>

            </div>
        </Link>
        
      </div>
      {/* {basket icon with number}  */}
    </nav>
  );
}

export default Header;
