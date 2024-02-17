import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <h1 className="text-4xl font-bold mb-4">404 - Not Found</h1>
      <p className="mb-4">Looks like you're lost somewhere.</p>
      <Link
        to="/"
        className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors duration-300"
      >
        Go to Home Page
      </Link>
    </div>
  );
};

export default NotFound;
