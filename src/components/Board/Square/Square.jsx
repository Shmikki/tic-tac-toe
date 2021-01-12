import React from "react";
import "./Square.scss"


export default function Square(props){

    return(
        <button className="square" disabled={props.value || props.isWinner} onClick={props.onClick}>
            <p className="square__value"> { props.value ? props.value : null}</p>
        </button>
    )
}