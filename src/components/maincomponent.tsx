import Navbar from "./navbar";
import Hero from "./hero";
import About from "./about";
import Service from "./service";
import Pricing from "./pricing";
import Contact from "./contacts";
const MainComponent = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<About />
			<Service />
			<Pricing />
			<Contact />
		</>
	)
}

export default MainComponent;