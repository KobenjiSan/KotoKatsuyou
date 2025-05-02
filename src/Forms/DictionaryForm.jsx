import { useState , useEffect } from 'react';
import styles from './Form.module.css'

function DictionaryForm(props){

    const formName = "Dictionary";
    const definition = "The plain, unconjugated form of a Japanese verb used in casual speech, writing, and to build other conjugations";
    const [isShowingBox, setIsShowingBox] = useState(false);

    const exampleMeaning = props.data.exampleMeaning && props.data.meaning ? (props.data.exampleMeaning).replace("[verb]", (props.data.meaning).slice(3)) : null;

    function handleShowBoxToggle(){
        setIsShowingBox(!isShowingBox);
    }
    
    return(
        <div>
            <div className={styles.formBox}>
                <p className={styles.type}>{formName}</p>
                <p className={styles.word}>{props.data.kanji}</p>
                <button 
                    onClick={handleShowBoxToggle} 
                    className={isShowingBox ? styles.buttonDown : styles.buttonUp}>
                        {'>'}
                </button>
            </div>
            <div className={isShowingBox ? styles.infoBoxShowing : styles.infoBoxHidden}>
                <b>{formName}</b>: {definition}
                <br/><br/>
                <b>What's Happening? </b> {props.data.kanji ? `No change: ${props.data.kanji} → ${props.data.kanji}` : null}
                <br /><br />
                <b>Meaning:</b> {props.data.meaning}
                <br/><br/>
                <b>Example Sentence:</b> {props.data.exampleTemplate}{props.data.kanji} [ {exampleMeaning} ]
            </div>
        </div>
    );
}
export default DictionaryForm