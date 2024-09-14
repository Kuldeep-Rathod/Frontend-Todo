import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles/app.scss";
import { createContext } from "react";

export const server = "https://nodejs-todoapp-rkat.onrender.com/api/v1";

export const Context = createContext({ isAuthenticated: false });

const AppWrapper = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <Context.Provider
            value={{
                isAuthenticated,
                setIsAuthenticated,
            }}
        >
            <App />
        </Context.Provider>
    );
};

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <AppWrapper />
    </StrictMode>
);
