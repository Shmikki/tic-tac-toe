import Square from "./Square/Square";
import React, {createRef} from "react";
import "./Board.scss";
import circle from "./sounds/zero.mp3";
import cross from "./sounds/cross.mp3";

class Board extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            nextPlayer: true,
            win: {
                winner: null,
                isWinner: false,
                combination: []
            },
            stepCount: 0
        }
        this.onHandleClick = this.onHandleClick.bind(this);
        this.circleAudioRef = createRef();
        this.crossAudioRef = createRef();
    }

    onHandleClick(squareNumber) {
        this.state.squares[squareNumber] = this.state.nextPlayer ? "X" : "0";
        this.state.nextPlayer ? this.crossAudioRef.current.play() : this.circleAudioRef.current.play();
        if (this.winner()) {
            this.state.win = this.winner();
        }
        this.setState({...this.state, nextPlayer: !this.state.nextPlayer, stepCount: this.state.stepCount + 1})
    }

    refresh() {
        this.setState({
            squares: Array(9).fill(null),
            nextPlayer: true,
            win: {
                winner: null,
                isWinner: false,
                combination: []
            }, stepCount: 0
        })
    }

    winner() {
        const squares = this.state.squares;
        for (let i = 0; i <= 6; i += 3) {
            if (squares[i] === squares[i + 1] && squares[i] === squares[i + 2] && squares[i] !== null) {
                return {winner: squares[i], combination: [i, i + 1, i + 2], isWinner: true};
            }
        }
        for (let i = 0; i < 3; i++) {
            if (squares[i] === squares[i + 3] && squares[i] === squares[i + 6] && squares[i] !== null) {
                return {winner: squares[i], combination: [i, i + 3, i + 6], isWinner: true};
            }
        }

        if (squares[0] === squares[4] && squares[0] === squares[8] && squares[0] !== null) {
            return {winner: squares[0], combination: [0, 4, 8], isWinner: true}
        }
        if (squares[2] === squares[4] && squares[2] === squares[6] && squares[2] !== null) {
            return {winner: squares[2], combination: [2, 4, 6], isWinner: true}
        }

        return null;
    }

    render() {
        console.log(this.state.stepCount)
        return (
            <div className="board">
                <div className="board__game">
                    {this.state.squares.map((value, index) => {return this.state.win.combination.includes(index) ?
                    <Square isWinner={this.state.win.isWinner} key={index}
                                value={value}
                                currentSquareIsWinner={true}
                                onClick={() => this.onHandleClick(index)} />
                    :
                    <Square isWinner={this.state.win.isWinner} key={index}
                            value={value}
                            onClick={() => this.onHandleClick(index)}/>})}
                    <button className="refreshBtn" onClick={() => this.refresh()}>Restart game</button>
                </div>
                <div className="board__text">
                    {this.state.stepCount === 9 && !this.win.isWinner ? "No winner. Restart the game" :
                        <p>Next step is: <span
                            className="board__text_current-player">{this.state.nextPlayer ? "X" : "0"} </span></p>}
                    {this.state.win.isWinner ?
                        <div className="board__winner"> Winner is {this.state.win.winner} </div> : null}
                </div>
                <div className="board__audio">
                    <audio ref={this.crossAudioRef} src={cross}/>
                    <audio ref={this.circleAudioRef} src={circle}/>
                </div>
            </div>
        )
    }
}

export default Board;