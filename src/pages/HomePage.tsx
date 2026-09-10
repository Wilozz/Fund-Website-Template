import { AboutUs } from "./AboutUs"
import { Projects } from "./Projects"
import { TitlePage } from "./TitlePage"

export function HomePage() {
    return (
        <div> 
            <TitlePage/>
            <AboutUs/>
            <Projects/>        
        </div>
    )
}