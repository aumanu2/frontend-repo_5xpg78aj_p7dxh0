import React, { useEffect, useRef, useState } from 'react';

const sampleImages = [
  'https://images.unsplash.com/photo-1556227701-1f3b4a6e6c5b?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1510414696678-2415ad8474aa?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1600&auto=format&fit=crop',
];

const Carousel = ({ images = sampleImages }) => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearTimeout(timeoutRef.current);
  }, [index, images.length]);

  return (
    <section id="produk" className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="font-manrope text-3xl font-semibold text-gray-900 md:text-4xl">Koleksi Unggulan</h2>
          <p className="mt-2 text-gray-600">Carousel foto produk dengan pengalaman mulus.</p>
        </div>
        <div className="hidden gap-2 md:flex">
          <button
            onClick={() => setIndex((index - 1 + images.length) % images.length)}
            className="rounded-full border border-gray-200 bg-white px-3 py-2 text-gray-700 shadow-sm transition hover:bg-gray-50"
            aria-label="Sebelumnya"
          >
            ‹
          </button>
          <button
            onClick={() => setIndex((index + 1) % images.length)}
            className="rounded-full border border-gray-200 bg-white px-3 py-2 text-gray-700 shadow-sm transition hover:bg-gray-50"
            aria-label="Berikutnya"
          >
            ›
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-100">
        <div className="relative aspect-[21/9] w-full">
          {images.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`Gambar produk ${i + 1}`}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                i === index ? 'opacity-100' : 'opacity-0'
              }`}
              loading={i === 0 ? 'eager' : 'lazy'}
            />
          ))}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/30 via-transparent to-white/50" />
        </div>

        <div className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 transform">
          <div className="flex items-center gap-2 rounded-full bg-white/80 p-2 shadow backdrop-blur">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2.5 w-2.5 rounded-full transition ${i === index ? 'bg-violet-600 w-6' : 'bg-gray-300'}`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
