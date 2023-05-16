import startup from '../assets/images/app-launch.svg'
import keynote from '../assets/images/keynote-presentation.svg'
import success from '../assets/images/business-success-chart.svg'
import { motion } from "framer-motion"

const About = () => {
    return (
        <>
            <div id="about" className=" py-10  lg:py-28">
                <h2 className="text-center font-bold  text-4xl md:text-5xl">About Us</h2>
                <div className=' grid  md:flex lg:space-x-40 lg:px-60  '>
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }} animate={{ y: -20 }} viewport={{ once: true }} className='mt-20 p-7 lg:p-20 font-medium  text-gray-500 md:text-2xl text-xl max-w-md lg:max-w-3xl'>
                        <p>Our mission is to empower businesses
                            of all sizes to achieve their online
                            goals and unlock their true potential. We believe that digital marketing is not just about generating leads or increasing
                            website traffic; it's about <span className='text-black'>creating meaningful
                                connections, building brand authority,
                                and driving sustainable growth.</span>
                        </p>
                    </motion.div>
                    <div className=' px-20 md:pl-10 md:pt-12 lg:pt-16 '> <img className='w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] border rounded-xl  shadow-lg' src={startup} /> </div>
                </div>
                <div className='grid  md:flex lg:space-x-40 lg:px-60'>
                    <div className='hidden md:block px-20 md:px-10 md:pt-10  lg:pt-16'> <img className='w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] border rounded-xl  shadow-lg' src={keynote} /> </div>
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }} animate={{ y: -20 }} viewport={{ once: true }} className='p-7 lg:p-20 font-medium text-gray-500 md:text-2xl text-xl max-w-md lg:max-w-3xl'>
                        <p> With years of experience
                            in the industry, our team has a deep understanding of the
                            ever-evolving digital landscape. We stay up-to-date with the latest trends,
                            algorithms, and best practices to ensure our clients stay ahead of the competition.
                        </p>
                    </motion.div>
                </div>
                <div className='grid  md:flex lg:space-x-40 lg:px-60'>
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }} animate={{ y: -20 }} viewport={{ once: true }} className='p-7 lg:p-20 font-medium text-gray-500 md:text-2xl text-xl max-w-md lg:max-w-3xl'>
                        <p>The digital landscape is dynamic,
                            and we are committed to continuous learning and growth. We actively <span className='text-black'>seek new opportunities,</span>
                            embrace innovation, and adapt our
                            strategies to ensure our clients stay ahead
                            in the ever-changing digital world.
                        </p>
                    </motion.div>
                    <div className='px-20 md:px-10 md:pt-10  lg:pt-16'> <img className='w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] border rounded-xl  shadow-lg' src={success} /> </div>
                </div>


            </div>
        </>
    )
}

export default About;