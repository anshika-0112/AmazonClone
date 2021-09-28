import {
  ADD_ITEM_TO_BASKET,
  DECREASE_ITEM_COUNT,
  INCREASE_ITEM_COUNT,
  REMOVE_ITEM_FROM_BASKET,
} from "./basketTypes";

const initialState = {
  itemCount: 0,
  basketItems: [],
};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_BASKET:
      console.log(state.basketItems);
      return {
        ...state,
        basketItems: [...state.basketItems, action.payload],
      };
    case INCREASE_ITEM_COUNT:
      return {
        ...state,
        itemCount: state.itemCount + 1,
      };
    case DECREASE_ITEM_COUNT:
      return {
        ...state,
        itemCount: state.itemCount - 1,
      };
    case REMOVE_ITEM_FROM_BASKET:
      let newBasket = [...state.basketItems];
      const index = state.basketItems.findIndex((basketItem) => {
        return basketItem.id === action.payload.id;
      });
      console.log("index", index);
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product{id: ${action.id}} as it is not in the basket`
        );
      }
      return {
        ...state,
        basketItems: newBasket,
      };
    default:
      return { ...state };
  }
};

export default basketReducer;
