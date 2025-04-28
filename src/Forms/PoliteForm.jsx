import styles from './Form.module.css'

function PoliteForm(){

    const formName = "Polite";

    return(
        <div className={styles.formBox}>
            <p>{formName}</p>
        </div>
    );
}
export default PoliteForm