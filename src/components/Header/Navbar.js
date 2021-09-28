import { Link } from "react-router-dom";
import "../../componentStyle/navbar.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useSelector } from "react-redux";

const Navbar = () => {
  const itemsCount = useSelector((state) => state.basket.itemCount);
  return (
    <div id="navBar">
      <Link to="/" className="link">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon logo"
          width="70px"
        />
      </Link>

      <SearchIcon className="icons" id="searchIcon" />
      <input id="searchInput" />
      <Link to="/login" className="link">
        Login
      </Link>
      <Link to="/returns" className="link">
        Returns &#38; Orders
      </Link>
      <Link to="/prime" className="link">
        Your Prime
      </Link>
      <Link to="/cart" className="link">
        <ShoppingBasketIcon className="icons" />
      </Link>
      <p id="itemCount">{itemsCount}</p>
    </div>
  );
};

export default Navbar;
