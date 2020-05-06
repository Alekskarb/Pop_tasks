import React from 'react';
import Login from "../../../2a_features/f1_auth/a1_login/Login";
import Registration from "../../../2a_features/f1_auth/a2_registration/Registration";
import PasswordRecovery from "../../../2a_features/f1_auth/a3_passRecovery/PasswordRecovery";
import NewPassword from "../../../2a_features/f1_auth/a4_newPass/NewPassword";
import Profile from "../../../2a_features/f1_auth/a5_proFile/Profile";
import {Route} from "react-router-dom";

const MainDisplay = () => {
    return <div>
        <Route path={'/login'} render={()=> <Login/>}/>
        <Route path={'/registration'} render={()=> <Registration/>}/>
        <Route path={'/passwordrecovery'} render={()=> <PasswordRecovery/>}/>
        <Route path={'/newpassword'} render={()=> <NewPassword/>}/>
        <Route path={'/profile'} render={()=> <Profile/>}/>
    </div>

};
export default MainDisplay;
