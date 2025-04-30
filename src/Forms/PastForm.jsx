import { useState } from 'react';
import styles from './Form.module.css'

function PastForm(props){
    
    const conversionMap = {"う": "った", 
                           "つ": "った", 
                           "る": "った", 
                           "ぶ": "んだ", 
                           "む": "んだ", 
                           "ぬ": "んだ", 
                           "く": "いた", 
                           "ぐ": "いだ", 
                           "す": "した"};

    const formName = "Past";
    const definition = "A conjugation that changes a verb's meaning from doing something to having done it.";
    
    const meaning = props.data.meaning ? "did " + (props.data.meaning).slice(3) : null; // "did" is a temporary fix

    const [isShowingBox, setIsShowingBox] = useState(false);

    function handleShowBoxToggle(){
        setIsShowingBox(!isShowingBox);
    }

    function conjugateWord(){
        if(props.data.type === "ichidan"){
            const conjugatedWord = (props.data.kanji).slice(0, -1); 
            return conjugatedWord + "た"
        }else if(props.data.type === "godan"){
            if(props.data.kanji === "行く"){
                return "行った";
            }
            let lastCharacter = (props.data.kanji).slice(-1);
            const conjugatedWord = (props.data.kanji).slice(0, -1); 
            let newEnding = conversionMap[lastCharacter];
            return conjugatedWord + newEnding;
        }else if(props.data.type === "irregular"){
            let lastCharacters = (props.data.hiragana).slice(-2);
            const conjugatedWord = (props.data.kanji).slice(0, -2); 
            if(lastCharacters === "する"){
                return conjugatedWord + "した"
            }else if(lastCharacters === "くる"){
                return conjugatedWord + "きた"
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
export default PastForm