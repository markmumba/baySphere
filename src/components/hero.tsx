import businessImage from '../assets/images/1.svg'

const Hero = () => {

    return (
        <>
            <div className=" pt-20 grid md:flex md:space-x-40">

                <div className="text-3xl md:text-7xl  font-bold p-8 md:py-60 md:px-16 max-w-5xl">
                    <h1>The agency you've been looking for</h1>
                    <h2 className='text-sm md:text-xl pt-5'>Branding & Creative | Digital & Web Design | Advertising & Content</h2>
                    <button className=' text-sm text-white border rounded-lg px-4 py-2  md:px-7 md:py-3 bg-gray-900'>Services</button>

                </div>
                <div className=' px-1 md:pt-10'>
                    <img className='w-60 h-60 md:w-full  md:h-full' src={businessImage} />
                </div>
            </div>
        </>
    )
}

export default Hero;