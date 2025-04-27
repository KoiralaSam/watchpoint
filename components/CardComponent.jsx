import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
const Card = ({ card }) => {
  const { title, message, image, link } = card;
  const location = useLocation();

  return (
    <div className="w-full max-w-sm h-full bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col mt-3">
      {image ? (
        <img
          src={image}
          alt={`${title} cover`}
          className="w-full h-40 object-cover"
        />
      ) : (
        <></>
      )}
      <div className="m-2 flex flex-col justify-between h-full">
        <div className="flex flex-col h-full">
          <h3 className="w-full text-lg font-semibold text-gray-800">
            {title}
          </h3>

          <p
            className={`text-sm text-gray-600 max-w-[400px] ${
              location.pathname === "/" ? "truncate" : ""
            }`}
          >
            {message || "No message available."}
          </p>
        </div>

        {location.pathname === "/" && image && (
          <Link to={link}>
            <button className="bg-blue-300 hover:bg-blue-400 translate-transform hover:scale-105 text-lg rounded-xl w-fit text-center px-2 py-2 my-4 mx-1">
              Read More
            </button>
          </Link>
        )}
        {!image && location.pathname === "/" && (
          <Link
            to={link}
            className="hover:underline underline-offset-2 text-purple-800"
          >
            Read more...
          </Link>
        )}
      </div>
    </div>
  );
};

export default Card;
