import React, {useState} from "react";

const NewBoxForm = ({addBox}) => {
    const INITIAL_STATE = {
        color: "",
        width: "",
        height:""
    }

    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addBox({...formData});
        setFormData(INITIAL_STATE);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="color">Color: </label>
            <input 
            id="color"
            type="text" 
            name="color"
            placeholder="Box Color"
            value={formData.color}
            onChange={handleChange}
            />
            <label htmlFor="width">Width: {formData.width}</label>
            <input 
            id="width"
            type="range"
            name="width"
            min="100"
            max="500"
            value ={formData.width}
            onChange={handleChange}
            />
            <label htmlFor="height">Height: {formData.height}</label>
            <input 
            id="height"
            type="range"
            name="height"
            min="100"
            max="500"
            value ={formData.height}
            onChange={handleChange}
            />

            <button type="submit">Add Box</button>

        </form>
    )
}

export default NewBoxForm;