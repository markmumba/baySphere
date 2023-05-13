import Navbar from "./navbar";
import Hero from "./hero";
import About from "./about";
import Service from "./service";
import Contact from "./contacts";
const MainComponent = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<About />
			<Service />	
			<Contact />
		</>
	)
}

export default MainComponent;