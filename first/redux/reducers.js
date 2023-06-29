// reducers.js

const initialState = {
    savedEvents: [],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SAVE_EVENT':
        return {
          ...state,
          savedEvents: [...state.savedEvents, action.payload],
        };
      case 'UNSAVE_EVENT':
        return {
          ...state,
          savedEvents: state.savedEvents.filter((eventId) => eventId !== action.payload),
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  