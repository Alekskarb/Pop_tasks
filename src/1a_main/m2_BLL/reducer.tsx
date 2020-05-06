import {combineReducers} from "redux";
import loginReducer from "../../2a_features/f1_auth/a1_login/loginReducer";
import registrationReducer from "../../2a_features/f1_auth/a2_registration/registrationReducer";
import recoveryReducer from "../../2a_features/f1_auth/a3_passRecovery/recoveryReducer";
import passwordReducer from "../../2a_features/f1_auth/a4_newPass/passReducer";
import profileReducer from "../../2a_features/f1_auth/a5_proFile/profileReducer";


const reducer = combineReducers({
    log: loginReducer,
    reg: registrationReducer,
    recovery: recoveryReducer,
    pass: passwordReducer,
    profile: profileReducer,
});

export default reducer;