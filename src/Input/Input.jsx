import { useState } from "react";


function Input(props){

    const [input, setInput] = useState("");

    function handleInputChange(event){
        setInput(event.target.value);
    }

    return(
        <div>
            <label>Verb</label><br/>
            <input 
                type="text" 
                value={input}
                onChange={handleInputChange}    
            />
            <button onClick={() => props.callback(input)}>Conjugate</button>
        </div>
    );

}

export default Input;