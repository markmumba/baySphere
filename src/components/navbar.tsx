import { useState } from "react";

const Navbar = () => {

    const [nav, setNav] = useState(false);

    const handleClick = () => {
        setNav((prevState) => !prevState)
    }

    return (
        <div className="w-full h-[80px] z-10 backdrop-blur-sm fixed ">
            <div className="px-2 flex justify-between items-center w-full h-full">
                <div className="flex items-center ">
                    <h1 className="text-3xl  font-bold sm:text-4xl ">Bay Sphere</h1>
                </div>
                <div className="flex items-center">
                <ul className="hidden md:flex ">
                        <li>About</li>
                        <li><a href="#services">Services</a></li>
                        <li>Pricing</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="md:hidden" onClick={handleClick}>
                    {!nav ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                    </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    }

                </div>
            </div>
            {nav && <ul className="absolute bg-slate-200 w-full px-8">
                <li className="border-b-2 border-slate-300 w-full ">About</li>
                <li className="border-b-2 border-slate-300 w-full ">Services </li>
                <li className="border-b-2 border-slate-300 w-full ">Pricing</li>
                <li className="border-b-2 border-slate-300  w-full ">Contact</li>

            </ul>
            }


        </div>
    )
}

export default Navbar;