

export const saveEvent = (eventId) => ({
    type: 'SAVE_EVENT',
    payload: eventId,
  });
  
  export const unsaveEvent = (eventId) => ({
    type: 'UNSAVE_EVENT',
    payload: eventId,
  });
  