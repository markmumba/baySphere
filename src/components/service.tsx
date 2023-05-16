import { motion } from "framer-motion";

const Service = () => {
    return (
        <>
            <div id="services" className="pt-[-10rem]">
                <h1 className="text-center font-bold  text-4xl md:text-5xl">What we do</h1>
                <p className="text-center  md:text-2xl font-medium px-4 py-3 lg:px-60 md:py-10 ">Our team creates customized strategies tailored
                    to each client's specific goals, whether it's increasing website traffic,
                    generating leads, or building brand awareness.
                    We're dedicated to delivering exceptional results and customer service.
                </p>
                <div className="grid grid-cols-2 lg:flex justify-center py-10 gap-7 p-4">
                    <motion.div whileHover={{ scale: 1.1 }}
                     className="border border-gray-200 rounded-lg max-w-sm p-7 shadow-lg">
                        <div className="flex justify-center"><i className="bi bi-code-slash text-sky-950" style={{ fontSize: "3rem" }}></i></div>
                        <h2 className="text-center font-semibold">Web Development</h2>
                        <p className="text-center">Creating or revamping websites to
                         ensure they are visually appealing, user-friendly, and optimized for search engines and conversions.
                        </p>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }} className="border border-gray-200 rounded-lg max-w-sm p-7 shadow-lg">
                        <div className="flex justify-center"><i className="bi bi-shop-window text-sky-950" style={{ fontSize: "3rem" }}></i></div>
                        <h2 className="text-center font-semibold">Social media marketing </h2>
                        <p className="text-center">Developing and implementing strategies to promote brands, products,
                         or services on social media platforms like Facebook, Instagram, Twitter, LinkedIn, and YouTube.
                        </p>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }} className="border border-gray-200 rounded-lg max-w-sm p-7 shadow-lg">
                        <div className="flex justify-center"><i className="bi bi-search text-sky-950" style={{ fontSize: "3rem" }}></i></div>
                        <h2 className="text-center font-semibold">Search engine optimazaton</h2>
                        <p className="text-center"> Optimizing a website's structure, content, and 
                        technical aspects to improve its visibility and ranking in search engine results pages (SERPs).
                        </p>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }} className="border border-gray-200 rounded-lg max-w-sm p-7 shadow-lg">
                        <div className="flex justify-center"><i className="bi bi-person-video2 text-sky-950" style={{ fontSize: "3rem" }}></i></div>
                        <h2 className="text-center font-semibold">Content Marketing</h2>
                        <p className="text-center"> Creating valuable and relevant content, such as
                         blog posts, articles, videos, infographics, and ebooks, to attract and engage 
                         the target audience, drive traffic, and build brand authority.
                        </p>
                    </motion.div>

                </div>
            </div>
        </>
    )
}

export default Service;