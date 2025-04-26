import Form from '../Form/Form.jsx'
import styles from './Output.module.css'

function Output(){

    return(
        <div className={styles.output}>
            <Form type="Dictionary" word="食べる" />
            <Form type="Polite" word="食べます" />
            <Form type="Negative" word="食べない" />
            <Form type="Te-" word="食べて" />
            <Form type="Past" word="食べた" />
        </div>
    );

}

export default Output;