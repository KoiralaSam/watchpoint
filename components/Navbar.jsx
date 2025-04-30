import { Link, useLocation } from "react-router-dom"; // Fixed import for react-router-dom
import { FaSearch } from "react-icons/fa";
import { useContext } from "react";
import { SignInContext } from "../Context/SingInContext";
import { FaRegUser } from "react-icons/fa";
import { SearchContext } from "../Context/SearchContext";

const Navbar = () => {
  const location = useLocation();
  const { Search, setSearch } = useContext(SearchContext);
  const { setShowSignIn } = useContext(SignInContext);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch("");
  };

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center fixed">
      <div className="text-2xl font-bold tracking-tight text-gray-950">
        <Link to="/">
          Watch<span className="text-blue-600">Point</span>
        </Link>
      </div>
      <div className="flex gap-16 text-md font-medium">
        <Link
          to="/alerts"
          className="text-gray-700 underline-offset-4 hover:text-blue-600 hover:underline transition duration-200"
        >
          Alerts
        </Link>
        <Link
          to="/tips"
          className="text-gray-700 hover:text-blue-600 underline-offset-4 hover:underline transition duration-200"
        >
          Tips
        </Link>
        <Link
          to="/report"
          className="text-gray-700 hover:text-blue-600 underline-offset-4 hover:underline transition duration-200"
        >
          Report
        </Link>
        <Link
          to="/community"
          className="text-gray-700 hover:text-blue-600 underline-offset-4 hover:underline transition duration-200"
        >
          Community
        </Link>
      </div>
      <div className="flex items-center">
        {location.pathname !== "/" && (
          <>
            <FaSearch className="mr-[-250px] size={30}" />
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={Search}
                placeholder="Search Community"
                className="border border-gray-300 rounded-2xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                onChange={handleChange}
              />
            </form>
          </>
        )}

        {!localStorage.getItem("user") && (
          <button
            className="text-white text-md bg-black w-20 h-8 rounded-2xl m-4"
            onClick={() => {
              setShowSignIn(true);
            }}
          >
            SignIn
          </button>
        )}
        {localStorage.getItem("user") && (
          <div className="relative w-full flex flex-col items-center m-2 group">
            {/* User Icon and Name */}
            <div className="flex flex-col items-center">
              <FaRegUser />
              <h4>
                {JSON.parse(localStorage.getItem("user")).name.split(" ")[0]}
              </h4>
            </div>

            {/* Logout Button */}
            <div className="absolute top-full mt-1 hidden group-hover:flex flex-col items-center">
              <button
                className="bg-gray-100 text-lg p-1 rounded-md shadow-md hover:bg-gray-200"
                onClick={() => {
                  localStorage.removeItem("user");
                  window.location.reload(); // Optional: Reload the page after logout
                }}
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
