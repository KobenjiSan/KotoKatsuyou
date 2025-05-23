import { useState , useEffect } from 'react';
import styles from './Conjugation.module.css'

/**
 * Responsible for rendering a single conjugation form output.
 *
 * It receives a conjugation config and verb data via props, then:
 * - Applies the config’s conjugation logic to the verb
 * - Builds the English meaning and grammar explanation dynamically
 * - Renders the conjugated form with optional breakdown and example sentence
 * - Toggles visibility of detailed breakdown via a local state
 *
 * This component is reused for each form (e.g., polite, te-form, negative) based on the selected config.
 */
function ConjugationBox(props){

    // Conjugation Form Specific
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
                <b>Meaning:</b> <span title='English translations are adjusted automatically using templates. They may not always sound natural.'>{meaning}</span>
                <br/><br/>
                <b>Example Sentence:</b> 
                    <span title='Example sentences are auto-generated from templates and may sound slightly unnatural.'>
                        {props.data.jpSentenceHead}{conjugatedWord} {engSentence}
                    </span>
            </div>
        </div>
    );
}
export default ConjugationBox