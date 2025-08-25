import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
const ParticleText = ({
  text = "Innovating with cutting-edge technology,delivering solutions that inspire growth.",
  className = "",
  particleCount = 100,
  particleColor = "#154D71",
}) => {
  const containerRef = useRef(null);
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.className = "absolute w-1 h-1 rounded-full pointer-events-none";
      particle.style.backgroundColor = particleColor;
      particle.style.opacity = Math.random().toString();
      const x = Math.random() * container.offsetWidth;
      const y = Math.random() * container.offsetHeight;
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      container.appendChild(particle);
      particles.push(particle);
    }
    const animateParticles = () => {
      particles.forEach((particle, index) => {
        const time = Date.now() * 0.001 + index;
        const x = Math.sin(time * 0.5) * 20 + Math.cos(time * 0.3) * 30;
        const y = Math.cos(time * 0.4) * 15 + Math.sin(time * 0.6) * 25;
        particle.style.transform = `translate(${x}px, ${y}px)`;
        particle.style.opacity = (Math.sin(time * 2) * 0.5 + 0.5).toString();
      });
      requestAnimationFrame(animateParticles);
    };
    animateParticles();
    return () => {
      particles.forEach((particle) => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      });
    };
  }, [particleCount, particleColor]);
  return (
    <div ref={containerRef} className={`relative flex items-center justify-center text-center  overflow-hidden bg-yellow-400 p-20 w-full ${className}`}>
      <motion.div
        
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        className="text-2xl text-white font-bold relative z-10"
       
      >
        {text}
      </motion.div>
    </div>
  );
};
export default function QuoteSection() {
  return <ParticleText />;
}
