import React from "react";
import { Line } from "rc-progress";
import { motion } from "framer-motion";


const SkillBar = ({ name, percent, color }) => (
  <div className="mb-6 overflow-hidden">

    <div className="flex justify-between mb-2 font-bold text-gray-700">
      <span>{name}</span>
      <span>{percent}%</span>
    </div>
  
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: `${percent}%` }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      <Line
        percent={percent}
        strokeWidth={1.5}
        strokeColor={color}
        trailWidth={1.5}
        strokeLinecap="round"
      />
    </motion.div>
  </div>
);

const Skills = () => {
  return (
    <section className="overflow-hidden py-12 bg-gray-200 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left side text */}
        <motion.div
          className="md:w-1/2"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl font-bold mb-4">
            Our Skills and Expertise
          </h1>
          <p className="text-gray-600">
            We specialize in creating modern, secure, and user-friendly websites tailored to your business needs. Our team works on every project with their utmost skill and creativity, giving your brand a new identity in the digital world.
          </p>
        </motion.div>

        {/* Right side skill bars */}
        <motion.div
          className="md:w-1/2"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <SkillBar name="Full Stack Development" percent={99} color="#fdb813" />
          <SkillBar name="WordPress & CMS" percent={90} color="#fdb813" />
          <SkillBar name="UI/UX & Responsive Design" percent={95} color="#fdb813" />
          <SkillBar name="SEO & Performance" percent={85} color="#fdb813" />
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
