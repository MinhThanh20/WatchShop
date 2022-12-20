const orderReducer = (
  state = {
    orders: [],
    loading: false,
    error: false,
  },
  action
) => {
  switch (action.type) {
    case "GET_ORDER_START":
      return { ...state, loading: true, error: false };
    default:
      return state;
  }
};

export default orderReducer;
