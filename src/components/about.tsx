import workImage from '../assets/images/microsoft-edge-1N49Cn7P0Fg-unsplash.jpg'

const About = () => {
    return (
        <>
            <div className=" py-10 md:py-28">
                <h2 className="text-center font-bold  text-4xl md:text-5xl">About Us</h2>
                <div className="grid md:flex space-x-9">
                    <div className="font-medium  md:text-xl py-7 md:py-40 px-10 md:px-28 max-w-5xl">
                        <p>Baysphere is a digital marketing agency
                            that offers social media marketing and management,
                            Search Engine Optimization, Search Engine Marketing,
                            and Web Development. We believe that having a strong
                            online presence is essential for business growth.
                        </p>
                    </div>
                    <div className='px-16 md:py-20 md:px-20'>
                        <img className='object-cover w-[150px] h-[150px] md:w-[400px] md:h-[400px] rounded-full' src={workImage} alt="work"  />
                    </div>
                </div>


            </div>
        </>
    )
}

export default About;