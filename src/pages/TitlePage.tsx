import BackgroundImg from "../images/Background.jpg"

export function TitlePage() {
    return (
        <section className="relative h-screen w-full overflow-hidden"> 
            <img src={BackgroundImg} className="absolute w-full h-full object-cover object-top"/>

            <h1 className="flex absolute bottom-100 left-40 text-8xl font-bold z-20"> Fund Name</h1>
            <h1 className="flex absolute bottom-75 left-40 w-200 text-xl font-bold z-20"> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quod deleniti eius accusantium quasi quas illum libero temporibus autem iure, doloremque vero, nisi rerum reiciendis assumenda fugiat amet quae a!
            </h1>
        </section>
    )
}