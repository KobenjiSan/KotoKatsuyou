import { useState , useEffect } from 'react';
import styles from './Form.module.css'

function FormBox(props){

    // Form Specific
    const formName = props.config.formName;
    const definition = props.config.definition;
    const meaningBase = props.config.meaningBase;   // base of a new meaning (ex: to... -> to not.../should...)

    // Word Specific
    const conjugatedWord = props.config.conjugate(props.data);
    const meaning = props.data.meaning ? meaningBase + (props.data.meaning).slice(3) : null; // all should be in infinitive form (ex: to eat)
    const whatsHappening = props.config.whatsHappening(props.data);
    const exampleMeaning = props.data.exampleMeaning ? (props.data.exampleMeaning).replace("[verb]", "do " + (meaning).slice(3)) : null; // TODO: needs edit

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
                <b>What's Happening? </b> {whatsHappening} {conjugatedWord}
                <br /><br />
                <b>Meaning:</b> {meaning}
                <br/><br/>
                <b>Example Sentence:</b> {props.data.exampleTemplate}{conjugatedWord} [ {exampleMeaning} ]
            </div>
        </div>
    );
}
export default FormBox