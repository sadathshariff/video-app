import { createContext, useContext, useReducer } from "react";
import { videoReducer } from "../reducers/videoReducer";
import { videos } from "../data/data";

const VideoContext = createContext(null);

const VideoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(videoReducer, {
    currentVideo: {},
    all: videos,
    playlist: [],
  });

  return (
    <VideoContext.Provider value={{ state, dispatch }}>
      {children}
    </VideoContext.Provider>
  );
};

const useVideo = () => {
  const context = useContext(VideoContext);
  if (!context) {
    throw new Error("useVideo must be used within a VideoProvider");
  }
  return context;
};

export { useVideo, VideoProvider };
