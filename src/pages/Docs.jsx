import React from "react";
import { ShieldCheck, Globe, Lock, Search } from "lucide-react";

const Docs = () => {
  const guides = [
    {
      title: "Phishing Detection",
      desc: "Masukkan URL untuk mendeteksi apakah sebuah situs berpotensi phishing.",
      icon: <ShieldCheck className="w-8 h-8 text-blue-400" />,
    },
    {
      title: "IP Reputation Checker",
      desc: "Cek apakah IP memiliki reputasi buruk (tercatat di blacklist).",
      icon: <Search className="w-8 h-8 text-yellow-400" />,
    },
    {
      title: "WHOIS Lookup",
      desc: "Lihat informasi registrasi domain (pemilik, registrar, tanggal).",
      icon: <Globe className="w-8 h-8 text-green-400" />,
    },
    {
      title: "SSL/TLS Checker",
      desc: "Pastikan sertifikat SSL domain valid dan tidak kadaluarsa.",
      icon: <Lock className="w-8 h-8 text-purple-400" />,
    },
  ];

  return (
    <div className="min-h-screen py-20 px-6 text-white">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-12 text-blue-400">
          Panduan Penggunaan Tools
        </h1>
        <p className="text-center text-gray-300 max-w-2xl mx-auto mb-16">
          Pelajari cara menggunakan setiap tool dalam CyberTools. Ikuti panduan
          ini untuk memaksimalkan keamanan Anda.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {guides.map((guide, index) => (
            <div
              key={index}
              className="bg-gray-800 border border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="mr-3">{guide.icon}</div>
                <h3 className="text-xl font-semibold">{guide.title}</h3>
              </div>
              <p className="text-gray-400 text-sm">{guide.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Docs;
