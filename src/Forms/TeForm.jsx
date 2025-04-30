import { useState } from 'react';
import styles from './Form.module.css'

function TeForm(props){

    const conversionMap = {"う": "って", 
                           "つ": "って", 
                           "る": "って", 
                           "ぶ": "んで", 
                           "む": "んで", 
                           "ぬ": "んで", 
                           "く": "いて", 
                           "ぐ": "いで", 
                           "す": "して"};

    const formName = "Te-Form";
    const definition = 'A conjugated form used to connect verbs, make requests, or describe ongoing actions. It ends in "て" or "で" depending on the verb.';
    
    const meaning = props.data.meaning;

    const [isShowingBox, setIsShowingBox] = useState(false);

    function handleShowBoxToggle(){
        setIsShowingBox(!isShowingBox);
    }

    function conjugateWord(){
        if(props.data.type === "ichidan"){
            const conjugatedWord = (props.data.kanji).slice(0, -1); 
            return conjugatedWord + "て"
        }else if(props.data.type === "godan"){
            if(props.data.kanji === "行く"){
                return "行って";
            }
            let lastCharacter = (props.data.kanji).slice(-1);
            const conjugatedWord = (props.data.kanji).slice(0, -1); 
            let newEnding = conversionMap[lastCharacter];
            return conjugatedWord + newEnding;
        }else if(props.data.type === "irregular"){
            let lastCharacters = (props.data.hiragana).slice(-2);
            const conjugatedWord = (props.data.kanji).slice(0, -2); 
            if(lastCharacters === "する"){
                return conjugatedWord + "して"
            }else if(lastCharacters === "くる"){
                return conjugatedWord + "きて"
            }
        }
    }
    
    return(
        <div>
            <div className={styles.formBox}>
                <p className={styles.type}>{formName}</p>
                <p className={styles.word}>{conjugateWord()}</p>
                <button 
                    onClick={handleShowBoxToggle} 
                    className={isShowingBox ? styles.buttonDown : styles.buttonUp}>
                        {'>'}
                </button>
            </div>
            <div className={isShowingBox ? styles.infoBoxShowing : styles.infoBoxHidden}>
                <b>{formName}</b> - {definition}
                <br/><br/>
                <b>Meaning:</b> {meaning}
                <br/><br/>
                <b>Example Sentence:</b> 
            </div>
        </div>
    );
}
export default TeForm