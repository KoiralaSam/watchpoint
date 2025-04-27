import { createContext, useState } from "react";
export const SignInContext = createContext({
  ShowSignIn: false,
  setShowSignIn: () => {},
});

export const SignInProvider = ({ children }) => {
  const [ShowSignIn, setShowSignIn] = useState(false);
  //localStorage.removeItem("user");
  return (
    <SignInContext.Provider value={{ ShowSignIn, setShowSignIn }}>
      {children}
    </SignInContext.Provider>
  );
};
