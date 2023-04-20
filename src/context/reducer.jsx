export const initialState = {
  post: [],
 
};

// Selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_POST":
      return {
        ...state,
        basket: [...state.post, action.item],
      };


      default:
      return state;
  }
};

export default reducer;
