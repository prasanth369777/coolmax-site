export default function ProductCreations() {
  const products = [
    {
      title: "M10 Scent Diffuser",
      desc: "Compact, elegant scenting solution designed for vehicles and small spaces.",
      image: "https://images.unsplash.com/photo-1543269865-0a740d43b90c?q=80&w=900",
    },
    {
      title: "Q500 Commercial Diffuser",
      desc: "High-performance diffuser engineered for hotels, malls, and large interiors.",
      image: "https://images.unsplash.com/photo-1714976326351-0ecf0244f0fc?q=80&w=900",
    },
    {
      title: "D100 HVAC System",
      desc: "Industrial-grade scenting integrated seamlessly with HVAC infrastructure.",
      image: "https://images.unsplash.com/photo-1736220690062-79e12ca75262?q=80&w=900",
    },
  ];

  return (
    <section className="relative py-32 overflow-hidden bg-slate-950 text-white">

      {/* ================= 3D VECTOR BACKGROUND ================= */}
      <div className="absolute inset-0 -z-10 perspective-[1200px]">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:60px_60px] transform rotate-x-60 animate-gridMove" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative max-w-6xl mx-auto px-6">

        {/* HEADING */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Our Product Creations
        </h2>
        <p className="text-slate-400 text-center max-w-xl mx-auto mb-16">
          Precision-engineered scenting machines crafted for performance,
          longevity, and refined environments.
        </p>

        {/* EXPANDING PANELS */}
        <div className="flex items-center gap-6 h-[420px]">
          {products.map((item, i) => (
            <div
              key={i}
              className="relative group flex-grow w-56 h-full rounded-2xl overflow-hidden
                         transition-all duration-500 hover:w-full shadow-xl"
            >
              {/* IMAGE */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* OVERLAY */}
              <div
                className="absolute inset-0 flex flex-col justify-end p-10
                           bg-black/60 opacity-0
                           group-hover:opacity-100 transition duration-300"
              >
                <h3 className="text-2xl font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-300 max-w-sm">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= ANIMATIONS ================= */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

        * {
          font-family: 'Poppins', sans-serif;
        }

        @keyframes gridMove {
          0% {
            transform: rotateX(65deg) translateY(0);
          }
          100% {
            transform: rotateX(65deg) translateY(60px);
          }
        }

        .animate-gridMove {
          animation: gridMove 12s linear infinite;
        }
      `}</style>
    </section>
  );
}
