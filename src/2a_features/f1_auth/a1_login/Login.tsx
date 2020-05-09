import React, {ChangeEvent} from 'react';


const Login = (props:any) => {

    let addText = (e: ChangeEvent<HTMLInputElement>) => {
        props.addText(e);
    };
    return <div>
        <h3> Login </h3>
        <input type="text" onChange={addText} value={''}/>
        <input type="email"/>
    </div>
};



export default Login;

