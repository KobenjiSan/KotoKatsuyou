import styles from './Header.module.css';

/**
 * Displays app name
 */
function Header(){

    return(
        <div className={styles.title}>
            <h1 className={styles.eng}>KotoKatsuyou</h1>
            <h1 className={styles.jap}>こと活用</h1>
        </div>
    );

}

export default Header