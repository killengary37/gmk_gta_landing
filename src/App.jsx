import gsap from "gsap";
import {ScrollTrigger} from 'gsap/all';
import Hero from "./sections/Hero.jsx";
import NavBar from "./sections/NavBar.jsx";
import FirstVideo from "./sections/FirstVideo.jsx";
import Jason from "./sections/Jason.jsx";
import SecondVideo from "./sections/SecondVideo.jsx";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
     <NavBar/>
     <Hero />
     <FirstVideo />
     <Jason />
     <SecondVideo/>
    </main>
  )
}
export default App
