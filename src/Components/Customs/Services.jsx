import { Globe, Layers, ServerCog, ShieldCheck } from "lucide-react";
import React from "react";
import ServiceCard from "../Shared/ServiceCard";
import { motion } from "framer-motion";
const Services = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.4, 
      },
    },
  };

 
  const services = [
    {
      id: 1,
      icon: <Layers className="text-yellow-500" size={40} />,
      title: "Custom CMS Solutions",
      text: "Custom CMS Solutions Take full control of your digital presence with our intuitive Content Management Systems. We build user-friendly corporate websites, blogs, and portfolios that allow you to manage and update content effortlessly.",
    },
    {
      id: 2,
      icon: <Globe className="text-yellow-500" size={40} />,
      title: "Professional WordPress Websites",
      text: "Launch your business with a fast, SEO-optimized, and professionally designed WordPress site. We create powerful and visually stunning websites that are easy to manage and customized to fit your brand identity.",
    },
    {
      id: 3,
      icon: <ServerCog className="text-yellow-500" size={40} />,
      title: "Full Stack Web Applications",
      text: "Need a powerful, custom-built solution? Our full-stack development service delivers scalable, high-performance web applications with unique features tailored to your specific business requirements.",
    },
    {
      id: 4,
      icon: <ShieldCheck className="text-yellow-500" size={40} />,
      title: "Key Features & Support",
      text: "We guarantee a 100% responsive and user-friendly design, robust security, and reliable performance. To ensure your success, we also provide three months of free, dedicated support after your project is delivered.",
    },
  ];
  return (
    <>
      <section className="container mx-auto px-4 lg:px-0">
        <div className="flex flex-col items-center space-y-1.5 justify-center my-20">
          <h2 className="text-2xl md:text-4xl font-bold">Our Services</h2>
          <p className="w-1/2 text-center text-gray-600">
            From CMS and WordPress to Full Stack development, we offer tailored
            solutions to meet your business needs and strengthen your digital
            footprint.
          </p>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              text={service.text}
            ></ServiceCard>
          ))}
        </motion.div>
      </section>
    </>
  );
};

export default Services;
