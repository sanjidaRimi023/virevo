import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X } from "lucide-react"; // Hamburger & close icon
import logo from "../../../assets/logo-bgremove.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "home" },
    { name: "Services", path: "services" },
    { name: "Work", path: "work" },
    { name: "Skills", path: "skills" },
    { name: "Testimonials", path: "testimonials" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <div>
          <img src={logo} alt="virevo logo" className="w-20" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 uppercase cursor-pointer">
          {navItems.map((item, idx) => (
            <li key={idx}>
              <ScrollLink
                to={item.path}
                spy={true}
                smooth={true}
                offset={-80}
                duration={600}
                activeClass="text-yellow-500"
                className={`${
                  scrolled ? "text-black" : "text-white"
                } hover:text-yellow-500 transition-colors duration-300`}
              >
                {item.name}
              </ScrollLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-black"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col gap-4 uppercase p-6">
            {navItems.map((item, idx) => (
              <li key={idx}>
                <ScrollLink
                  to={item.path}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={600}
                  onClick={() => setMobileOpen(false)}
                  activeClass="text-yellow-500"
                  className="text-black hover:text-yellow-500 transition-colors duration-300 cursor-pointer"
                >
                  {item.name}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
