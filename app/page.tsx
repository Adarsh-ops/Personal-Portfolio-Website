"use client"
import Navbar from "@/components/Navbar";
import Typing from "@/components/Typing";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen bg-fixed [background-image:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      <Navbar></Navbar>
      <Typing></Typing>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
}