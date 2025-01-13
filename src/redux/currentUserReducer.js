const initialState = null

export const currentUserReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_USER":
      return payload

    default:
      return state;
  }
}