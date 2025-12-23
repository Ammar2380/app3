
import "./App.css";
import Footer from './components/Footer';
import AI from './components/Ai_SaaS'
import Navbar from './components/Navbar'

import Contact from './components/Contact'
import Services from "./components/Services";
import HowWeWork from "./components/HowWeWork";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";

import ClientStories from "./components/ClientStories";


export default function HayviralLanding() {
  return (
    <div className="font-sans">
   
      
      <Navbar />
      <Hero />
      <About />
       <ClientStories />
      <WhyChooseUs />
      <AI/>
      <Services />
      <HowWeWork />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}
