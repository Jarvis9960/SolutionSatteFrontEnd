export const clientReducer = (state, action) => {
  switch (action.type) {
    case "Loading":
      return { ...state, isLoading: true };

    case "Success":
      return {
        ...state,
        isLoading: false,
        isError: false,
        clients: action.payload,
      };

    case "Failed":
      return { ...state, isLoading: false, isError: true };

    default:
      return state;
  }
};
