import React from "react";
import { FaHeart } from "react-icons/fa";

const url = "https://www.linkedin.com/in/sadathulla-shariff";
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="flex justify-center items-center">
        <div className="flex items-center gap-2">
          <p className="text-center">Made with</p>
          <FaHeart className="text-red-500" />
          <span>by </span>
        </div>
        <p className="px-2">
          <a
            href={url}
            className="text-white hover:text-blue-500 ml-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sadathulla Shariff
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
