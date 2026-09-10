import BackgroundImg from "../images/Background.jpg"

export function TitlePage() {
    return (
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
    )
}