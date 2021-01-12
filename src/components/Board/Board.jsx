import Square from "./Square/Square";
import React from "react";
import "./Board.scss";


class Board extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            nextPlayer: true,
            winner: null,
            isWinner: false
        }
        this.onHandleClick = this.onHandleClick.bind(this);
    }

    onHandleClick(squareNumber) {
        this.state.squares[squareNumber] = this.state.nextPlayer ? "X" : "0";
        if (this.winner()) {
            this.state.winner = this.winner();
            this.state.isWinner = true;
        }
        this.setState({...this.state.squares, nextPlayer: !this.state.nextPlayer})
    }

    refresh() {
        this.setState({squares: Array(9).fill(null), nextPlayer: true, winner: null, isWinner: false})
    }

    winner() {
        const squares = this.state.squares;
        for (let i = 0; i <= 6; i += 3) {
            if (squares[i] === squares[i + 1] && squares[i] === squares[i + 2] && squares[i] !== null) {
                return squares[i];
            }
        }
        for (let i = 0; i < 3; i++) {
            if (squares[i] === squares[i + 3] && squares[i] === squares[i + 6] && squares[i] !== null) {
                return squares[i];
            }
        }

        if (squares[0] === squares[4] && squares[0] === squares[8] && squares[0] !== null) {
            return squares[0]
        }
        if (squares[2] === squares[4] && squares[2] === squares[6] && squares[2] !== null) {
            return squares[2]
        }

        return null;
    }

    render() {
        return (
            <div className="board">
                <div className="board__game">
                    {this.state.squares.map((value, index) => <Square isWinner={this.state.isWinner} key={index}
                                                                      value={value}
                                                                      onClick={() => this.onHandleClick(index)}/>)}
                    <button className="refreshBtn" onClick={() => this.refresh()}>Restart game</button>
                </div>
                <div className="board__text">
                    <p>Next step is: <span className="board__text_current-player">{this.state.nextPlayer ? "X" : "0"} </span></p>
                    {this.state.winner ? <div className="board__winner"> Winner is {this.state.winner} </div> : null}
                </div>
            </div>
        )
    }
}

export default Board;