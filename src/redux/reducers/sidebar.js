const initialState = {
  isVisible: false,
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "SIDEBAR:SET_VISIBLE":
      return {
        ...state,
        isVisible: payload,
      }

    default:
      return state
  }
}
