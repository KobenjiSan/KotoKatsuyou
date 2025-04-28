import styles from './Form.module.css'

function DictionaryForm(){

    const formName = "Dictionary";
    const definition = "The plain, unconjugated form of a Japanese verb used in casual speech, writing, and to build other conjugations";


    const infoBox = <div className={styles.infoBox}>
                        <b>{formName}</b> - {definition}
                        <br/><br/>
                        <b>Meaning:</b> 
                        <br/><br/>
                        <b>Example Sentence:</b> 
                    </div>
    return(
        <div>
            <div className={styles.formBox}>
                <p className={styles.type}>{formName}</p>
                <p className={styles.word}>食べる</p>
                <button>˅</button>
            </div>
            
        </div>
    );
}
export default DictionaryForm