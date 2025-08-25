import React from "react";
import { motion } from "framer-motion";
const ServiceCard = ({ icon, title, text }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <>
      <motion.div
        variants={cardVariants}
        className="relative group p-6 border border-gray-200 shadow-sm transition-shadow duration-300 flex flex-col items-center mb-10"
      >
        <div
          className="absolute top-[-8px] right-[-8px] w-26 h-26 border-t-[5px] border-r-[5px] border-yellow-500 
                     opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-in-out"
        ></div>

        <div
          className="absolute bottom-[-8px] left-[-8px] w-26 h-26 border-b-[5px] border-l-[5px] border-yellow-500 
                     opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-in-out"
        ></div>

       <span className="transition-transform duration-500 group-hover:rotate-[360deg]"> {icon}</span>
        <h2 className="text-lg font-bold text-center">{title}</h2>
        <p className="text-sm text-center">{text}</p>
      </motion.div>
    </>
  );
};

export default ServiceCard;
