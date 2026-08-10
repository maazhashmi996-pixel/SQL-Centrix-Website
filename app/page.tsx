import Hero from "@/src/data/Components/Hero";
import Problem from "@/src/data/Components/Problem";
import Solution from "@/src/data/Components/Solution";
import Process from "@/src/data/Components/Process";
import FAQ from "@/src/data/Components/FAQ";
import CaseStudies from "@/src/data/Components/CaseStudies";
import Footer from "@/src/data/Components/Footer";
import Navbar from "@/src/data/Components/Navbar";
import Details from "@/src/data/Components/Details";
import Marketing from "@/src/data/Components/Marketing"

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero />
      <Problem />
      <Solution />
      <Process />
      <CaseStudies />
      <Details/>
      <FAQ />
      <Marketing/>
      <Footer/>
    </main>
  );
}