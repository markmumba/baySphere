

const Pricing = () => {
    return (
        <>
            <div className="p-10">
                <h1 className="font-bold text-4xl text-center">Pricing plans for different solutions</h1>
                <p className=" text-base text-center pt-5 ">Choose an affordable plan thats
                    packed with the best features for engaging your audience,
                    creating customer loyalty, and driving sales.</p>

                <div>
                    <div className=" grid md:flex md:flex-row justify-center gap-y-10 md:gap-y-20 gap-x-4 p-2 md:p-20 ">
                        <div className="flex flex-col gap-y-2 p-3 md:p-10  border-gray-200 border-2 rounded-xl">
                            <h2 className="text-center font-bold ">Starter Package</h2>
                            <p className="text-center font-bold"> <span className="text-3xl">Ksh 3,000</span>/month </p>
                            <p className="text-sm text-center">Designed for Small Businesses</p>
                            <ul >
                                <li><i className="bi bi-check2 text-gray-900" ></i>Social Media Setup</li>
                                <li><i className="bi bi-check2 text-gray-900" ></i>Basic Website Optimization</li>
                                <li><i className="bi bi-check2 text-gray-900  " ></i>Content Creation</li>
                                <li><i className="bi bi-check2 text-gray-900  " ></i>Local SEO</li>
                            </ul>
                        </div>
                        <div className="flex flex-col  p-3 md:p-10 border-2 gap-y-2 border-gray-900 rounded-lg">
                            <h2 className="text-center font-bold">Growth Package</h2>
                            <p className="text-center font-bold"><span className="text-3xl">Ksh 6,000</span>/month</p>
                            <p className="text-sm text-center"> Ideal for Growing Businesses</p>
                            <ul>
                                <li><i className="bi bi-check2 text-gray-900  " ></i>Comprehensive Website Optimization</li>
                                <li><i className="bi bi-check2 text-gray-900 " ></i>Social Media Management</li>
                                <li><i className="bi bi-check2 text-gray-900  " ></i>Search Engine Optimization </li>
                                <li><i className="bi bi-check2 text-gray-900 " ></i>Monthly Analytics Reports</li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-y-2 p-3 md:p-10 border-2 border-gray-200 rounded-lg">
                            <h2 className="text-center font-bold ">Pro Package</h2>
                            <p className="text-center font-bold"><span className="text-3xl">Ksh 10,000</span>/month</p>
                            <p className="text-sm text-center">The essentials to provide your best work for clients.</p>
                            <ul>
                                <li><i className="bi bi-check2 text-gray-900  " ></i>Advanced Website Optimization</li>
                                <li><i className="bi bi-check2 text-gray-900 " ></i>Social Media Advertising</li>
                                <li><i className="bi bi-check2 text-gray-900 " ></i>Content Marketing</li>
                                <li><i className="bi bi-check2 text-gray-900 " ></i>Comprehensive Monthly Reports</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Pricing;