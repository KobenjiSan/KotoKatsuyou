import styles from './Form.module.css'

function TeForm(){

    const formName = "Te-";

    return(
        <div className={styles.formBox}>
            <p>{formName}</p>
        </div>
    );
}
export default TeForm