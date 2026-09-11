export function NavBar() {
    return (
        <section>
            <nav className="flex fixed top-0 left-0 w-full gap-6 bg-zinc-600/60 px-6 py-4 h-20 z-10 justify-end">
                <ul className="nav text-white flex gap-6 text-2xl px-10 items-center">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#about">About</a></li>
                </ul>
            </nav>
        </section>
    )
}