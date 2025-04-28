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
            <h1>Hello {props.word}</h1>
            <DictionaryForm/>
            <PoliteForm/>
            <NegativeForm/>
            <TeForm/>
            <PastForm/>
        </div>
    );

}

export default Output;