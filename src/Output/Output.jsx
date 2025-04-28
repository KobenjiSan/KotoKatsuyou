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
                <h2>
                    {props.verbData.kanji} 
                    {props.verbData.hiragana} 
                    {props.verbData.meaning} 
                    {props.verbData.type}
                </h2>
            </div>
            <DictionaryForm/>
            <PoliteForm/>
            <NegativeForm/>
            <TeForm/>
            <PastForm/>
            <div className={styles.foot}/>
        </div>
    );

}

export default Output;