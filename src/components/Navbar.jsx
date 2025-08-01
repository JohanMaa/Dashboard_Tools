import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShieldCheck, Menu, X } from "lucide-react";

const Navbar = ({ scrollToSection, refs }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isToolPage = location.pathname.startsWith('/tools/');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = isToolPage
    ? [
        { name: "Home", to: "/" },
        { name: "Tools", isActive: true },
        { name: "About", to: "/#about" },
        { name: "Contact", to: "/#contact" },
      ]
    : [
        { name: "Home", ref: refs.homeRef },
        { name: "Tools", ref: refs.toolsRef },
        { name: "About", ref: refs.aboutRef },
        { name: "Contact", ref: refs.contactRef },
      ];

  const handleNavClick = (ref, to) => {
    if (ref) {
      scrollToSection(ref);
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-slate-900/95 backdrop-blur-sm shadow-xl" : "bg-slate-900/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center text-2xl font-bold text-blue-400"
        >
          <ShieldCheck className="w-7 h-7 mr-2 text-blue-400" />
          CyberTools
        </Link>
        <div className="hidden md:flex space-x-8">
          {menuItems.map((item) =>
            item.isActive ? (
              <span
                key={item.name}
                className="text-blue-400 font-medium"
              >
                {item.name}
              </span>
            ) : item.to ? (
              <Link
                key={item.name}
                to={item.to}
                className="relative text-gray-400 hover:text-blue-400 font-medium transition duration-300"
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ) : (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.ref)}
                className="relative text-gray-400 hover:text-blue-400 font-medium transition duration-300"
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
            )
          )}
        </div>
        <button
          className="md:hidden text-gray-400"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-sm shadow-xl">
          {menuItems.map((item) =>
            item.isActive ? (
              <span
                key={item.name}
                className="block w-full text-left px-6 py-3 text-blue-400 font-medium"
              >
                {item.name}
              </span>
            ) : item.to ? (
              <Link
                key={item.name}
                to={item.to}
                className="block w-full text-left px-6 py-3 text-gray-400 hover:bg-slate-800/50"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ) : (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.ref)}
                className="block w-full text-left px-6 py-3 text-gray-400 hover:bg-slate-800/50"
              >
                {item.name}
              </button>
            )
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;