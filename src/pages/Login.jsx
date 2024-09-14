import axios from "axios";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Context, server } from "../main";
import { Link, Navigate } from "react-router-dom";

function Login() {
    

    return (
        <div className="login">
            <section>
                <form onSubmit={submitHandler}>
                    <input
                        type="email"
                        placeholder="Email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        required
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Login</button>
                    <h4>Or</h4>
                    <Link to="/register">Sign Up</Link>
                </form>
            </section>
        </div>
    );
}

export default Login;
