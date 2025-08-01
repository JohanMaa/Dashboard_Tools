import React, { useState } from "react";
import { Mail, User, MessageSquare } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Pesan terkirim! (Simulasi)");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen  py-20 px-6 text-white">
      <div className="max-w-3xl mx-auto bg-gray-800 border border-gray-700 shadow-lg rounded-xl p-8">
        <h1 className="text-4xl font-extrabold text-center text-blue-400 mb-8">
          Hubungi Kami
        </h1>
        <p className="text-center text-gray-300 mb-8">
          Punya pertanyaan, saran, atau laporan? Kirimkan pesan Anda melalui
          formulir di bawah ini.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <User className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              name="name"
              placeholder="Nama Anda"
              value={form.name}
              onChange={handleChange}
              className="w-full pl-10 p-3 bg-gray-900 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-gray-400" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full pl-10 p-3 bg-gray-900 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="relative">
            <MessageSquare className="absolute left-3 top-3 text-gray-400" />
            <textarea
              name="message"
              placeholder="Pesan"
              value={form.message}
              onChange={handleChange}
              rows="4"
              className="w-full pl-10 p-3 bg-gray-900 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 font-semibold"
          >
            Kirim Pesan
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
