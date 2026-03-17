"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === "pointer" ||
        target.tagName.toLowerCase() === "button" ||
        target.tagName.toLowerCase() === "a" ||
        target.closest(".group") !== null
      );
    };

    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border border-white z-[9999] pointer-events-none mix-blend-difference"
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
        x: "-50%",
        y: "-50%",
      }}
      animate={{
        scale: isPointer ? 2.5 : 1,
        backgroundColor: isPointer ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0)",
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    />
  );
}
