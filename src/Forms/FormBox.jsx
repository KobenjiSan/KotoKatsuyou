import { useState , useEffect } from 'react';
import styles from './Form.module.css'

function FormBox(props){

    const conversionMap = props.config.conversionMap;

    const formName = props.config.formName;
    const definition = props.config.definition;
    const meaning = props.data.meaning ? props.config.getMeaning(props.data.meaning) : null;
    const [isShowingBox, setIsShowingBox] = useState(false);
    const [whatsHappening, setWhatsHappening] = useState("");

    const exampleMeaning = props.data.exampleMeaning && props.data.meaning ? props.config.exampleMeaning(props.data, props.config.getMeaning(props.data.meaning)) : null;

    function handleShowBoxToggle(){
        setIsShowingBox(!isShowingBox);
    }

    // Sets 'What's Happening?' only when props.data is changed
    useEffect(() => {
        setWhatsHappening(props.config.whatsHappening(props.data, props.config.conversionMap));
    }, [props.data]);

    function conjugateWord(){
        return props.config.conjugate(props.data, props.config.conversionMap);
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
                <b>{formName}</b>: {definition}
                <br/><br/>
                <b>What's Happening? </b> {whatsHappening} {conjugateWord()}
                <br /><br />
                <b>Meaning:</b> {meaning}
                <br/><br/>
                <b>Example Sentence:</b> {props.data.exampleTemplate}{conjugateWord()} [ {exampleMeaning} ]
            </div>
        </div>
    );
}
export default FormBox