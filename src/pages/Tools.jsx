import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const tools = [
  {
    id: "phishing-checker",
    name: "Phishing Checker",
    image: "https://via.placeholder.com/240x120?text=Phishing+Checker",
  },
  {
    id: "email-header-analyzer",
    name: "Email Header Analyzer",
    image: "https://via.placeholder.com/240x120?text=Email+Header",
  },
  {
    id: "ip-checker",
    name: "IP Checker",
    image: "https://via.placeholder.com/240x120?text=IP+Checker",
  },
  {
    id: "cve-search",
    name: "CVE Search",
    image: "https://via.placeholder.com/240x120?text=CVE+Search",
  },
  {
    id: "whois-lookup",
    name: "WHOIS Lookup",
    image: "https://via.placeholder.com/240x120?text=WHOIS+Lookup",
  },
  {
    id: "dns-lookup",
    name: "DNS Lookup",
    image: "https://via.placeholder.com/240x120?text=DNS+Lookup",
  },
  {
    id: "ssl-certificate-checker",
    name: "SSL Certificate Checker",
    image: "https://via.placeholder.com/240x120?text=SSL+Checker",
  },
  {
    id: "traceroute-tool",
    name: "Traceroute Tool",
    image: "https://via.placeholder.com/240x120?text=Traceroute",
  },
  {
    id: "port-scanner",
    name: "Port Scanner",
    image: "https://via.placeholder.com/240x120?text=Port+Scanner",
  },
  {
    id: "file-hash-checker",
    name: "File Hash Checker",
    image: "https://via.placeholder.com/240x120?text=File+Hash",
  },
];

const Tools = () => {
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);
  const [isRow1Paused, setIsRow1Paused] = useState(false);
  const [isRow2Paused, setIsRow2Paused] = useState(false);

  useEffect(() => {
    const row1 = row1Ref.current;
    const row2 = row2Ref.current;
    if (!row1 || !row2) return;

    const speed = 2;
    let animationFrame1, animationFrame2;

    const scrollRow1 = () => {
      if (!isRow1Paused) {
        row1.scrollLeft += speed;
        if (row1.scrollLeft >= row1.scrollWidth / 2) row1.scrollLeft = 0;
      }
      animationFrame1 = requestAnimationFrame(scrollRow1);
    };

    const scrollRow2 = () => {
      if (!isRow2Paused) {
        row2.scrollLeft -= speed;
        if (row2.scrollLeft <= 0) row2.scrollLeft = row2.scrollWidth / 2;
      }
      animationFrame2 = requestAnimationFrame(scrollRow2);
    };

    animationFrame1 = requestAnimationFrame(scrollRow1);
    animationFrame2 = requestAnimationFrame(scrollRow2);

    return () => {
      cancelAnimationFrame(animationFrame1);
      cancelAnimationFrame(animationFrame2);
    };
  }, [isRow1Paused, isRow2Paused]);

  const row1Tools = tools.slice(0, 5);
  const row2Tools = tools.slice(5);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen text-white py-16 px-6 select-none"
    >
      <h1 className="text-4xl font-extrabold text-center mb-6 text-blue-400">
        Cybersecurity Tools
      </h1>
      <p className="text-center max-w-2xl mx-auto text-gray-400 mb-12">
        Pilih tool yang kamu butuhkan. Setiap tool memiliki halaman khusus untuk
        analisis yang lebih lengkap.
      </p>

      <div className="max-w-7xl mx-auto">
        {/* Row 1 */}
        <div
          ref={row1Ref}
          className="scroll-container"
          onMouseEnter={() => setIsRow1Paused(true)}
          onMouseLeave={() => setIsRow1Paused(false)}
        >
          {[...row1Tools, ...row1Tools].map((tool, index) => (
            <ToolCard key={`row1-${index}`} tool={tool} />
          ))}
        </div>

        {/* Row 2 */}
        <div
          ref={row2Ref}
          className="scroll-container mt-8"
          onMouseEnter={() => setIsRow2Paused(true)}
          onMouseLeave={() => setIsRow2Paused(false)}
        >
          {[...row2Tools, ...row2Tools].map((tool, index) => (
            <ToolCard key={`row2-${index}`} tool={tool} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ToolCard = ({ tool }) => (
  <div className="tool-card">
    <img
      src={tool.image}
      alt={tool.name}
      className="tool-image"
    />
    <h3 className="text-lg font-semibold text-white mb-2">{tool.name}</h3>
    <Link
      to={`/tools/${tool.id}`}
      className="block text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
    >
      Lihat Tool
    </Link>
  </div>
);

export default Tools;