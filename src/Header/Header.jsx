import styles from './Header.module.css';

function Header(){

    return(
        <>
        <div className={styles.head}>
            {/* <img src="./KotoKatsuyouLogo.png" alt="jjj" /> */}
        </div>
        <div className={styles.title}>
            <h1 className={styles.eng}>KotoKatsuyou</h1>
            <h1 className={styles.jap}>こと活用</h1>
        </div>
        </>
    );

}

export default Header