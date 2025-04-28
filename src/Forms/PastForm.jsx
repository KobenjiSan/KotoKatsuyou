import styles from './Form.module.css'

function PastForm(){

    const formName = "Past";

    return(
        <div className={styles.formBox}>
            <p>{formName}</p>
        </div>
    );
}
export default PastForm