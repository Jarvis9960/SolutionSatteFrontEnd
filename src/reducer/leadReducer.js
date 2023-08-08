export const leadReducer = (state, action) => {
  switch (action.type) {
    case "Loading":
      return { ...state, isLoading: true };

    case "Data":
      return {
        ...state,
        isLoading: false,
        isError: false,
        leads: action.payload,
      };

    case "Error":
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};
