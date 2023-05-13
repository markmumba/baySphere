

const Contact = () => {

    return (
        <div className=" bg-gray-900 text-slate-300">
            <div className=" grid md:flex md:p-20 ">
                <div className=" p-4 md:py-20 md:px-10">
                    <h2 className=" text-2xl md:text-4xl font-bold ">Bay sphere </h2>
                    <p className="text-sm md:text-base font-medium">Accelerate Your Online Success with Our<br /> Digital Marketing Expertise</p>
                    <div className="flex  gap-6 pt-3  md:text-base">
                        <i className="bi bi-facebook"></i>
                        <i className="bi bi-instagram"></i>
                        <i className="bi bi-twitter"></i>
                        <i className="bi bi-github"></i>
                    </div>
                </div>
                <div className="md:pl-80 md:py-10">
                    <div className="grid grid-cols-3">
                        <div className="">
                            <h3 className="pl-3 text-xl md:text-2xl font-medium">Solutions</h3>
                            <ul className="">
                                <li className="text-sm md:text-base">Search Engine Optimization</li>
                                <li className="text-sm md:text-base">Social Media Marketing </li>
                                <li className="text-sm md:text-base">Content Marketing</li>
                                <li className="text-sm md:text-base">Website Design and Development</li>
                            </ul>
                        </div>
                        <div className="md:pl-20">
                            <h3 className="pl-3 text-xl md:text-2xl  font-medium" >Support</h3>
                            <ul>
                                <li className="text-sm md:text-base">Pricing</li>
                                <li className="text-sm md:text-base">Quotation</li>
                                <li className="text-sm md:text-base">Contact Us</li>
                                <li className="text-sm md:text-base">FAQs</li>
                            </ul>
                        </div>
                        <div className="md:pl-10">
                            <h3 className="pl-3 text-xl md:text-2xl  font-medium">Company</h3>
                            <ul>
                                <li className="text-sm md:text-base">About</li>
                                <li className="text-sm md:text-base">Blog</li>
                                <li className="text-sm md:text-base">Jobs</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:px-20">
            <hr className=""></hr>
            </div>
            <footer className=" p-4 text-sm md:text-base md:px-20 md:py-10">
            <p>© 2023 BaySphere Company, Inc. All rights reserved.</p>
            </footer>


        </div>
    )
}

export default Contact;