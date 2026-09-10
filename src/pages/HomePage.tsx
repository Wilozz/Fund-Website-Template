import { ProjectCarousel } from "../components/ProjectCarousel"
import { AboutUs } from "./AboutUs"
import { TitlePage } from "./TitlePage"

export function HomePage() {
    return (
        <div> 
            <TitlePage/>

            {/* About us section */}
            <AboutUs/>
        
            <section className="h-screen ">
                <div className="px-5 pt-30 text-start mx-auto">
                    <h1 className="text-base font-bold text-gray-500 opacity-70">Our Projects</h1>
                    <hr className="w-50 border-t-2 border-gray-200 my-1"/>
                </div>
                <div className="py-20">
                <ProjectCarousel/>
                </div>
            </section>
        </div>
    )
}