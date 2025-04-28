import { useState } from 'react';
import styles from './Form.module.css'

function PoliteForm(props){

    const conversionMap = {"う": "い", 
                           "つ": "ち", 
                           "る": "り", 
                           "ぶ": "び", 
                           "む": "み", 
                           "ぬ": "に", 
                           "く": "き", 
                           "ぐ": "ぎ", 
                           "す": "し"};

    const formName = "Polite";
    const definition = "A conjugated form of a Japanese verb used to show respect or formality, typically ending in 〜ます (masu).";
    const [isShowingBox, setIsShowingBox] = useState(false);

    function handleShowBoxToggle(){
        setIsShowingBox(!isShowingBox);
    }

    function conjugateWord(){
        if(props.data.type === "ichidan"){
            const conjugatedWord = (props.data.kanji).slice(0, -1); 
            return conjugatedWord + "ます"
        }else if(props.data.type === "godan"){
            let lastCharacter = (props.data.kanji).slice(-1);
            const conjugatedWord = (props.data.kanji).slice(0, -1); 
            let newEnding = conversionMap[lastCharacter];
            return conjugatedWord + newEnding  + "ます"
        }
    }
    
    return(
        <div>
            <div className={styles.formBox}>
                <p className={styles.type}>{formName}</p>
                <p className={styles.word}>{conjugateWord()}</p>
                <button onClick={handleShowBoxToggle}>˅</button>
            </div>
            <div className={isShowingBox ? styles.infoBoxShowing : styles.infoBoxHidden}>
                <b>{formName}</b> - {definition}
                <br/><br/>
                <b>Meaning:</b> {props.data.meaning} (politely)
                <br/><br/>
                <b>Example Sentence:</b> 
            </div>
        </div>
    );
}
export default PoliteForm