const quoteReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_QUOTE':
        return action.payload;
      default:
        return state;
    }
  };
  
  export default quoteReducer;
  