export const ADD_POSITIONS = "ADD_POSITIONS";

export const addPositions = (position) => {
  return {
    type: ADD_POSITIONS,
    payload: position,
  };
};
