const initialState = {
  items: [],
  shown: false
};

const demoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      return {
        ...state,
        items: [...state.items, action.item]
      };
    }
    case "SET_SHOWN": {
      return {
        ...state,
        shown: action.shown
      };
    }
    default:
      return state;
  }
};

export default demoReducer;
