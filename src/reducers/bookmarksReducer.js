const bookmarksReducer = (state = [], action) => {
    switch (action.type) {
      case 'ADD_BOOKMARK':
        return [...state, action.payload];
      default:
        return state;
    }
  };
  
  export default bookmarksReducer;
  