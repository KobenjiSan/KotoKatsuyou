import { 
    DictionaryForm, 
    PoliteForm, 
    NegativeForm, 
    TeForm, 
    PastForm,
} from '../Forms';
import styles from './Output.module.css'

function Output(props){

    return(
        <div className={styles.output}>
            <div className={styles.head}>
                <h2 className={styles.kanji}>{props.verbData.kanji}</h2>
                <h2 className={styles.hiragana}>{props.verbData.hiragana}</h2>
                <h2 className={styles.meaning}>{props.verbData.meaning ? (props.verbData.meaning).toUpperCase() : null}</h2> 
                <h2 className={styles.type}>{props.verbData.type ? (props.verbData.type).toUpperCase() : null}</h2>
                
            </div>
            <DictionaryForm data={props.verbData}/>
            <PoliteForm data={props.verbData}/>
            <NegativeForm/>
            <TeForm/>
            <PastForm/>
            <div className={styles.foot}/>
        </div>
    );

}

export default Output;