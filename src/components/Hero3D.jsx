import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero3D = () => {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-gradient-to-b from-violet-100 via-white to-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/myxXfbNiwnbTpGFp/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient veil to soften the scene while keeping it interactive */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-white/80" />

      {/* Content */}
      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-24 pb-16 text-center md:pt-28">
        <h1 className="font-manrope text-4xl font-semibold tracking-tight text-gray-900 drop-shadow-sm md:text-6xl">
          Jual Beli Barang Premium, Simpel & Elegan
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-gray-600 md:text-xl">
          Pilihan produk terkurasi dengan pengalaman belanja yang halus dan mewah.
          Desain minimalis, fokus pada kualitas.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#produk"
            className="inline-flex items-center rounded-full bg-violet-600 px-6 py-3 text-white shadow-lg shadow-violet-600/20 transition hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-400"
          >
            Jelajahi Koleksi
          </a>
          <a
            href="#keunggulan"
            className="inline-flex items-center rounded-full border border-violet-200 bg-white/70 px-6 py-3 text-violet-700 backdrop-blur transition hover:border-violet-300 hover:bg-white"
          >
            Mengapa Kami?
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero3D;
