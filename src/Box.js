import React from "react";

const Box = ({id, color, width, height, removeBox}) => {
    const boxStyle = {
        backgroundColor: color,
        width: `${width}px`,
        height: `${height}px`,
    };

    const handleRemove = () => {
        removeBox(id);
    }
    return <div style={boxStyle}>
        <button onClick={handleRemove}>X</button>
    </div>
}

export default Box;