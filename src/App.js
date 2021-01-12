import React from "react";
import Board from "./components/Board/Board";
import Header from "./components/Header/Header";
import "./App.scss";

function App() {

    return (
        <div className="wrapper">
            <Header />
            <div className="wrapper__content">
                <Board/>
            </div>
        </div>
    );
}

export default App;
