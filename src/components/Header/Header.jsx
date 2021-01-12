import React from "react";
import "./Header.scss"
import Bell from "../Bell/Bell";

const Header = (props) =>{

    return (<header className="header">
                    <h1 className="header__title">Tic tac toe <Bell /></h1>

            </header>)

}

export default Header;