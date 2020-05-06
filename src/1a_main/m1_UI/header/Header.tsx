import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    return <div>
        <NavLink to={'/login'}> Login </NavLink>
        <NavLink to={'/registration'}> Registration </NavLink>
        <NavLink to={'/passwordrecovery'}> Password_Recovery </NavLink>
        <NavLink to={'/newpassword'}> New_Password </NavLink>
        <NavLink to={'/profile'}> Profile </NavLink>

    </div>
};
export default Header;

