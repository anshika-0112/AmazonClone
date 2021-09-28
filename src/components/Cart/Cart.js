import { useSelector } from "react-redux";
import CartItem from "../CartItem/CartItem";
import Checkout from "../Checkout/Checkout";

const Cart = () => {
  console.log("in cart");
  const basketItems = useSelector((state) => state.basket.basketItems);
  console.log("basket Items in cart", basketItems.length);
  let ItemsInCart = null;
  ItemsInCart = basketItems.map((item) => {
    return <CartItem item={item} key={item.id} />;
  });
  return (
    <div id="productsInCart">
      {basketItems.length !== 0 ? (
        <div>
          <h1>Your Shopping Basket</h1>
          {ItemsInCart}
          <Checkout id="checkout" basketItems={basketItems}></Checkout>
        </div>
      ) : (
        <div>No Item Added</div>
      )}
    </div>
  );
};

export default Cart;
