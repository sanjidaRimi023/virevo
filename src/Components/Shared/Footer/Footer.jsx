import React from "react";
import { motion } from "framer-motion";

import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
} from "lucide-react";
import logo from "../../../assets/logo-bgremove.png";
import { Link as ScrollLink } from "react-scroll"; // ✅ react-scroll import

const Footer = () => {
  const navItems = [
    { name: "Home", path: "home" },
    { name: "Services", path: "services" },
    { name: "Work", path: "work" },
    { name: "Skills", path: "skills" },
    { name: "Testimonials", path: "testimonials" },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={false}
      className="bg-gray-300"
    >
      <div className="container mx-auto px-6 lg:px-12 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About Us */}
          <div>
            <h3 className="text-xl font-bold mb-5 relative after:content-[''] after:absolute after:left-0 after:bottom-[-8px] after:w-14 after:h-[2px] after:bg-amber-500">
              About Us
            </h3>
            <ScrollLink
              to="home"
              smooth={true}
              duration={600}
              offset={-80}
              className="inline-block mb-4 cursor-pointer"
            >
              <img src={logo} alt="Virevo Logo" className="h-20" />
            </ScrollLink>
            <p className="leading-relaxed">
              We’re a team of passionate developers creating modern, scalable,
              and user-friendly web applications.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-amber-500 text-white hover:text-white transition-all duration-300"
              >
                <Facebook />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-amber-500 text-white hover:text-white transition-all duration-300"
              >
                <Twitter />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-amber-500 text-white hover:text-white transition-all duration-300"
              >
                <Linkedin />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-amber-500 text-white hover:text-white transition-all duration-300"
              >
                <Instagram />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-5 relative after:content-[''] after:absolute after:left-0 after:bottom-[-8px] after:w-14 after:h-[2px] after:bg-amber-500">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navItems.map((item, index) => (
                <li key={index}>
                  <ScrollLink
                    to={item.path}
                    smooth={true}
                    duration={600}
                    offset={-80}
                    spy={true}
                    className="flex items-center hover:text-amber-500 hover:translate-x-2 transition-all duration-300 cursor-pointer"
                  >
                    <ChevronRight className="mr-2 text-amber-500" /> {item.name}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Keep in Touch */}
          <div>
            <h3 className="text-xl font-bold mb-5 relative after:content-[''] after:absolute after:left-0 after:bottom-[-8px] after:w-14 after:h-[2px] after:bg-amber-500">
              Keep in Touch
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <MapPin className="text-amber-500 mt-1 mr-3 flex-shrink-0" />
                <span>Rangpur, Bangladesh</span>
              </li>
              <li className="flex items-center">
                <Phone className="text-amber-500 mt-1 mr-3 flex-shrink-0" />
                <a
                  href="tel:+8801942084201"
                  className="hover:text-amber-500 transition-colors duration-300"
                >
                  +880 194 208 4201
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="text-amber-500 mt-1 mr-3 flex-shrink-0" />
                <a
                  href="mailto:virevo23@gmail.com"
                  className="hover:text-amber-500 transition-colors duration-300"
                >
                  virevo23@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-5 relative after:content-[''] after:absolute after:left-0 after:bottom-[-8px] after:w-14 after:h-[2px] after:bg-amber-500">
              Newsletter
            </h3>
            <p className="mb-4">Subscribe to get updates and latest news.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-l-lg border border-amber-500  focus:outline-none"
              />
              <button className="bg-amber-500 text-white px-4 rounded-r-lg hover:bg-amber-600 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-black/80 py-4 border-t border-gray-700">
        <div className="container mx-auto px-6 lg:px-12 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Virevo. All Rights Reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
