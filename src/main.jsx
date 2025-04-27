import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { AlertProvider } from "../Context/AlertContext.jsx";
import App from "./App.jsx";
import { TipsProvider } from "../Context/TipsContext.jsx";
import { SignInProvider } from "../Context/SingInContext.jsx";
import { SearchProvider } from "../Context/SearchContext.jsx";
import { StrictMode } from "react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AlertProvider>
        <TipsProvider>
          <SignInProvider>
            <SearchProvider>
              <App />
            </SearchProvider>
          </SignInProvider>
        </TipsProvider>
      </AlertProvider>
    </BrowserRouter>
  </StrictMode>
);
