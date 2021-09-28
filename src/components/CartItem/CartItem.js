import "../../componentStyle/cartItem.css";
import { useDispatch } from "react-redux";
import {
  decreaseItemCount,
  removeItemFromBasket,
} from "../redux/basket/basketActions";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const handleRemoveItem = () => {
    dispatch(decreaseItemCount());
    dispatch(removeItemFromBasket(item));
  };
  return (
    <div className="cartItem">
      <div id="itemImageContainer">
        <img src={item.image} className="itemImage" alt="Error"></img>
      </div>
      <div id="itemInfoContainer">
        <h3>{item.title}</h3>
        <p>${item.price}</p>
        <p>Rating: {item.rating.rate}</p>
        <button id="removeItem" onClick={handleRemoveItem}>
          Remove From Basket
        </button>{" "}
      </div>
    </div>
  );
};

export default CartItem;
