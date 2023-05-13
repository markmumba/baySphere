

const Contact = () => {

    return (
        <>
        <div className="flex p-20 bg-gray-900 text-white ">
            <div className="p-20">
            <h2 className="text-4xl font-bold ">Bay sphere </h2>
            <p className="font-medium">Accelerate Your Online Success with Our<br/> Digital Marketing Expertise</p>
            </div>
                <div className="grid grid-cols-3 pl-20">
                <div className="">
                    <h3 className="pl-3 text-2xl font-medium">Solutions</h3>
                    <ul className="">
                        <li>Search Engine Optimization</li>
                        <li>Social Media Marketing </li>
                        <li>Content Marketing</li>
                        <li>Website Design and Development</li>
                    </ul>
                </div>
                <div>
                    <h3>Support</h3>
                    <ul>
                        <li>Pricing</li>
                    </ul>
                </div>
                <div> 
                    <h3>Company</h3>
                </div>
                </div>

        </div>
        </>
    )
}

export default Contact;