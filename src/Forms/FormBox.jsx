import { useState , useEffect } from 'react';
import styles from './Form.module.css'

function FormBox(props){

    // Form Specific
    const formName = props.config.formName;
    const definition = props.config.definition;

    // Word Specific
    const conjugatedWord = props.config.conjugate(props.data);
    const meaning = props.data.meaning ? props.config.meaning(props.data) : null; // all verbs should be in infinitive form (ex: to eat)
    const whatsHappening = props.data.kanji ? props.config.whatsHappening(props.data) : null;
    const engSentence = props.data.engSentence ? `[ ${props.config.sentenceMeaning(props.data.engSentence, meaning)} ]` : null;

    // Strictly Component use
    const [isShowingBox, setIsShowingBox] = useState(false);
    function handleShowBoxToggle(){
        setIsShowingBox(!isShowingBox);
    }

    return(
        <div>
            <div className={styles.formBox}>
                <p className={styles.type}>{formName}</p>
                <p className={styles.word}>{conjugatedWord}</p>
            <button 
                onClick={handleShowBoxToggle} 
                className={isShowingBox ? styles.buttonDown : styles.buttonUp}>
                    {'>'}
            </button>
            </div>
            <div className={isShowingBox ? styles.infoBoxShowing : styles.infoBoxHidden}>
                <b>{formName}</b>: {definition}
                <br/><br/>
                <b>What's Happening? </b> {whatsHappening} → {conjugatedWord}
                <br /><br />
                <b>Meaning:</b> {meaning}
                <br/><br/>
                <b>Example Sentence:</b> {props.data.jpSentenceHead}{conjugatedWord} {engSentence}
            </div>
        </div>
    );
}
export default FormBox