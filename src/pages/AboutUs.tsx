export function AboutUs() {
    return (
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
                    <p className="text-6xl font-bold">8%</p>
                    <p className="mt-2 text-zinc-500 text-sm">Average Annual Distribution Yield</p>
                </div>
            </div>

            <div className="px-5 pt-10 text-start mx-auto">
                <h1 className="text-base font-bold text-gray-500 opacity-70">Why Us</h1>
                <hr className="w-50 border-t-2 border-gray-200 my-1"/>
            </div>
            <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 py-2">
                <div className="aspect-3/4 bg-gray-100 rounded-lg shadow-lg flex flex-col justify-start items-center text-center">
                    <h1 className="py-5 text-yellow-600 font-bold text-2xl">Quarterly Liquidity</h1>
                    <p className="text-zinc-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid accusantium dolorum similique error maxime veritatis aut quaerat et praesentium nobis debitis ut repellat consequatur enim voluptate, non facere odio. Ab?</p>
                </div>
                <div className="aspect-3/4 bg-gray-100 rounded-lg shadow-lg flex flex-col justify-start items-center text-center">
                    <h1 className="py-5 text-yellow-600 font-bold text-2xl">Senior Secured Lending</h1>
                    <p className="text-zinc-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid accusantium dolorum similique error maxime veritatis aut quaerat et praesentium nobis debitis ut repellat consequatur enim voluptate, non facere odio. Ab?</p>
                </div>
                <div className="aspect-3/4 bg-gray-100 rounded-lg shadow-lg flex flex-col justify-start items-center text-center">
                    <h1 className="py-5 text-yellow-600 font-bold text-2xl">Tranching Structures</h1>
                    <p className="text-zinc-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid accusantium dolorum similique error maxime veritatis aut quaerat et praesentium nobis debitis ut repellat consequatur enim voluptate, non facere odio. Ab?</p>
                </div>
            </div>
        </section>
    )
}