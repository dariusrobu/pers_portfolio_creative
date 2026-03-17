"use client";

import { motion } from "framer-motion";
import ProjectCard from "./components/ProjectCard";
import DiplomaCard from "./components/DiplomaCard";
import { projects } from "./projects";
import { diplomas } from "./diplomas";
import { Github, Linkedin, Mail, Phone, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const containerVars = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVars = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <main className="min-h-screen bg-[#050505]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-8 py-10 mix-blend-difference">
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-sm font-medium tracking-tighter"
        >
          DARIUS.ROBU
        </motion.span>
        <div className="flex gap-8">
          {["Work", "Certifications", "About", "Contact"].map((item, i) => (
            <motion.a
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium hover:opacity-50 transition-opacity"
            >
              {item}
            </motion.a>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto w-full">
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-[12vw] leading-[0.85] font-black tracking-tighter uppercase whitespace-nowrap"
            >
              Creative
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[12vw] leading-[0.85] font-black tracking-tighter uppercase whitespace-nowrap text-right"
            >
              Developer
            </motion.h1>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-12 flex flex-col md:flex-row justify-between items-start md:items-end"
          >
            <p className="text-white/40 max-w-sm text-lg leading-relaxed font-medium">
              Crafting immersive digital experiences through advanced code and refined design. Based in Romania.
            </p>
            <div className="flex gap-4 mt-8 md:mt-0">
              <div className="w-12 h-[1px] bg-white/20 self-center" />
              <span className="text-sm uppercase tracking-widest text-white/60">Available for projects</span>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/20"
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-white/40 to-transparent" />
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section id="work" className="py-32 px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-between items-end mb-16"
        >
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4 block">Selected Works</span>
            <h2 className="text-5xl font-bold tracking-tight">Portfolio</h2>
          </div>
          <p className="text-white/40 max-w-[200px] text-sm hidden md:block">
            A collection of projects built with modern technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-12 gap-6">
          {projects.slice(0, 4).map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {projects.length > 4 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 flex justify-center"
          >
            <Link 
              href="/archive" 
              className="group flex items-center gap-4 border border-white/10 px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all duration-500"
            >
              <span className="text-sm font-medium uppercase tracking-widest">View All Projects</span>
              <div className="bg-white/10 p-2 rounded-full group-hover:bg-black group-hover:text-white transition-all">
                <ArrowUpRight size={18} />
              </div>
            </Link>
          </motion.div>
        )}
      </section>

      {/* Diplomas / Certifications Section */}
      <section id="certifications" className="py-32 px-8 max-w-7xl mx-auto border-t border-white/5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4 block">Academic & Professional</span>
          <h2 className="text-5xl font-bold tracking-tight">Certifications</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {diplomas.map((diploma, index) => (
            <DiplomaCard key={diploma.id} diploma={diploma} index={index} />
          ))}
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="py-32 px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-20">
          <div>
            <h2 className="text-7xl font-bold tracking-tighter mb-8">LET'S TALK</h2>
            <div className="space-y-4">
              <a href="mailto:robu.i.darius@gmail.com" className="text-3xl md:text-5xl block font-medium text-white/40 hover:text-white transition-colors underline underline-offset-8">
                robu.i.darius@gmail.com
              </a>
              <a href="tel:0784463810" className="text-2xl md:text-4xl block font-medium text-white/20 hover:text-white transition-colors">
                0784463810
              </a>
            </div>
          </div>
          
          <div className="flex flex-col justify-end">
            <div className="flex gap-6 mb-8">
              <a href="https://github.com/dariusrobu" target="_blank" rel="noopener noreferrer">
                <Github className="hover:text-white/60 transition-colors" />
              </a>
              <a href="https://www.linkedin.com/in/darius-robu-095997386" target="_blank" rel="noopener noreferrer">
                <Linkedin className="hover:text-white/60 transition-colors" />
              </a>
              <a href="mailto:robu.i.darius@gmail.com">
                <Mail className="hover:text-white/60 transition-colors" />
              </a>
              <a href="tel:0784463810">
                <Phone className="hover:text-white/60 transition-colors" />
              </a>
            </div>
            <p className="text-white/20 text-sm">
              &copy; 2026 Darius Robu. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
