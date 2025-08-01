import React from "react";
import { Shield, Github, Mail } from "lucide-react";

const Footer = ({ scrollToSection, refs }) => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <Shield className="w-5 h-5 text-blue-400" />
          <span className="font-bold text-white">CyberTools</span>
        </div>

        {/* Center: Links */}
        <div className="space-x-6 text-sm">
          <button
            onClick={() => scrollToSection(refs.homeRef)}
            className="hover:text-white transition"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection(refs.toolsRef)}
            className="hover:text-white transition"
          >
            Tools
          </button>
          <button
            onClick={() => scrollToSection(refs.aboutRef)}
            className="hover:text-white transition"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection(refs.contactRef)}
            className="hover:text-white transition"
          >
            Contact
          </button>
        </div>

        {/* Right: Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://github.com/your-repo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <Github className="w-5 h-5" />
          </a>
          <a href="mailto:youremail@example.com" className="hover:text-white">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>

      <div className="mt-6 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} CyberTools. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
