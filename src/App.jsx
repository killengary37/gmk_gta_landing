import gsap from "gsap";
import {ScrollTrigger} from 'gsap/all';
import Hero from "./sections/Hero.jsx";
import NavBar from "./sections/NavBar.jsx";
import FirstVideo from "./sections/FirstVideo.jsx";
import Jason from "./sections/Jason.jsx";
import SecondVideo from "./sections/SecondVideo.jsx";
import Lucia from "./sections/Lucia.jsx";
import PostCard from "./sections/PostCard.jsx";
import Final from "./sections/Final.jsx";
import Outro from "./sections/Outro.jsx";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
     <NavBar/>
     <Hero />

     <FirstVideo />
     <Jason />

     <SecondVideo/>
     <Lucia/>

     <PostCard/>
     <Final/>
     <Outro/>
    </main>
  )
}
export default App
