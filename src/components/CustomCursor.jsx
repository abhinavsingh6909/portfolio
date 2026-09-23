import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor({ cursorText = "" }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const cursorX = useSpring(0, { stiffness: 450, damping: 30, mass: 0.5 });
  const cursorY = useSpring(0, { stiffness: 450, damping: 30, mass: 0.5 });

  useEffect(() => {
    // Check if device supports touch
    if (window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.closest("button") ||
        target.closest("a") ||
        target.closest("[data-cursor-interactive]")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [cursorX, cursorY, isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: cursorText ? 2.8 : isHovered ? 1.6 : 1,
          opacity: 1,
        }}
        transition={{ duration: 0.18, ease: "easeOut" }}
        className={`flex items-center justify-center rounded-full border transition-colors ${
          cursorText
            ? "h-14 w-14 bg-white text-black font-mono font-bold text-[10px] tracking-widest border-white/20 shadow-2xl backdrop-blur-sm"
            : isHovered
            ? "h-9 w-9 bg-white/10 border-white/40 backdrop-blur-[2px]"
            : "h-3.5 w-3.5 bg-white/90 border-white/20"
        }`}
      >
        {cursorText && <span className="uppercase">{cursorText}</span>}
      </motion.div>
    </div>
  );
}
