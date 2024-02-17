import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className=" flex  flex-wrap justify-between items-center">
        <Link to="/" className="text-white ">
          <h1 className="text-3xl font-thin ">Video Yard</h1>
        </Link>

        <ul className="flex p-0 my-2 ">
          <li className="ml-4">
            <Link to="/" className="text-white hover:text-blue-500">
              Videos
            </Link>
          </li>
          <li className="ml-4">
            <Link to="/playlist" className="text-white hover:text-blue-500">
              Playlist
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
