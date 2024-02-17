export const videoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_PLAYLIST":
      return { ...state, playlist: [action.payload, ...state.playlist] };
    case "REMOVE_FROM_PLAYLIST":
      return {
        ...state,
        playlist: state.playlist.filter(
          (video) => video.id !== action.payload.id
        ),
      };
    case "REORDER_PLAYLIST":
      return { ...state, playlist: action.payload };
    default:
      return state;
  }
};
