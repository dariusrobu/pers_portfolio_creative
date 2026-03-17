"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Diploma } from "../diplomas";

interface DiplomaCardProps {
  diploma: Diploma;
  index: number;
}

export default function DiplomaCard({ diploma, index }: DiplomaCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/5 bg-[#0a0a0a] hover:border-white/20 transition-all duration-500"
    >
      {/* Background/Image Layer */}
      <div className="absolute inset-0 z-0 h-full w-full p-4 grayscale transition-all duration-700 opacity-40 group-hover:opacity-100">
        <div className="relative h-full w-full">
          <Image
            src={diploma.imageUrl}
            alt={diploma.title}
            fill
            className="object-contain shadow-2xl"
          />
        </div>
      </div>
      
      {/* Subtle Overlay for Text Readability */}
      <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity">
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-1">{diploma.issuer}</span>
        <h3 className="text-lg font-bold text-white leading-tight">{diploma.title}</h3>
        <p className="text-white/40 text-[10px] font-medium uppercase tracking-widest mt-1">{diploma.year}</p>
      </div>
    </motion.div>
  );
}
