import { useState } from 'react';
import styles from './Form.module.css'

function DictionaryForm(props){

    const formName = "Dictionary";
    const definition = "The plain, unconjugated form of a Japanese verb used in casual speech, writing, and to build other conjugations";
    const [isShowingBox, setIsShowingBox] = useState(false);

    function handleShowBoxToggle(){
        setIsShowingBox(!isShowingBox);
    }
    
    return(
        <div>
            <div className={styles.formBox}>
                <p className={styles.type}>{formName}</p>
                <p className={styles.word}>{props.data.kanji}</p>
                <button onClick={handleShowBoxToggle}>˅</button>
            </div>
            <div className={isShowingBox ? styles.infoBoxShowing : styles.infoBoxHidden}>
                <b>{formName}</b> - {definition}
                <br/><br/>
                <b>Meaning:</b> {props.data.meaning}
                <br/><br/>
                <b>Example Sentence:</b> 
            </div>
        </div>
    );
}
export default DictionaryForm