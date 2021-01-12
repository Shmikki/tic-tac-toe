import React, {createRef} from "react";
import ball from "./ball.png"
import "./Bell.scss";
import song from "./1df6aa89c959ce1.mp3";


const Bell = () => {
    let audioRef = createRef();

    return (
        <div className="bell">
            <img src={ball} alt="bell" className="bell__img" onMouseEnter={() => audioRef.current.play()} />
            <audio ref={audioRef} src={song} muted={false} autoPlay="true" />
        </div>
    )

}

export default Bell;