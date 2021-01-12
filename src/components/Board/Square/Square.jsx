import React from "react";
import "./Square.scss"

export default function Square(props) {

    let value = null;

    if (props.value === "0") {

        value = <svg className="square__value square__circle">
            <circle stroke="black" r="30" cx="50" cy="50" fill="none" strokeWidth="8" strokeLinecap="round"/>
        </svg>;
    }
    if (props.value === "X") {
        value = <svg className="square__value square__cross">
            <line className="square__cross_first" x1="20" y1="20" x2="70" y2="70" stroke="black" strokeWidth="8"
                  strokeLinecap="round"/>
            <line className="square__cross_second" x1="70" y1="20" x2="20" y2="70" stroke="black" strokeWidth="8"
                  strokeLinecap="round"/>
        </svg>;
    }

    return (
        <button className="square" disabled={props.value || props.isWinner} onClick={props.onClick}>
            {value}
        </button>
    )
}