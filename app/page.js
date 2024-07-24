import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <NavBar />
      <div className="container mx-auto px-12">
        <Hero />
        <AboutMe />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
