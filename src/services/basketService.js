const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "REMOVE_FROM_CART":
      const filteredCart = state.cart.filter(
        (item) => item.id !== action.payload
      );

      return { ...state, cart: filteredCart };

    case "EMPTY_CART":
      return { ...state, cart: [] };
    case "CHECKED_ITEM":
      const changedItemsToChecked = state.cart?.map((elem) => {
        return elem.id === action.payload.id
          ? { ...elem, checked: action.payload.checked }
          : elem;
      });
      return { ...state, cart: changedItemsToChecked };
    case "CHECKED_ALL_ITEMS":
      const changedAllItemsToChecked = state.cart.map((elem) => {
        return { ...elem, checked: action.payload };
      });
      return { ...state, cart: changedAllItemsToChecked };
    case "DELETE_ALL_CHECKED":
      const filteredCheckedItems = state.cart.filter((elem) => !elem.checked);
      return { ...state, cart: filteredCheckedItems };
    case "UPDATE_CART":
      const { id, quantity } = action.payload;
      const updatedCart = state.cart.map((item) =>
        item.id === id
          ? { ...item, quantity, totalPrice: quantity * item.price }
          : item
      );

      return { ...state, cart: updatedCart };
    case "ADD_QUANTITY":
      const addedQuantity = state.cart?.map((elem) => {
        return elem.id === action.payload.id
          ? {
              ...elem,
              quantity: elem.quantity + +action.payload.count,
              totalPrice:
                (elem.quantity + Number(action.payload.count)) * elem.price,
            }
          : elem;
      });
      return { ...state, cart: addedQuantity };
    default:
      return state;
  }
};

export { initialState, cartReducer };
