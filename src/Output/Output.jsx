import { useEffect, useState } from 'react';
import { 
    ConjugationBox,
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
} from '../Conjugations';
import styles from './Output.module.css'

/**
 * Displays ConjugationBoxes for each Conjugation form
 * Applies dynamic tooltips based on verb type.
 */
function Output(props){

    const [typeSpanText, setTypeSpanText] = useState('');

    useEffect(() => {
        if(props.verbData.type === "ichidan"){
            setTypeSpanText('Ichidan verbs drop the final る and add conjugation endings directly.');
        }else if(props.verbData.type === "godan"){
            setTypeSpanText('Godan verbs change their final kana depending on the conjugation form.');
        }else if(props.verbData.type === "irregular"){
            setTypeSpanText('Irregular verbs don’t follow standard conjugation patterns and are handled uniquely.');
        }else{
            setTypeSpanText('');
        }
    }, [props.verbData]);

    return(
        <div className={styles.output}>
            <div className={styles.head}>
                <h2 className={styles.kanji}>{props.verbData.kanji}</h2>
                <h2 className={styles.hiragana}>{props.verbData.hiragana}</h2>
                <h2 className={styles.meaning}>{props.verbData.meaning ? (props.verbData.meaning).toUpperCase() : null}</h2> 
                <h2 className={styles.type} title={typeSpanText}>{props.verbData.type ? (props.verbData.type).toUpperCase() : null}</h2>
            </div>
            <ConjugationBox config={dictionaryConfig} data={props.verbData}/>
            <ConjugationBox config={politeConfig} data={props.verbData}/>
            <ConjugationBox config={negativeConfig} data={props.verbData}/>
            <ConjugationBox config={negativePoliteConfig} data={props.verbData}/>
            <ConjugationBox config={pastConfig} data={props.verbData}/>
            <ConjugationBox config={pastPoliteConfig} data={props.verbData}/>
            <ConjugationBox config={pastNegativeConfig} data={props.verbData}/>
            <ConjugationBox config={pastNegativePoliteConfig} data={props.verbData}/>
            <ConjugationBox config={teConfig} data={props.verbData}/>
            <ConjugationBox config={teIruConfig} data={props.verbData}/>
            <ConjugationBox config={teIruPoliteConfig} data={props.verbData}/>
            <ConjugationBox config={teKudasaiConfig} data={props.verbData}/>
            <ConjugationBox config={teMoiiConfig} data={props.verbData}/>
            <ConjugationBox config={teWaIkenaiConfig} data={props.verbData}/>
            <ConjugationBox config={teKaraConfig} data={props.verbData}/>
            <ConjugationBox config={teMiruConfig} data={props.verbData}/>
            <div className={styles.foot}/>
        </div>
    );

}

export default Output;