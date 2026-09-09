import { useState } from "react";
import project1 from "../images/Project1.jpg";
import project2 from "../images/Project2.jpeg";
import project3 from "../images/Project3.jpg";

const projects = [
    {
        title: "Project One",
        description: "A nice house",
        image: project1
    },
    {
        title: "Project Two",
        description: "A nice house",
        image: project2
    }, 
    {
        title: "Project Three",
        description: "A nice house",
        image: project3
    }
]

export function ProjectCarousel() {
    const [index, setIndex] = useState(0)

    const next = () => setIndex((i) => (i + 1) % projects.length)
    const prev = () => setIndex((i) => (i - 1 + projects.length) % projects.length)

    const current = projects[index]

    return (
        <div className="w-[70%] mx-auto flex h-500px shadow-xl rounded-lg overflow-hidden">
            <div className="w-[70%] h-full">
                <img
                    src={current.image}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="w-[30%] h-full bg-white flex flex-col justify-center p-8">
                <h3 className="text-2xl font-bold mb-4">{current.title}</h3>
                <p className="text-zinc-500 text-sm">{current.description}</p>

                <div className="flex gap-4 mt-8">
                    <button onClick={prev} className="px-4 py-2 border rounded hover:bg-zinc-100">
                        Prev
                    </button>
                    <button onClick={next} className="px-4 py-2 border rounded hover:bg-zinc-100">
                        Next
                    </button>
                </div>
            </div>
        </div>
    )

}