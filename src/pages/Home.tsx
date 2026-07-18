import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import YayiBond from "../components/YayiBond";
import Support from "../components/Support";
function Home() {
  return (
    <div className="pt-16">
      <Hero />
      <About />
      <Projects />
      <YayiBond />
      <Support />
    </div>
  );
}

export default Home;
