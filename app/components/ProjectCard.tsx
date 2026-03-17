"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Project } from "../projects";
import { cn } from "../utils";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Magnetic effect for the whole card
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const mouseX = useSpring(x, springConfig);
  const mouseY = useSpring(y, springConfig);

  // Mouse position for the glow effect
  const glowX = useMotionValue(0);
  const glowY = useMotionValue(0);
  const glowXSpring = useSpring(glowX, { damping: 20, stiffness: 100 });
  const glowYSpring = useSpring(glowY, { damping: 20, stiffness: 100 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    x.set((event.clientX - centerX) * 0.1);
    y.set((event.clientY - centerY) * 0.1);

    glowX.set(event.clientX - rect.left);
    glowY.set(event.clientY - rect.top);
  };

  return (
    <Link href={`/project/${project.id}`} className={cn("block", project.gridSpan)}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ 
          duration: 0.8, 
          delay: index * 0.1,
          ease: [0.21, 0.47, 0.32, 0.98]
        }}
        className="group relative h-full w-full overflow-hidden rounded-3xl border border-white/5 bg-[#0a0a0a] hover:border-white/20 transition-all duration-500"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          x.set(0);
          y.set(0);
        }}
        style={{
          x: mouseX,
          y: mouseY,
        }}
      >
        {/* Base Layer: Abstract Grid */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
          <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>

        {/* Dynamic Glow following mouse */}
        <motion.div
          className="absolute -inset-[100px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"
          style={{
            background: "radial-gradient(circle at var(--x) var(--y), rgba(255,255,255,0.08) 0%, transparent 40%)",
            "--x": useTransform(glowXSpring, (v) => `${v}px`) as any,
            "--y": useTransform(glowYSpring, (v) => `${v}px`) as any,
          }}
        />

        {/* Content */}
        <div className="absolute inset-0 z-30 flex flex-col justify-end p-10">
          <motion.div
            animate={{ 
              y: isHovered ? -10 : 0
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex gap-2">
                {project.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="text-[10px] uppercase tracking-widest text-white/30 border border-white/5 px-3 py-1.5 rounded-full backdrop-blur-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <motion.div 
                animate={{ rotate: isHovered ? 45 : 0, scale: isHovered ? 1.1 : 1 }}
                className="bg-white/5 text-white/40 p-3 rounded-full border border-white/10 group-hover:bg-white group-hover:text-black transition-all duration-500"
              >
                <ArrowUpRight size={20} />
              </motion.div>
            </div>
            
            <h3 className="text-4xl font-bold text-white mb-3 tracking-tighter uppercase">{project.title}</h3>
            <p className="text-white/40 text-sm max-w-[320px] leading-relaxed group-hover:text-white/70 transition-colors">
              {project.description}
            </p>
          </motion.div>
        </div>

        {/* Decorative corner element */}
        <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-30 transition-opacity z-30">
           <span className="text-[10px] font-mono uppercase tracking-[0.5em]">0{index + 1}</span>
        </div>
      </motion.div>
    </Link>
  );
}
