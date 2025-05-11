import { Link, useLocation } from "react-router-dom"; // Fixed import for react-router-dom
import { FaSearch } from "react-icons/fa";
import { useContext, useState } from "react";
import { SignInContext } from "../Context/SingInContext";
import { FaRegUser } from "react-icons/fa";
import { SearchContext } from "../Context/SearchContext";

const Navbar = () => {
  const location = useLocation();
  const { Search, setSearch } = useContext(SearchContext);
  const { setShowSignIn } = useContext(SignInContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch("");
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    console.log("logout");
  };

  return (
    <nav className="w-full bg-white shadow-md px-6 py-4 flex justify-between items-center fixed">
      <div className="text-2xl font-bold tracking-tight text-gray-950">
        <Link to="/">
          Watch<span className="text-blue-600">Point</span>
        </Link>
      </div>
      <div className="hidden md:flex gap-16 text-md font-medium">
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
          About
        </Link>
      </div>
      <div className="flex items-center">
        {location.pathname !== "/" && location.pathname !== "/community" && (
          <div className="hidden md:flex">
            <FaSearch className="mr-[-250px] mt-[15px] size={30}" />
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={Search}
                placeholder="Search Community"
                className="border border-gray-300 rounded-2xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                onChange={handleChange}
              />
            </form>
          </div>
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
          <div
            className="relative w-full flex flex-col items-center m-2 group"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            {/* User Icon and Name */}
            <div className="flex flex-col items-center">
              <FaRegUser />
              <h4>
                {JSON.parse(localStorage.getItem("user")).name.split(" ")[0]}
              </h4>
            </div>
          </div>
        )}
        {dropdownOpen && (
          <div className="absolute top-20 right-0 mt-2 bg-[rgba(30,24,24,0.8)] shadow-lg rounded-lg w-40 text-center mr-5 text-white">
            <Link
              to="/"
              className="block px-4 py-2  hover:bg-blue-500 md:hidden"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Home
            </Link>
            <Link
              to="/alerts"
              className="block px-4 py-2  hover:bg-blue-500 md:hidden"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Alerts
            </Link>
            <Link
              to="/tips"
              className="block px-4 py-2  hover:bg-blue-500 md:hidden"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Tips
            </Link>
            <Link
              to="/report"
              className="block px-4 py-2  hover:bg-blue-500 md:hidden"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Report
            </Link>
            <Link
              to="/community"
              className="block px-4 py-2  hover:bg-blue-500 md:hidden"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Community
            </Link>
            <button
              onClick={() => {
                handleLogout();
                setDropdownOpen(!dropdownOpen);
              }}
              className="block w-full px-4 py-2 text-center hover:bg-blue-500"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
