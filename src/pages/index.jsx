import React from "react";

import Profile from "../atoms/Profile";
import userImage from "../assets/user1.jpg";

function index() {
    return (
        <div>
            <Profile image={userImage} name="profile" />
        </div>
    );
}

export default index;
