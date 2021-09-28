import {
  ADD_ITEM_TO_BASKET,
  INCREASE_ITEM_COUNT,
  DECREASE_ITEM_COUNT,
  REMOVE_ITEM_FROM_BASKET,
} from "./basketTypes";

export const addItemToBasket = (product) => {
  console.log("in basket action", product);
  return {
    type: ADD_ITEM_TO_BASKET,
    payload: product,
  };
};

export const increaseItemCount = () => {
  return {
    type: INCREASE_ITEM_COUNT,
  };
};

export const decreaseItemCount = () => {
  return {
    type: DECREASE_ITEM_COUNT,
  };
};

export const removeItemFromBasket = (item) => {
  return {
    type: REMOVE_ITEM_FROM_BASKET,
    payload: item,
  };
};
