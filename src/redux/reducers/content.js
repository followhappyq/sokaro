const initialState = {
  content: [],
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "CONTENT:SET_CONTENT":
      return {
        ...state,
        content: payload,
      }

    default:
      return state
  }
}
