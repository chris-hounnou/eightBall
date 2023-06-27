import React, {useState} from 'react';
import "./eightball.css";
import defaultAnswers from "./answers.json";
import {choice} from "./Choice";


function Eightball({answers = defaultAnswers}){
    const [answer, setAnswer] = useState ({
        msg: "Think of a Question.",
        color: "black",
    });

function handleClick(evt){
    setAnswer(choice(answers));
}
return (
    <div className= "Eightball"
    onClick={handleClick}
    style={{backgroundColor: answer.color}}>
        <b>{answer.msg}</b>
    </div>
);
}

export default Eightball;