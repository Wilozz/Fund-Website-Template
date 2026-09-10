import { useEffect, useState } from "react";
import project1 from "../images/Project1.jpg";
import project2 from "../images/Project2.jpeg";
import project3 from "../images/Project3.jpg";

const projects = [
    {
        title: "Project One",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi amet molestias numquam aliquid repellat officiis molestiae similique. Consequatur sapiente, nemo doloribus numquam eos quia nesciunt repudiandae vitae, nobis facere itaque?",
        image: project1
    },
    {
        title: "Project Two",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi amet molestias numquam aliquid repellat officiis molestiae similique. Consequatur sapiente, nemo doloribus numquam eos quia nesciunt repudiandae vitae, nobis facere itaque?",
        image: project2
    }, 
    {
        title: "Project Three",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi amet molestias numquam aliquid repellat officiis molestiae similique. Consequatur sapiente, nemo doloribus numquam eos quia nesciunt repudiandae vitae, nobis facere itaque?",
        image: project3
    }
]

export function ProjectCarousel() {
    const [index, setIndex] = useState(0)
    
    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((i) => (i + 1) % projects.length)
        }, 2000)

        return () => clearInterval(timer)
    }, [])

    const current = projects[index]

    return (
        <div className="w-[70%] mx-auto flex h-125 shadow-xl rounded-lg overflow-hidden">
            <div className="w-[70%] h-full">
                <img
                    src={current.image}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="w-[30%] h-full bg-white flex flex-col justify-between p-8">
                <h3 className="text-2xl font-bold mb-4 align-top text-black">{current.title}</h3>
                <p className="text-zinc-500 text-sm">{current.description}</p>

                <div className="flex gap-2 mt-auto">
                    {projects.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`h-1 rounded-full transition-all duration-300 ${
                                i === index ? "w-8 bg-zinc-800" : "w-4 bg-zinc-300"
                            }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )

}