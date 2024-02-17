import React, { useState } from "react";
import { useVideo } from "../context/videoContext";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

const Playlist = () => {
  const { state, dispatch } = useVideo();
  const { playlist } = state;

  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [draggedItem, setDraggedItem] = useState(null);

  const handleDragStart = (event, video) => {
    setDraggedItem(video);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event, video) => {
    event.preventDefault();
    const draggedIndex = playlist.findIndex(
      (item) => item.id === draggedItem.id
    );
    const dropIndex = playlist.findIndex((item) => item.id === video.id);

    const reorderedPlaylist = [...playlist];
    reorderedPlaylist.splice(draggedIndex, 1);
    reorderedPlaylist.splice(dropIndex, 0, draggedItem);

    dispatch({ type: "REORDER_PLAYLIST", payload: reorderedPlaylist });
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPlaylist = playlist.filter((video) =>
    video.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2 className="text-2xl text-center">My Playlist</h2>
      <div className="container mx-auto my-2">
        <div className="flex items-center justify-center mb-4">
          <input
            type="text"
            placeholder="Search videos..."
            value={searchTerm}
            onChange={handleSearch}
            className="border mx-2 md:w-1/2 w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none"
          />
        </div>
        {loading ? (
          <div className="text-center">Loading...</div>
        ) : (
          <>
            {searchTerm ? (
              <>
                {filteredPlaylist.length === 0 ? (
                  <p className="text-center text-md">
                    No matching videos found.
                  </p>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-3">
                    {filteredPlaylist.map((video, index) => (
                      <div
                        key={video.id}
                        className="bg-white rounded-md shadow-md m-2 p-2 flex items-center flex-col sm:flex-row cursor-move"
                        draggable
                        onDragStart={(event) => handleDragStart(event, video)}
                        onDragOver={handleDragOver}
                        onDrop={(event) => handleDrop(event, video)}
                      >
                        <Link
                          to={`/video/${video.id}`}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">
                            <img
                              src={video.thumb}
                              alt={video.title}
                              className="w-20 h-20 object-cover rounded"
                            />
                          </div>
                        </Link>
                        <div className="flex items-center justify-between p-1 w-full">
                          <div>
                            <h4 className="text-lg font-semibold mb-1">
                              {video.title}
                            </h4>
                            <p className="text-gray-600 text-md">
                              Channel Name: {video.subtitle}
                            </p>
                          </div>
                          <div>
                            <AiOutlineDelete
                              onClick={() =>
                                dispatch({
                                  type: "REMOVE_FROM_PLAYLIST",
                                  payload: video,
                                })
                              }
                              className="h-6 w-6 cursor-pointer"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3">
                {playlist.map((video, index) => (
                  <div
                    key={video.id}
                    className="bg-white rounded-md shadow-md m-2 p-2 flex items-center flex-col sm:flex-row cursor-move"
                    draggable
                    onDragStart={(event) => handleDragStart(event, video)}
                    onDragOver={handleDragOver}
                    onDrop={(event) => handleDrop(event, video)}
                  >
                    <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4 cursor-pointer">
                      <Link
                        to={`/video/${video.id}`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <img
                          src={video.thumb}
                          alt={video.title}
                          className="w-28 h-28 object-cover rounded"
                        />
                      </Link>
                    </div>
                    <div className="flex items-center justify-between p-1 w-full">
                      <div>
                        <h4 className="text-lg font-semibold mb-1">
                          {video.title}
                        </h4>
                        <p className="text-gray-600 text-md">
                          Channel Name: {video.subtitle}
                        </p>
                      </div>
                      <div>
                        <AiOutlineDelete
                          onClick={() =>
                            dispatch({
                              type: "REMOVE_FROM_PLAYLIST",
                              payload: video,
                            })
                          }
                          className="h-6 w-6 cursor-pointer"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Playlist;
