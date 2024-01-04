export const fetchTags = () => async (dispatch) => {
    try {
      const response = await fetch('api.quotable.io/tags');
      const data = await response.json();
      dispatch({ type: 'SET_TAGS', payload: data });
    } catch (error) {
      console.error('Error fetching tags:', error);
    }
  };
  