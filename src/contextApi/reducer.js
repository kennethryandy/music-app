export const initialState = {
  user: null,
  playlist: [],
  selectedPlaylist: {},
  track: null,
  token: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_TOKEN":
      return {
        ...state,
        token: action.payload,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "SET_PLAYLIST":
      return {
        ...state,
        playlist: action.payload,
      };
    case "SET_SELECTED_LIST":
      return {
        ...state,
        selectedPlaylist: action.payload,
      };
    case "SET_TRACK":
      return {
        ...state,
        track: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
