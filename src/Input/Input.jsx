import { useState } from "react";
import styles from "./Input.module.css"


function Input(props){

    const [input, setInput] = useState("");

    function handleInputChange(event){
        setInput(event.target.value);
    }

    return(
        <div>
            <label>Verb</label><br/>
            <div className={styles.inputBar}>
                <input 
                    type="text" 
                    value={input}
                    onChange={handleInputChange}    
                />
                <button onClick={() => props.callback(input)}>Conjugate</button>
            </div>
        </div>
    );

}

export default Input;