import React from 'react';
import './App.css';
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./2b_BLL/store";

function App() {
  return (
    <div className="App">
      <HashRouter>
          <Provider store={store}>
              {/*<Yyy/>*/}
          </Provider>
      </HashRouter>

    </div>
  );
}

export default App;
