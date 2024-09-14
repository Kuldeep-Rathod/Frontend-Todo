import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context, server } from "../main";
import axios, { isAxiosError } from "axios";
import toast from "react-hot-toast";

function Header() {
    const { isAuthenticated, setIsAuthenticated, loading, setLoading } = useContext(Context);
    // console.log(isAuthenticated);

    const logoutHandler = async () => {
        setLoading(true)
        try {
            await axios.get(
                `${server}/users/logout`,

                {
                    withCredentials: true,
                }
            );
            toast.success("Logged out successfully.");
            setIsAuthenticated(false);
            setLoading(false);
        } catch (error) {
            const message =
                error.response.data.message || "An unexpected error occurred.";
            toast.error(message);
            console.error(error);
            setIsAuthenticated(true);
            setLoading(false);
        }
    };

    return (
        <nav className="header">
            <div>
                <h2>Todo App.</h2>
            </div>
            <article>
                <Link to={"/"}>Home</Link>
                <Link to={"/profile"}>Profile</Link>
                {isAuthenticated ? (
                    <button disabled={loading} onClick={logoutHandler} className="btn">
                        Logout
                    </button>
                ) : (
                    <Link to={"/login"}>Login</Link>
                )}
            </article>
        </nav>
    );
}

export default Header;
