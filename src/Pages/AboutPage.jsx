import { Link } from "react-router-dom"
import Header from "../Header/Header"
import About from "../About/About"

/**
 * Static about page that describes the app’s purpose, features, and tech stack.
 * Accessible via the /about route.
 */
function AboutPage(){

    return(
        <>
            <Link to='/' className='toLink'>
                <h2>Home</h2>
            </Link>
            <div className="mainContent">
            <Header/>
            <About/>
            </div>
        </>
    )
}

export default AboutPage