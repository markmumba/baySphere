import startup from '../assets/images/app-launch.svg'
import keynote from '../assets/images/keynote-presentation.svg'
import success from '../assets/images/business-success-chart.svg'

const About = () => {
    return (
        <>
            <div className=" py-10 md:py-28">
                <h2 className="text-center font-bold  text-4xl md:text-5xl">About Us</h2>
                <div className=' grid  md:flex md:space-x-40 md:px-60'>
                    <div className='p-7 md:p-20 font-medium md:text-lg max-w-3xl'>
                        <p>Our mission is to empower businesses
                            of all sizes to achieve their online
                            goals and unlock their true potential. We believe that digital marketing is not just about generating leads or increasing
                            website traffic; it's about creating meaningful
                            connections, building brand authority,
                            and driving sustainable growth.
                        </p>
                    </div>
                    <div className=' px-20  md:pt-16 '> <img className='w-[200px] h-[200px] md:w-[300px] md:h-[300px] border rounded-xl  shadow-lg' src={startup} /> </div>
                </div>
                <div className='grid  md:flex md:space-x-40 md:px-60'>
                    <div className='px-20 pt-10  md:px-20'> <img className='w-[200px] h-[200px] md:w-[300px] md:h-[300px] border rounded-xl  shadow-lg' src={keynote} /> </div>
                    <div className='p-7 md:p-20 font-medium md:text-lg max-w-3xl'>
                        <p> With years of experience
                            in the industry, our team has a deep understanding of the
                            ever-evolving digital landscape. We stay up-to-date with the latest trends,
                            algorithms, and best practices to ensure our clients stay ahead of the competition.
                        </p>
                    </div>
                </div>
                <div className='grid  md:flex md:space-x-40 md:px-60'>
                    <div className='p-7 md:p-20 font-medium md:text-lg max-w-3xl'>
                        <p>The digital landscape is dynamic,
                            and we are committed to continuous learning and growth. We actively seek new opportunities,
                            embrace innovation, and adapt our
                            strategies to ensure our clients stay ahead
                            in the ever-changing digital world.
                        </p>
                    </div>
                    <div className=' px-20  md:pt-16 '> <img className='w-[200px] h-[200px] md:w-[300px] md:h-[300px] border rounded-xl  shadow-lg' src={success} /> </div>
                </div>


            </div>
        </>
    )
}

export default About;