"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { projects } from "../projects";

export default function Archive() {
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

      {/* Header */}
      <section className="pt-40 px-8 max-w-7xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[10px] uppercase tracking-[0.5em] text-white/40 mb-4 block">Archive</span>
          <h1 className="text-8xl md:text-[10vw] font-black tracking-tighter uppercase mb-6">Works Index</h1>
          <p className="text-white/40 max-w-lg text-lg leading-relaxed border-l border-white/10 pl-8">
            A comprehensive list of projects, systems, and digital experiments focused on innovation and architecture.
          </p>
        </motion.div>
      </section>

      {/* Typography-focused List */}
      <section className="px-8 max-w-7xl mx-auto pb-40">
        <div className="border-t border-white/10">
          {projects.map((project, index) => (
            <Link 
              key={project.id} 
              href={`/project/${project.id}`}
              className="group grid grid-cols-12 py-12 border-b border-white/5 items-center hover:bg-white/[0.01] transition-colors px-4 -mx-4"
            >
              <div className="col-span-1 hidden md:block text-white/10 font-mono text-[10px] tracking-widest">
                0{index + 1}
              </div>
              
              <div className="col-span-10 md:col-span-6">
                <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter group-hover:translate-x-4 transition-transform duration-700 ease-[0.16,1,0.3,1]">
                  {project.title}
                </h3>
              </div>

              <div className="col-span-2 md:col-span-3 hidden md:flex flex-wrap gap-2">
                {project.tags.slice(0, 2).map(tag => (
                  <span 
                    key={tag} 
                    className="text-[10px] uppercase tracking-[0.2em] text-white/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="col-span-2 md:col-span-2 text-right flex justify-end items-center">
                 <div className="bg-white/5 p-4 rounded-full group-hover:bg-white group-hover:text-black transition-all duration-500 scale-75 group-hover:scale-100">
                   <ArrowUpRight size={24} />
                 </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
