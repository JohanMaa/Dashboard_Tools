import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen py-20 px-6 text-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-blue-400 mb-6">
          Kebijakan Privasi & Disclaimer
        </h1>
        <p className="text-gray-300 mb-4 leading-relaxed">
          Kami menghargai privasi Anda. Website ini tidak menyimpan data pribadi
          dari tools yang digunakan. Setiap input hanya diproses secara sementara
          untuk menghasilkan output, tanpa penyimpanan jangka panjang.
        </p>

        <h2 className="text-2xl font-semibold text-purple-400 mt-8 mb-3">
          Disclaimer
        </h2>
        <p className="text-gray-300 leading-relaxed">
          Tools ini disediakan hanya untuk tujuan edukasi dan pengujian legal.
          Kami tidak bertanggung jawab atas penyalahgunaan atau kerugian yang
          timbul akibat penggunaan tools ini.
        </p>

        <div className="mt-10 bg-gray-800 border border-gray-700 p-6 rounded-xl shadow-lg">
          <p className="text-gray-400 text-sm">
            ⚠️ <span className="text-white font-semibold">Catatan:</span> Dengan
            menggunakan website ini, Anda menyetujui bahwa semua aktivitas yang
            dilakukan merupakan tanggung jawab Anda sendiri.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
