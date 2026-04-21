import { useEffect } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import InProgress from "./components/InProgress";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Work />
      <InProgress />
      <Contact />
      <Footer />
    </div>
  );
}
