import React from 'react';
import { ShieldCheck, Search, Globe, FileSearch, Lock, Zap } from 'lucide-react';

const Home = ({ scrollToSection, refs }) => {
  return (
    <div className="min-h-screen text-white">
      {/* Hero Section */}
      <section className="text-center py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            <span className="text-blue-400">CyberTools</span> – Platform Analisis
            <br className="hidden sm:block" />
            Keamanan Siber All-in-One
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
            Deteksi phishing, analisis domain, cek reputasi IP, periksa SSL, hash
            file, dan temukan kerentanan software dalam satu dashboard cepat &
            aman.
          </p>
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => scrollToSection(refs.toolsRef)}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium shadow-lg hover:bg-blue-500 hover:shadow-xl transition-all duration-300"
            >
              Mulai Gunakan Tools
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Apa yang Bisa Kamu Lakukan?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<ShieldCheck className="w-12 h-12 text-blue-400" />}
            title="Deteksi Ancaman"
            desc="Analisis phishing, reputasi IP, dan pantauan potensi serangan dengan cepat."
          />
          <FeatureCard
            icon={<Globe className="w-12 h-12 text-green-400" />}
            title="Analisis Domain"
            desc="Dapatkan WHOIS, DNS records, traceroute, dan status SSL/TLS domain."
          />
          <FeatureCard
            icon={<FileSearch className="w-12 h-12 text-purple-400" />}
            title="Pemeriksaan File"
            desc="Hitung hash file (MD5, SHA256) untuk verifikasi integritas & keamanan."
          />
          <FeatureCard
            icon={<Search className="w-12 h-12 text-orange-400" />}
            title="CVE Database"
            desc="Cari kerentanan software terbaru beserta rekomendasi patch keamanan."
          />
          <FeatureCard
            icon={<Lock className="w-12 h-12 text-pink-400" />}
            title="SSL/TLS Checker"
            desc="Pastikan koneksi aman dengan memvalidasi sertifikat SSL domain."
          />
          <FeatureCard
            icon={<Zap className="w-12 h-12 text-yellow-400" />}
            title="Cepat & Efisien"
            desc="Semua tools dioptimalkan untuk kecepatan tanpa mengorbankan akurasi."
          />
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, desc }) => (
  <div className="bg-black bg-opacity-50 rounded-xl shadow-lg p-8 text-center hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-700">
    <div className="flex justify-center mb-4">{icon}</div>
    <h4 className="text-xl font-semibold mb-2">{title}</h4>
    <p className="text-gray-400 text-sm">{desc}</p>
  </div>
);

export default Home;