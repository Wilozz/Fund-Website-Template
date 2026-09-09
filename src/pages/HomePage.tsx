import BackgroundImg from "../images/Background.jpg"
import { ProjectCarousel } from "./ProjectCarousel"

export function HomePage() {
    return (
        <div> 
            <section className="relative h-screen w-full overflow-hidden"> 
                <nav className="flex absolute top-0 left-0 w-full gap-6 bg-zinc-600/60 px-6 py-4 h-23 z-10 justify-end">
                    <ul className="nav text-white flex gap-6 text-2xl px-10 items-center">
                        <li>Home</li>
                        <li>About</li>
                        <li>Projects</li>
                        <li>Contact</li>
                    </ul>
                </nav>

                <img src={BackgroundImg} className="absolute w-full h-full object-cover object-top"/>

                <h1 className="flex absolute bottom-100 left-40 text-8xl font-bold z-20"> Fund Name</h1>
                <h1 className="flex absolute bottom-75 left-40 w-200 text-xl font-bold z-20"> 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quod deleniti eius accusantium quasi quas illum libero temporibus autem iure, doloremque vero, nisi rerum reiciendis assumenda fugiat amet quae a!
                </h1>
            </section>

            {/* About us section */}
            <section className="relative h-screen w-full text-black px-4 py-24">
                <div className="max-w-5xl text-center mx-auto">
                    <h1 className="text-2xl font-bold text-yellow-600">About Us</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi debitis unde qui mollitia laborum. Necessitatibus sapiente, dolorum nisi, rem vero nemo mollitia repudiandae ipsum delectus, temporibus molestias libero provident nobis!</p>
                </div>
                <div className="py-5 max-w-5xl mx-auto flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x-3 divide-zinc-200">
                    <div className="flex-1 py-6 sm:py-0 text-center">
                        <p className="text-6xl font-bold">$50B</p>
                        <p className="mt-2 text-zinc-500 text-sm">Assets Under Management</p>
                    </div>
                    <div className="flex-1 py-6 sm:py-0 text-center">
                        <p className="text-6xl font-bold">20</p>
                        <p className="mt-2 text-zinc-500 text-sm">Years Old</p>
                    </div>
                    <div className="flex-1 py-6 sm:py-0 text-center">
                        <p className="text-6xl font-bold">100+</p>
                        <p className="mt-2 text-zinc-500 text-sm">Current Projects Invested</p>
                    </div>
                    <div className="flex-1 py-6 sm:py-0 text-center">
                        <p className="text-6xl font-bold">9%</p>
                        <p className="mt-2 text-zinc-500 text-sm">Distribution Yield</p>
                    </div>
                </div>

                <div className="px-5 pt-10 text-start mx-auto">
                    <h1 className="text-base font-bold text-gray-500 opacity-70">Why Us</h1>
                    <hr className="w-50 border-t-2 border-gray-200 my-1"/>
                </div>
                <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 py-2">
                    <div className="aspect-3/4 bg-gray-100 rounded-lg shadow-lg flex flex-col justify-start items-center text-center">
                        <h1 className="py-5 text-yellow-600 font-bold text-2xl">Lowest Management Fees</h1>
                        <p className="text-zinc-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid accusantium dolorum similique error maxime veritatis aut quaerat et praesentium nobis debitis ut repellat consequatur enim voluptate, non facere odio. Ab?</p>
                    </div>
                    <div className="aspect-3/4 bg-gray-100 rounded-lg shadow-lg flex flex-col justify-start items-center text-center">
                        <h1 className="py-5 text-yellow-600 font-bold text-2xl">aoeuh</h1>
                        <p className="text-zinc-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid accusantium dolorum similique error maxime veritatis aut quaerat et praesentium nobis debitis ut repellat consequatur enim voluptate, non facere odio. Ab?</p>
                    </div>
                    <div className="aspect-3/4 bg-gray-100 rounded-lg shadow-lg flex flex-col justify-start items-center text-center">
                        <h1 className="py-5 text-yellow-600 font-bold text-2xl">aoeuh</h1>
                        <p className="text-zinc-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid accusantium dolorum similique error maxime veritatis aut quaerat et praesentium nobis debitis ut repellat consequatur enim voluptate, non facere odio. Ab?</p>
                    </div>
                </div>
            </section>
        
            <section className="h-screen py-40">
                <ProjectCarousel/>
            </section>
        </div>
    )
}