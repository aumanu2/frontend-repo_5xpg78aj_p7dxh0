import React from 'react';
import Hero3D from './components/Hero3D';
import Carousel from './components/Carousel';
import Features from './components/Features';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="font-inter text-gray-900">
      {/* Nav - minimal and airy */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-violet-100/60 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="font-manrope text-lg font-semibold tracking-tight text-violet-700">LuxMart</a>
          <nav className="hidden items-center gap-6 text-sm text-gray-700 md:flex">
            <a href="#produk" className="hover:text-violet-700">Produk</a>
            <a href="#keunggulan" className="hover:text-violet-700">Keunggulan</a>
            <a href="#" className="rounded-full bg-violet-600 px-4 py-2 text-white shadow shadow-violet-600/20 hover:bg-violet-700">Masuk</a>
          </nav>
        </div>
      </header>

      <main className="pt-16">
        <Hero3D />
        <Carousel />
        <Features />
      </main>

      <Footer />
    </div>
  );
};

export default App;
