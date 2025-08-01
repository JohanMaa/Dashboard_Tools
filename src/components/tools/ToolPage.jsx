import React, { useState, lazy, Suspense } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { tools, privacyContent } from '../../data/toolData';

// Lazy load komponen tool
const PhishingChecker = lazy(() => import('../tools/PhishingChecker'));
const EmailHeaderAnalyzer = lazy(() => import('../tools/EmailHeaderAnalyzer'));
const IPChecker = lazy(() => import('../tools/IPChecker'));
const CVESearch = lazy(() => import('../tools/CVESearch'));
const WhoisLookup = lazy(() => import('../tools/WhoisLookup'));
const DNSLookup = lazy(() => import('../tools/DNSLookup'));
const SSLCertificateChecker = lazy(() => import('../tools/SSLCertificateChecker'));
const TracerouteTool = lazy(() => import('../tools/TracerouteTool'));
const PortScanner = lazy(() => import('../tools/PortScanner'));
const FileHashChecker = lazy(() => import('../tools/FileHashChecker'));

// Mapping string komponen ke komponen sebenarnya
const componentMap = {
  PhishingChecker,
  EmailHeaderAnalyzer,
  IPChecker,
  CVESearch,
  WhoisLookup,
  DNSLookup,
  SSLCertificateChecker,
  TracerouteTool,
  PortScanner,
  FileHashChecker,
};

const ToolPage = ({ scrollToSection, refs }) => {
  const { toolId } = useParams();
  const tool = tools[toolId];
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!tool) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen flex items-center justify-center p-6"
      >
        <div className="max-w-4xl mx-auto text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 shadow-xl">
          <h1 className="text-3xl font-bold mb-4 text-blue-400">Tool Tidak Ditemukan</h1>
          <p className="mb-4 text-gray-400">Tool yang Anda cari tidak tersedia.</p>
          <Link to="/" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition duration-300">
            Kembali ke Beranda
          </Link>
        </div>
      </motion.div>
    );
  }

  const ToolComponent = componentMap[tool.component];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      {/* Breadcrumb Navigasi */}
      <div className="max-w-4xl mx-auto px-6 pt-6">
        <div className="text-sm text-gray-400 mb-4">
          <Link to="/" className="hover:text-blue-400">&larr; Kembali ke Beranda</Link>
        </div>
      </div>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center py-16 px-6"
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-extrabold mb-4 text-blue-400">{tool.name}</h1>
          <p className="text-lg text-gray-400">{tool.description}</p>
        </div>
      </motion.section>

      {/* Tool Section */}
      <motion.section
        ref={refs.toolRef}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-6 py-12"
      >
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 shadow-xl">
          <h2 className="text-2xl font-bold mb-4 text-blue-400">
            Gunakan {tool.name}
          </h2>
          <p className="text-sm text-gray-400 mb-4">{tool.subtitle}</p>
          <Suspense fallback={<div className="text-gray-400">Memuat tool...</div>}>
            <ToolComponent />
          </Suspense>
        </div>
      </motion.section>

      {/* Informasi Section (Pengertian, Kegunaan, Cara Kerja) */}
      <motion.section
        ref={refs.guideRef}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-6 py-12"
      >
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 shadow-xl">
          <h2 className="text-2xl font-bold mb-4 text-blue-400">
            Informasi {tool.name}
          </h2>
          {/* Pengertian */}
          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-2">
              Apa itu {tool.name}?
            </h3>
            <p className="text-gray-400">{tool.definition}</p>
          </div>
          <hr className="border-t border-blue-800 my-6" />
          {/* Kegunaan */}
          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-2">
              Kegunaan
            </h3>
            <ul className="list-disc list-inside text-gray-400">
              {tool.usage.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <hr className="border-t border-blue-800 my-6" />
          {/* Cara Kerja */}
          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-2">
              Cara Kerja
            </h3>
            <ul className="list-disc list-inside text-gray-400">
              {tool.howItWorks.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Privacy Policy Modal */}
      {/* <motion.section
        ref={refs.privacyRef}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-6 py-12"
      >
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 shadow-xl">
          <h2 className="text-2xl font-bold mb-4 text-blue-400">
            Kebijakan Privasi
          </h2>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition duration-300"
          >
            Lihat Kebijakan Privasi
          </button>
          {isModalOpen && (
            <div className="modal-overlay">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="modal-content"
              >
                <h2 className="text-2xl font-bold mb-4 text-blue-400">
                  Kebijakan Privasi
                </h2>
                <p className="text-gray-400 whitespace-pre-line">{privacyContent}</p>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition duration-300"
                >
                  Tutup
                </button>
              </motion.div>
            </div>
          )}
        </div>
      </motion.section> */}
    </motion.div>
  );
};

export default ToolPage;