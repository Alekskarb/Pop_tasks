import React from 'react';
import {NavLink} from "react-router-dom";

const Profile = () => {
    return <div>
        <NavLink to={'/profile'}/>
        <h3> Profile </h3>
    </div>
};
export default Profile;