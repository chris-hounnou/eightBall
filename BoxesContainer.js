
import React, {useState} from "react";
import Box from "./Box"
import {choice, randInt} from "./Choice";

const defaultColors = [
    "Aqua","Black", 
    "Blanched Almond", 
    "blue", "Chocolate", "DodgerBlue", "Lavender", "Peru", "Plum", "SpringGreen", "LawnGreen", " SteelBlue", "Tan", "Teal","Thistle", 
    "Tomato", "Turquoise", "Violet", "yellow", "YellowGreen",
];

function BoxesContainer({ allColors = defaultColors,numBoxes = 16}){
    function getInitialRandomColors(){
        return Array.from(
            {length: numBoxes},
            () => choice(allColors)
        )
    }

    function handleClick(evt){
        setBoxes (boxes => {
            let idx = randInt(numBoxes);
            let boxCopy = [...boxes];
            boxCopy[idx] = choice(allColors);
            return boxCopy;
        });
    }
    const boxComponents = boxes.map((color, i ) => <Box key={i} color={color} />);
    return(
        <div>
            <section className="BoxesContainer">{boxComponents}</section>
            <button onClick={handleClick}>Change a Box</button>
        </div>
    );
}


export default BoxesContainer
