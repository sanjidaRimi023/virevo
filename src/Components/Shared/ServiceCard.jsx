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
        className="glowing-card p-6 border border-gray-200 shadow-sm hover:shadow-lg hover:shadow-yellow-500 transition-shadow duration-300 flex flex-col items-center mb-10"
      >
        <span> {icon}</span>
        <h2 className="text-lg font-bold text-center">{title}</h2>
        <p className="text-sm text-center">{text}</p>
      </motion.div>
    </>
  );
};

export default ServiceCard;
