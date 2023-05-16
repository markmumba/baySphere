import businessImage from '../assets/images/1.svg'
import { motion, useScroll } from "framer-motion"


const Hero = () => {
    const { scrollYProgress } = useScroll();


    return (
        <>
         <motion.div className='mt-20 fixed h-1 bg-sky-950 origin-left top-0 left-0 right-0' style={{ scaleX: scrollYProgress }} />  
            <div className=' pt-20 md:pt-40 absolute inset-0 flex justify-center -z-10 '>
                <div className=" w-[320px] h-[320px]   md:w-[720px] md:h-[720px] rounded-full opacity-20 blur-3xl bg-black "></div>
            </div>
            <div className=" pt-20 grid lg:flex lg:space-x-40">
                <div className="text-4xl md:text-7xl  font-bold p-8 md:pt-20 lg:py-60 lg:px-16 max-w-5xl">
                    <h1>The agency you've been looking for</h1>
                    <h2 className='text-sm md:text-2xl pt-5'>Branding & Creative | Digital & Web Design | Advertising & Content</h2>
                    <button className=' text-sm md:text-lg text-white border rounded-lg px-4 py-2  md:px-10 md:py-3 bg-sky-950'>Services</button>

                </div>
                <div className=' px-4 lg:pt-10'>
                    <img className='w-70 h-70 lg:w-full  lg:h-full' src={businessImage} />
                </div>
            </div>
        </>
    )
}

export default Hero;