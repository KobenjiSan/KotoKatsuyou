import { 
    FormBox,
    negativeConfig,
    dictionaryConfig,
    politeConfig,
    negativePoliteConfig,
    pastConfig,
    pastPoliteConfig,
    pastNegativeConfig,
    pastNegativePoliteConfig,
    teConfig,
    teIruConfig,
    teIruPoliteConfig,
    teKudasaiConfig,
    teMoiiConfig,
    teWaIkenaiConfig,
    teKaraConfig,
    teMiruConfig,
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
            <FormBox config={dictionaryConfig} data={props.verbData}/>
            <FormBox config={politeConfig} data={props.verbData}/>
            <FormBox config={negativeConfig} data={props.verbData}/>
            <FormBox config={negativePoliteConfig} data={props.verbData}/>
            <FormBox config={pastConfig} data={props.verbData}/>
            <FormBox config={pastPoliteConfig} data={props.verbData}/>
            <FormBox config={pastNegativeConfig} data={props.verbData}/>
            <FormBox config={pastNegativePoliteConfig} data={props.verbData}/>
            <FormBox config={teConfig} data={props.verbData}/>
            <FormBox config={teIruConfig} data={props.verbData}/>
            <FormBox config={teIruPoliteConfig} data={props.verbData}/>
            <FormBox config={teKudasaiConfig} data={props.verbData}/>
            <FormBox config={teMoiiConfig} data={props.verbData}/>
            <FormBox config={teWaIkenaiConfig} data={props.verbData}/>
            <FormBox config={teKaraConfig} data={props.verbData}/>
            <FormBox config={teMiruConfig} data={props.verbData}/>
            <div className={styles.foot}/>
        </div>
    );

}

export default Output;