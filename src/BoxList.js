import React, {useState} from "react";
import { v4 as uuid } from 'uuid'
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

const BoxList = () => {
    const INITIAL_STATE = [
        {id: uuid(), color: 'blue', width: 100, height: 50},
        {id: uuid(), color: 'red', width: 100, height: 250}

    ];

    const [boxes, setBoxes] = useState(INITIAL_STATE);
    const addBox = (newBox) => {
        setBoxes(prevBoxes=> [...prevBoxes, {...newBox, id:uuid()}])
    };

    const removeBox = (boxId) => {
        setBoxes((prevBoxes)=> prevBoxes.filter((box)=>box.id !== boxId))
    }

    return (
        <div>
            <NewBoxForm addBox={addBox}/>
            <div>
                {boxes.map(({id, color, width, height}) => (
                     <Box 
                     id={id} 
                     key={id} 
                     color={color} 
                     width={width} 
                     height={height} 
                     removeBox={removeBox}
                     />
                ))}
            </div>
        </div>
    );
};


export default BoxList;