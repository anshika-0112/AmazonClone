const Checkout = ({ basketItems }) => {
  const totalPrice = basketItems.reduce((acc, basketItem) => {
    console.log(acc);
    console.log(basketItem.price);
    return acc + basketItem.price;
  }, 0);
  return (
    <div>
      <p>
        Subtotal({basketItems.length} items)
        <span className="boldPrice">${totalPrice}</span>
      </p>
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Checkout;
