import React from "react";
import { useVideo } from "../context/videoContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { state } = useVideo();

  const { all } = state;

  return (
    <>
      <div className="py-6 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {all?.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-md shadow-md overflow-hidden"
          >
            <Link to={`/video/${item.id}`}>
              <img
                src={item.thumb}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
            </Link>
            <div className="p-3">
              <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-600 text-md">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
