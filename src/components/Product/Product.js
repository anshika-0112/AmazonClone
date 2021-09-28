import "../../componentStyle/products.css";
import { useSelector, useDispatch } from "react-redux";
import {
  addItemToBasket,
  increaseItemCount,
} from "../redux/basket/basketActions";

const Product = ({ product }) => {
  const basketItems = useSelector((state) => state.basket.basketItems);
  const dispatch = useDispatch();
  const addToBasket = () => {
    dispatch(increaseItemCount());
    dispatch(addItemToBasket(product));
    console.log("cart items", basketItems);
  };
  return (
    <div className="product">
      <p className="product-info">{product.title}</p>
      <p className="product-price">Price: ${product.price}</p>
      <p className="product-rating">Rating: {product.rating.rate}</p>
      <img src={product.image} className="product-img" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
};

export default Product;
