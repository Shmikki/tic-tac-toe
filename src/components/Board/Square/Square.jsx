import React from "react";
import "./Square.scss"

export default function Square(props) {

    let value = null;

    if (props.value === "0") {

        value = <svg className="square__value square__circle">
            <circle stroke="red" r="35" cx="48" cy="47" fill="none" strokeWidth="6" strokeLinecap="round" />
        </svg>;
    }
    if (props.value === "X") {
        value = <svg className="square__value square__cross">
            <line className="square__cross_first" x1="15" y1="15" x2="80" y2="80" stroke="blue" strokeWidth="6"
                  strokeLinecap="round"/>
            <line className="square__cross_second" x1="80" y1="15" x2="15" y2="80" stroke="blue" strokeWidth="6"
                  strokeLinecap="round"/>
        </svg>;
    }

    return (
        <button  className={`square ${props.currentSquareIsWinner ? "square__winner" : ""} `} disabled={props.value || props.isWinner} onClick={props.onClick}>
            {value}
        </button>
    )
}