import styles from './Form.module.css'

function NegativeForm(){

    const formName = "Negative";

    return(
        <div className={styles.formBox}>
            <p>{formName}</p>
        </div>
    );
}
export default NegativeForm