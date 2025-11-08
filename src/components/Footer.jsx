import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-violet-100 bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-center md:flex-row md:text-left">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} LuxMart. Semua hak dilindungi.
        </p>
        <nav className="flex items-center gap-6 text-sm text-gray-600">
          <a href="#produk" className="hover:text-violet-700">Produk</a>
          <a href="#keunggulan" className="hover:text-violet-700">Keunggulan</a>
          <a href="#" className="hover:text-violet-700">Kebijakan Privasi</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
