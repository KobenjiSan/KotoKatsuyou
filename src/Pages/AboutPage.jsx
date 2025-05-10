import { Link } from "react-router-dom"
import Header from "../Header/Header"
import About from "../About/About"

function AboutPage(){

    return(<>
        <Link to='/' className='toLink'>
            <h2>Home</h2>
        </Link>
        <div className="mainContent">
        <Header/>
        <About/>
        </div>
    </>)
}

export default AboutPage