import { AboutUs } from "./AboutUs"
import { NavBar } from "./NavBar"
import { Projects } from "./Projects"
import { TitlePage } from "./TitlePage"

export function HomePage() {
    return (
        <div id="home"> 
            <NavBar/>
            <TitlePage/>
            <AboutUs/>
            <Projects/>        
        </div>
    )
}