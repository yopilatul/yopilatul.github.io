import { Link } from "react-router-dom";

export default function Work() {
    return (
        <section id="work" className="p-10 lg:p-28 text-gray-300 font-outfit">
            <h1 className="text-3xl md:text-5xl lg:text-7xl">My Works</h1>
            <p className="text-xs md:text-2xl lg:text-3xl mt-3 md:mt-5 lg:mt-9">This is all my recently project i worked</p>
            <div className="grid lg:grid-cols-2 mt-12 space-y-6 lg:space-y-0 lg:gap-4">
                <div className="w-full h-auto bg-gray-300 rounded-md">
                    <div className="p-2">
                        <a href="/">
                            <img className="rounded-md hover:opacity-70 transition duration-500 ease-in-out transform hover:scale-90" src="https://imgur.com/jGxjMtG.png" alt="Personal website" />
                        </a>
                    </div>
                    <div className="p-2">
                        <h4 className="text-black text-xl font-outfit text-center">
                            Personal portfolio
                        </h4>
                        <p className="text-black font-outfit text-center mt-3">
                            A website thats i use for portfolio, fully responsive
                        </p>
                        <p className="text-black mt-4 text-xs">
                            Project since: December 2021
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}