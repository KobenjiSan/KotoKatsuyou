import styles from "./About.module.css"

function About(){

    return(
        <div className={styles.aboutContent}>
            <h1>ABOUT</h1>
            <div className={styles.aboutInfo}>
                <p>
                    <b>About KotoKatsuyou</b><br/>

                    KotoKatsuyou is a Japanese verb conjugation tool designed to help learners better 
                    understand how verbs transform across different grammatical forms.<br/>
                    <br/>
                    This project began as a personal learning challenge to improve my React skills while 
                    reinforcing Japanese grammar. What started as a frontend-only utility grew into a 
                    full-stack web app with a backend API, database integration, and a dynamic 
                    conjugation engine.<br/>
                    <br/>
                    <b>How It Works</b><br/>
                    Users can input a Japanese verb in either kanji or hiragana. The app identifies 
                    the verb type (ichidan, godan, or irregular), fetches matching data from the backend, 
                    and runs frontend-based logic to display a full list of conjugated forms.<br/>
                    <br/>
                    Each conjugation includes:<br/>
                    <ul>
                        <li>The form type</li>
                        <li>The conjugated verb</li>
                        <li>A dropdown with form name and definition</li>
                        <li>A description of how the verb changes in this form</li>
                        <li>A translated English meaning based on the conjugation type</li>
                        <li>An example sentence</li>
                    </ul>
                    <br/>
                    <b>Under the Hood</b><br/>
                    The frontend is built with React using modular, component-based architecture. 
                    Styles are handled via CSS Modules.<br/>
                    <br/>
                    The backend runs on Node.js with Express and uses MongoDB to store preloaded 
                    verbs. Each verb entry includes its kanji, hiragana, meaning, type, and a template 
                    for building example sentences. Irregular verbs like する and 来る are specially handled.<br/>
                    <br/>
                    A lightweight NLP library is used to convert English base verbs into the correct 
                    tense, keeping translations natural and as accurate as possible.<br/>
                    <br/>
                    <b>Why It Matters</b><br/>
                    Japanese verb conjugation can be intimidating. This app simplifies that process by 
                    making patterns visual, interactive, and connected to real examples.<br/>
                    <br/>
                    It's also a showcase of what I can build: an app that's practical, clean, and fully 
                    functional across the full stack.
                </p>
            </div>
        </div>
    )

}

export default About