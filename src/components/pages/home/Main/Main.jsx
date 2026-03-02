import "./Main.scss";
import Hero from "./Hero/Hero.jsx";
import About from "./About/About.jsx";
import Statistics from "./Statistics/Statistics.jsx";
import Progress from "./Progress/Progress.jsx";
import Mission from "./Mission/Mission.jsx";
import Mentor from "./Mentor/Mentor.jsx";
import Programme from "./Programme/Programme.jsx";

function Main() {
  return (
    <main className='main container'>
      <Hero />
      <About />
      <Statistics />
      <Progress />
      <Mission />
      <Mentor />
      <Programme />
    </main>
  );
}

export default Main;
