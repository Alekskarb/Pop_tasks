import React, {ChangeEvent} from 'react';
import {AppStateType} from "../../../1a_main/m2_BLL/reducer";
import {connect} from "react-redux";
import {addTextAC} from "./loginReducer";

type MDTPType = {
    addText: (text: string) => void
}

const Login = (props:any) => {

    let addText = (e: ChangeEvent<HTMLInputElement>) => {
        let text = e.currentTarget.value;
        props.addTextAC(text);
    };
    return <div>
        <h3> Login </h3>
        <input type="text" onChange={addText} value={props.text}/>
        <input type="email"/>
    </div>
};

const mapStateToProps = (state: any): AppStateType => {
return state
};

export default connect(mapStateToProps, {addTextAC})(Login)

// export default Login;

