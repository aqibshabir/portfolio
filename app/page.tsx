import About from "@/components/about";
import Contact from "@/components/contact";
import Header from "@/components/header";
import Intro from "@/components/intro";
import Journey from "@/components/journey";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Header />
      <Intro />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Journey />
      <SectionDivider />
      <Contact />
    </main>
  );
}
