import React from "react";
import { FaXmark } from "react-icons/fa6";
import { useContext } from "react";
import { SignInContext } from "../Context/SingInContext";

const SignIn = () => {
  const { ShowSignIn, setShowSignIn } = useContext(SignInContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      name: event.target.name.value,
      number: event.target.number.value,
    };
    console.log(data);
    localStorage.setItem("user", JSON.stringify(data));
    setShowSignIn(!ShowSignIn);
  };

  return (
    <div className="absolute top-0 left-0 h-screen w-full bg-[rgb(0,0,0,.4)] flex justify-center items-center z-20">
      <div className="bg-gray-100 rounded-xl m-4 p-6">
        <div className="flex justify-end">
          <FaXmark
            size={20}
            className="cursor-pointer"
            onClick={() => setShowSignIn(!ShowSignIn)}
          />
        </div>
        <h3 className="text-md font-[14px] text-center">
          SignIn with your name and number
        </h3>
        <div className="relative flex items-center justify-center h-[90%] text-black overflow-hidden">
          <form
            className="max-w-full p-6 pl-4 rounded-2xl text-sm m-3 z-10"
            onSubmit={handleSubmit}
          >
            <table className="w-full border-separate border-spacing-2">
              <tbody>
                <tr className="m-2">
                  <td className="pr-4">
                    <label htmlFor="name" className="font-semibold text-lg">
                      Name
                    </label>
                  </td>
                  <td>
                    <input
                      type="text"
                      name="name"
                      className="border border-gray-600 rounded-xl px-4 py-3 w-full"
                    />
                  </td>
                </tr>
                <tr className="m-2">
                  <td className="pr-4">
                    <label htmlFor="number" className="font-semibold text-lg">
                      Number
                    </label>
                  </td>
                  <td className="relative">
                    <input
                      type="number"
                      name="number"
                      id="number"
                      required
                      className="border border-gray-600 rounded-xl px-4 py-3 w-full"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="my-2 flex justify-center">
              <button
                type="submit"
                className=" text-white rounded-xl bg-red-500 w-[50%] text-lg m-2 py-2 hover:bg-red-400 cursor-pointer"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default SignIn;
