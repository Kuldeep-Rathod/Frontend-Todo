import React, { useContext } from "react";
import { Context } from "../main";
import Loader from "../components/Loader";
import { Navigate } from "react-router-dom";
import Profile from "../assets/profile.png";

function Profile() {
    const { isAuthenticated, loading, user } = useContext(Context);

    if (!isAuthenticated) return <Navigate to={"/login"} />;
    
    return loading ? (
        <Loader />
    ) : (
        <div className="profile-container">
            <div className="profile-card">
                {/* Avatar */}
                <div>
                    <img 
                        src={Profile}
                        alt="User Avatar" 
                        className="profile-avatar"
                    />
                </div>

                {/* User Name */}
                <h1 className="profile-name">{user?.name}</h1>

                {/* User Email */}
                <p className="profile-email">{user?.email}</p>

                {/* Profile Details Section */}
                <button className="edit-button">Edit Profile</button>
            </div>
        </div>
    );
}

export default Profile;
