"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { projects } from "../../projects";
import { cn } from "../../utils";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="h-screen flex items-center justify-center bg-[#050505] text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link href="/" className="text-white/60 hover:text-white transition-colors">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-hidden">
      {/* Back Button */}
      <nav className="fixed top-0 w-full z-50 px-8 py-10 pointer-events-none">
        <Link 
          href="/" 
          className="group flex items-center gap-2 text-sm font-medium hover:opacity-100 transition-opacity pointer-events-auto w-fit"
        >
          <div className="bg-white/10 p-2 rounded-full group-hover:bg-white group-hover:text-black transition-all">
            <ArrowLeft size={18} />
          </div>
          <span className="opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0">BACK TO HOME</span>
        </Link>
      </nav>

      {/* Hero Header Section */}
      <section className="relative pt-60 pb-20 px-8 max-w-7xl mx-auto">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-[120px] -z-10" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex gap-2 mb-10"
        >
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="text-xs uppercase tracking-[0.2em] text-white/40 border border-white/10 px-4 py-2 rounded-full"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-8xl md:text-[12vw] font-black tracking-tighter uppercase leading-[0.8] mb-12"
        >
          {project.title}
        </motion.h1>

        {/* Action Links */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap gap-6 items-center mb-24"
        >
           {project.links.live && (
              <a 
                href={project.links.live} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-black px-10 py-5 rounded-full flex items-center gap-3 font-bold hover:scale-105 transition-transform"
              >
                Launch Project <ExternalLink size={20} />
              </a>
            )}
            {project.links.github && (
              <a 
                href={project.links.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="border border-white/10 px-10 py-5 rounded-full flex items-center gap-3 font-bold hover:bg-white hover:text-black transition-all"
              >
                Source Code <Github size={20} />
              </a>
            )}
        </motion.div>

        {/* Hero Image or Logo - ONLY HERE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className={cn(
            "relative rounded-3xl overflow-hidden border border-white/10 bg-white/[0.01] group",
            project.id === "lora" || project.id === "devr" || project.id === "web-dev" || project.id === "i-lab" ? "h-[250px] md:h-[350px]" : "aspect-video"
          )}
        >
          {project.id === "lora" ? (
            <div className="absolute inset-0">
              {/* Lora's AI Dashboard */}
              <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:30px_30px]" />
              <motion.div 
                animate={{ top: ["0%", "100%", "0%"] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-10"
              />
              <div className="absolute bottom-10 left-10 hidden md:flex flex-col gap-2 opacity-20 font-mono text-[10px] uppercase tracking-widest">
                <div className="flex gap-4"><span>STATUS:</span> <span className="text-white">ACTIVE</span></div>
                <div className="flex gap-4"><span>LATENCY:</span> <span className="text-white">12MS</span></div>
                <div className="flex gap-4"><span>NEURAL_LINK:</span> <span className="text-white">ESTABLISHED</span></div>
              </div>
              <div className="absolute top-8 right-8 md:top-12 md:right-12">
                <div className="relative w-16 h-16 md:w-24 md:h-24 rounded-full border border-white/20 flex items-center justify-center bg-black shadow-[0_0_30px_rgba(255,255,255,0.02)] group-hover:border-white/40 transition-colors duration-700">
                  <span className="text-3xl md:text-4xl font-black tracking-tighter">L</span>
                  <div className="absolute -inset-2 rounded-full border border-white/5 animate-[pulse_4s_ease-in-out_infinite]" />
                </div>
              </div>
            </div>
          ) : project.id === "devr" ? (
            <div className="absolute inset-0 bg-black flex flex-col items-center justify-center overflow-hidden">
               {/* Code Editor Style Background */}
               <div className="absolute top-0 left-0 w-full h-8 bg-white/5 flex items-center px-4 gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-red-500/50" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                  <div className="w-2 h-2 rounded-full bg-green-500/50" />
                  <span className="ml-4 text-[10px] font-mono text-white/20">agency.config.ts</span>
               </div>
               
               <div className="font-mono text-[10px] md:text-sm text-white/10 leading-relaxed max-w-lg">
                  <p>{"{"}</p>
                  <p className="pl-4">"agency": "{project.title}",</p>
                  <p className="pl-4">"stack": ["React", "Next.js", "Firebase"],</p>
                  <p className="pl-4">"tools": ["Management", "Collaboration"],</p>
                  <p className="pl-4">"status": "ready_for_deploy"</p>
                  <p>{"}"}</p>
               </div>

               {/* Center Logo/Label */}
               <div className="absolute bottom-10 right-10 text-[10px] font-mono uppercase tracking-[0.5em] text-white/20">
                  DEV_MODE: ACTIVE
               </div>
            </div>
          ) : project.id === "web-dev" ? (
             <div className="absolute inset-0 bg-[#050505] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[size:20px_20px]" />
                <motion.div
                   animate={{ 
                     rotateY: [0, 360],
                     scale: [1, 1.1, 1]
                   }}
                   transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                   className="relative w-32 h-32 md:w-48 md:h-48 border border-white/10 rounded-2xl flex items-center justify-center bg-white/[0.02] backdrop-blur-3xl shadow-[0_0_100px_rgba(255,255,255,0.05)]"
                >
                   <span className="text-6xl md:text-8xl font-black italic tracking-tighter">W</span>
                </motion.div>
                
                {/* Decorative floating particles */}
                <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white/40 rounded-full animate-ping" />
                <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-white/20 rounded-full animate-pulse" />
             </div>
          ) : project.id === "i-lab" ? (
             <div className="absolute inset-0 bg-[#050505] flex flex-col items-center justify-center p-12 overflow-hidden">
                {/* Subtle Chart/Growth background */}
                <div className="absolute bottom-0 left-0 w-full h-1/2 opacity-10">
                   <svg width="100%" height="100%" viewBox="0 0 1000 200" preserveAspectRatio="none">
                      <motion.path 
                        d="M0 200 L100 150 L250 170 L400 80 L600 120 L800 20 L1000 50 L1000 200 Z" 
                        fill="rgba(255,255,255,0.1)"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2 }}
                      />
                   </svg>
                </div>

                <div className="relative z-20 flex flex-col items-center gap-6">
                   <div className="w-24 h-24 md:w-32 md:h-32 border-2 border-white/10 rounded-full flex items-center justify-center bg-black shadow-2xl">
                      <span className="text-4xl md:text-5xl font-black italic">iL</span>
                   </div>
                   <div className="text-center">
                      <h4 className="text-[10px] uppercase tracking-[0.5em] text-white/40 mb-2">Venture Incubation</h4>
                      <p className="text-xs font-mono text-white/20">UBB | FSEGA Residency</p>
                   </div>
                </div>

                {/* Achievement Badge */}
                <div className="absolute top-10 right-10 flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
                   <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                   <span className="text-[8px] font-bold uppercase tracking-widest opacity-60">High-Level Mentorship Established</span>
                </div>
             </div>
          ) : project.id === "chorus" ? (
             <div className="absolute inset-0 bg-[#050505] flex items-center justify-center overflow-hidden">
                <div className="flex items-center gap-1 md:gap-2">
                   {[...Array(12)].map((_, i) => (
                      <motion.div
                         key={i}
                         animate={{ height: [20, 100, 20], opacity: [0.1, 0.3, 0.1] }}
                         transition={{ duration: 1.5 + i * 0.1, repeat: Infinity, ease: "easeInOut" }}
                         className="w-1 md:w-2 bg-white rounded-full"
                      />
                   ))}
                </div>
                <div className="absolute bottom-10 text-[10px] font-mono uppercase tracking-[0.5em] text-white/20">AI Persona Spectrum</div>
             </div>
          ) : project.id === "classlly" ? (
             <div className="absolute inset-0 bg-[#050505] flex flex-col items-center justify-center overflow-hidden">
                <div className="w-full max-w-md h-1/2 border border-white/5 rounded-t-2xl bg-white/[0.01] p-8">
                   <div className="space-y-4 opacity-10">
                      <div className="h-2 w-3/4 bg-white rounded-full" />
                      <div className="h-2 w-1/2 bg-white rounded-full" />
                      <div className="h-2 w-full bg-white rounded-full" />
                   </div>
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 w-20 h-20 md:w-24 md:h-24 border-4 border-white/10 rounded-2xl flex items-center justify-center bg-black rotate-12">
                   <span className="text-4xl font-black italic">C</span>
                </div>
                <div className="absolute bottom-10 text-[10px] font-mono uppercase tracking-[0.5em] text-white/20">Academic Ecosystem</div>
             </div>
          ) : project.id === "sesiune" ? (
             <div className="absolute inset-0 bg-[#050505] flex flex-col items-center justify-center p-12">
                <div className="w-full max-w-sm border border-white/10 rounded-xl p-6 bg-white/[0.02]">
                   <div className="flex justify-between items-center mb-6">
                      <span className="text-[8px] font-mono text-white/40">IMPORTING_SCHEDULE...</span>
                      <span className="text-[8px] font-mono text-green-500/60">AI_ACTIVE</span>
                   </div>
                   <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="h-1 bg-white/20 rounded-full"
                   />
                </div>
                <div className="mt-8 text-center">
                   <span className="text-[10px] font-mono uppercase tracking-[0.5em] text-white/20 block mb-2">FSEGA OS</span>
                   <span className="text-[8px] font-mono text-white/10 uppercase">Local Optimization Engine</span>
                </div>
             </div>
          ) : project.id === "lancepilot" ? (
             <div className="absolute inset-0 bg-[#050505] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_center,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />
                <motion.div
                   animate={{ rotate: 360 }}
                   transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                   className="w-48 h-48 md:w-64 md:h-64 border border-white/5 rounded-full flex items-center justify-center"
                >
                   <div className="w-[1px] h-1/2 bg-gradient-to-t from-white/20 to-transparent origin-bottom" />
                </motion.div>
                <div className="absolute flex flex-col items-center">
                   <span className="text-4xl md:text-6xl font-black opacity-20">LP</span>
                   <span className="text-[8px] font-mono uppercase tracking-[1em] text-white/10 mt-4">Strategic Pathfinding</span>
                </div>
             </div>
          ) : project.id === "hapback" ? (
             <div className="absolute inset-0 bg-[#050505] flex items-center justify-center overflow-hidden">
                <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full border-[20px] md:border-[30px] border-white/[0.03] flex items-center justify-center">
                   <motion.div 
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/10 bg-white/[0.05]" 
                   />
                   <div className="absolute top-4 text-[8px] font-mono text-white/20">MENU</div>
                   <div className="absolute bottom-4 text-[8px] font-mono text-white/20">PLAY</div>
                </div>
                <div className="absolute bottom-10 text-[10px] font-mono uppercase tracking-[0.5em] text-white/20">Nostalgia Engine</div>
             </div>
          ) : project.id === "campaign-genai" ? (
             <div className="absolute inset-0 bg-[#050505] flex items-center justify-center overflow-hidden">
                <div className="grid grid-cols-3 gap-4">
                   {[...Array(6)].map((_, i) => (
                      <motion.div
                         key={i}
                         initial={{ opacity: 0, y: 20 }}
                         animate={{ opacity: 0.1, y: 0 }}
                         transition={{ delay: i * 0.2, duration: 1, repeat: Infinity, repeatType: "reverse" }}
                         className="w-16 h-20 md:w-24 md:h-32 border border-white/10 rounded-lg bg-white/[0.02]"
                      />
                   ))}
                </div>
                <div className="absolute bottom-10 text-[10px] font-mono uppercase tracking-[0.5em] text-white/20">Content Matrix Gen</div>
             </div>
          ) : (
             <div className="absolute inset-0 bg-[#050505] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:50px_50px]" />
                
                {/* Abstract Animated Aura */}
                <motion.div
                   animate={{ 
                     scale: [1, 1.2, 1],
                     rotate: [0, 90, 0],
                     opacity: [0.05, 0.1, 0.05]
                   }}
                   transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                   className="w-[500px] h-[500px] bg-white rounded-full blur-[100px]"
                />

                <div className="relative z-10 flex flex-col items-center">
                   <div className="w-20 h-20 md:w-32 md:h-32 border border-white/10 rounded-3xl flex items-center justify-center bg-white/[0.02] backdrop-blur-xl mb-6">
                      <span className="text-4xl md:text-6xl font-black opacity-40 italic">{project.title.charAt(0)}</span>
                   </div>
                   <span className="text-[10px] uppercase tracking-[1em] text-white/20 font-mono">Product Mindset Concept</span>
                </div>
             </div>
          )}
        </motion.div>
      </section>

      {/* Details Grid */}
      <section className="py-32 px-8 max-w-7xl mx-auto border-t border-white/10 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-20">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-8"
          >
            <h2 className="text-sm uppercase tracking-[0.5em] text-white/30 mb-10">Brief</h2>
            <p className="text-3xl md:text-5xl font-light leading-tight text-white/80">
              {project.longDescription}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-4"
          >
            <div className="space-y-12">
              <div>
                <h3 className="text-[10px] uppercase tracking-[0.5em] text-white/30 mb-6">Stack</h3>
                <ul className="space-y-3">
                  {project.technologies.map((tech) => (
                    <li key={tech} className="text-xl font-medium">{tech}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-[10px] uppercase tracking-[0.5em] text-white/30 mb-4">Focus</h3>
                <p className="text-white/60 text-lg">
                  {project.focus}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Next Project Nav */}
      <section className="py-60 px-8 text-center border-t border-white/5 bg-gradient-to-b from-transparent to-white/[0.02]">
        <span className="text-[10px] uppercase tracking-[0.5em] text-white/30 mb-8 block">Next Masterpiece</span>
        <Link 
          href={`/project/${projects[(projects.indexOf(project) + 1) % projects.length].id}`}
          className="text-7xl md:text-[10vw] font-black tracking-tighter uppercase hover:opacity-20 transition-opacity duration-700 leading-none"
        >
          {projects[(projects.indexOf(project) + 1) % projects.length].title}
        </Link>
      </section>
    </main>
  );
}
