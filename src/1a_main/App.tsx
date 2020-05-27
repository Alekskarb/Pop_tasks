import React from 'react';
import './App.css';
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from './m2_BLL/reducer';
import MainDisplay from "./m1_UI/header/MainDisplay";
import Header from "./m1_UI/header/Header";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <HashRouter>
                    <Provider store={store}>
                        <Header/>
                        <MainDisplay/>
                    </Provider>
                </HashRouter>

            </div>
        );
    }
}

export default App;
