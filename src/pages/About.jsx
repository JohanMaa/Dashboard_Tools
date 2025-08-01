import React from "react";
import { Shield, GlobeLock, Code2 } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen py-20 px-6 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-blue-400 mb-6">
          Tentang CyberTools
        </h1>
        <p className="text-lg text-gray-300 mb-4">
          CyberTools adalah platform yang dirancang untuk memudahkan analisis
          keamanan siber. Dengan berbagai fitur, kami membantu Anda mengidentifikasi
          potensi ancaman, memverifikasi integritas, dan meningkatkan keamanan
          digital.
        </p>
        <p className="text-lg text-gray-300">
          Kami menyediakan tools seperti deteksi phishing, pemeriksaan reputasi IP,
          WHOIS lookup, SSL/TLS checker, hingga pencarian kerentanan CVE –
          semuanya dalam satu dashboard yang cepat dan mudah diakses.
        </p>

        {/* Highlight Features */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
          <Feature icon={<Shield className="w-10 h-10 text-blue-400" />} title="Keamanan" desc="Fokus pada analisis ancaman dan perlindungan sistem." />
          <Feature icon={<GlobeLock className="w-10 h-10 text-green-400" />} title="Akses Global" desc="Dapat digunakan kapan saja dan di mana saja secara online." />
          <Feature icon={<Code2 className="w-10 h-10 text-purple-400" />} title="Mudah Digunakan" desc="Antarmuka modern dengan pengalaman pengguna yang intuitif." />
        </div>
      </div>
    </div>
  );
};

const Feature = ({ icon, title, desc }) => (
  <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-blue-500/30 transition-all duration-300">
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-400 text-sm">{desc}</p>
  </div>
);

export default About;
