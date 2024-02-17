import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useVideo } from "../context/videoContext";
import Plyr from "plyr";
import "plyr/dist/plyr.css";

const Video = () => {
  const { id } = useParams();
  const { state, dispatch } = useVideo();
  const { all, playlist } = state;
  const findVideo = all.find((video) => video.id === id);
  const videoRef = useRef(null);

  useEffect(() => {
    const player = new Plyr(videoRef.current, {
      controls: [
        "play",
        "progress",
        "current-time",
        "mute",
        "volume",
        "fullscreen",
      ],
      autoplay: true,
    });

    return () => {
      if (player) {
        player.destroy();
      }
    };
  }, [id]);

  return (
    <>
      <div className="flex flex-col md:flex-row p-3 h-full">
        <div className="w-full md:w-2/3  sm:mx-0 sm:px-0">
          <div className="md:h-96">
            <video
              ref={videoRef}
              controls
              playsInline
              poster={findVideo.thumb}
              className="plyr__video-embed w-full h-full"
              autoPlay={true}
            >
              <source src={findVideo.source} type="video/mp4" />
            </video>
          </div>
          <div className="p-2 my-4 ">
            <div className="flex justify-between items-center my-2 flex-wrap">
              <h2 className="text-3xl font-bold">{findVideo.title}</h2>
              {state.playlist.some((video) => video.id === findVideo.id) ? (
                <button
                  onClick={() =>
                    dispatch({
                      type: "REMOVE_FROM_PLAYLIST",
                      payload: findVideo,
                    })
                  }
                  className="p-2 rounded-md bg-red-800 text-white text-xl"
                >
                  Remove from Playlist
                </button>
              ) : (
                <button
                  onClick={() =>
                    dispatch({ type: "ADD_TO_PLAYLIST", payload: findVideo })
                  }
                  className="p-2 rounded-md bg-green-800 text-white text-xl"
                >
                  Add to Playlist
                </button>
              )}
            </div>

            <h5 className="text-xl font-medium my-1">{findVideo.subtitle}</h5>
            <p className="text-lg my-1">Description: {findVideo.description}</p>
          </div>
        </div>

        <div className="bg-gray-100 w-full md:w-1/3 p-4">
          <h3 className="text-2xl text-center">Your Playlist</h3>

          {playlist.length === 0 ? (
            <p className="text-center text-md my-2"> No Videos in playlist</p>
          ) : (
            <>
              <div className="overflow-y-scroll max-h-screen">
                {playlist.map((video) => (
                  <div
                    key={video.id}
                    className="bg-white rounded-md shadow-md m-2 p-4 flex items-center flex-col sm:flex-row "
                  >
                    <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">
                      <img
                        src={video.thumb}
                        alt={video.title}
                        className="w-20 h-20 object-cover rounded"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">
                        {video.title}
                      </h4>
                      <p className="text-gray-600 text-md">
                        Channel Name: {video.subtitle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Video;
