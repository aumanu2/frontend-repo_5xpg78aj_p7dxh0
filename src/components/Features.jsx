import React from 'react';
import { Shield, Sparkles, Truck } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Transaksi Aman',
    desc: 'Perlindungan pembeli & verifikasi penjual untuk pengalaman tanpa khawatir.'
  },
  {
    icon: Sparkles,
    title: 'Kurasi Premium',
    desc: 'Produk terpilih dengan kualitas terbaik dan estetika mewah.'
  },
  {
    icon: Truck,
    title: 'Pengiriman Cepat',
    desc: 'Opsi pengiriman terjadwal dan tracking real-time.'
  }
];

const Features = () => {
  return (
    <section id="keunggulan" className="bg-gradient-to-b from-white to-violet-50/50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <h2 className="font-manrope text-3xl font-semibold text-gray-900 md:text-4xl">Keunggulan Kami</h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            Fokus pada kenyamanan dan kepercayaan, agar Anda bisa belanja dengan tenang.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-violet-100 bg-white/70 p-6 shadow-sm backdrop-blur transition hover:shadow-md">
              <div className="mb-4 inline-flex rounded-xl bg-violet-100 p-3 text-violet-700 transition group-hover:bg-violet-200">
                <Icon size={22} />
              </div>
              <h3 className="font-manrope text-xl font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
