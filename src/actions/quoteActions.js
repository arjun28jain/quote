// actions/quoteActions.js
export const fetchTaggedQuote = (tag) => async (dispatch) => {
  try {
    const response = await fetch(`api.quotable.io/random?tag=${tag}`);
    const data = await response.json();
    dispatch({ type: 'SET_QUOTE', payload: data });
  } catch (error) {
    console.error('Error fetching tagged quote:', error);
  }
};

export const fetchRandomQuote = () => async (dispatch) => {
  try {
    const response = await fetch('api.quotable.io/random');
    const data = await response.json();
    dispatch({ type: 'SET_QUOTE', payload: data });
  } catch (error) {
    console.error('Error fetching random quote:', error);
  }
};
