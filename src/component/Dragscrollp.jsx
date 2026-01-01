import React, { useRef } from "react";

/* ================= IMPORT IMAGES ================= */
/* M10 */
import M10Black from "../asset/productimg/Model M10/M10 - 1.jpeg";
import M10White from "../asset/productimg/Model M10/M10 - 2.jpeg";

/* Q500 */
import Q500Black from "../asset/productimg/Model Q500/Model Q500 - 1.jpeg";
import Q500White from "../asset/productimg/Model Q500/Model Q500 - 2.jpeg";

/* M45 */
import M45Black from "../asset/productimg/Model M45/Model M45 1.jpeg";
import M45White from "../asset/productimg/Model M45/Model M45 2.jpeg";

/* M41-B */
import M41BBlack from "../asset/productimg/Model M41-B/Model M41-B - 1.jpeg";
import M41BWhite from "../asset/productimg/Model M41-B/Model M41-B - 2.jpeg";

/* D100 */
import D100Black from "../asset/productimg/Model D100/Model D100 - 1.jpeg";
import D100White from "../asset/productimg/Model D100/Model D100 - 2.jpeg";

/* H11-A-2026 */
import H11Black from "../asset/productimg/Model H11-A-2026/Model H11-A-2026 - 1.jpeg";
import H11White from "../asset/productimg/Model H11-A-2026/Model H11-A-2026 - 10.jpeg";

/* A500 */
import A500Black from "../asset/productimg/Model D100/Model D100 - 11.jpeg";
import A500White from "../asset/productimg/Model D100/Model D100 - 13.jpeg";

/* VS160 */
import VS160Black from "../asset/productimg/Model VS160/Model VS160 - 2.jpeg";
import VS160White from "../asset/productimg/Model VS160/Model VS160 - 1.jpeg";

/* DSQ1010-1 */
import DSQBlack from "../asset/productimg/Model DSQ1010-1/Model DSQ1010-1 (1).jpeg";
import DSQWhite from "../asset/productimg/Model DSQ1010-1/Model DSQ1010-1 (2).jpeg";

/* ================= PRODUCT LIST ================= */

const products = [
  { name: "M10", image: M10Black },
  { name: "M10", image: M10White },
  { name: "Q500", image: Q500Black },
  { name: "Q500", image: Q500White },
  { name: "M45", image: M45Black },
  { name: "M45", image: M45White },
  { name: "M41-B", image: M41BBlack },
  { name: "M41-B", image: M41BWhite },
  { name: "D100", image: D100Black },
  { name: "D100", image: D100White },
  { name: "H11-A-2026", image: H11Black },
  { name: "H11-A-2026", image: H11White },
  { name: "A500", image: A500Black },
  { name: "A500", image: A500White },
  { name: "VS160", image: VS160Black },
  { name: "VS160", image: VS160White },
  { name: "DSQ1010-1", image: DSQBlack },
  { name: "DSQ1010-1", image: DSQWhite },
];

/* ================= DRAG SCROLL HOOK ================= */

function useDragScroll() {
  const ref = useRef(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onMouseDown = (e) => {
    isDown.current = true;
    startX.current = e.pageX - ref.current.offsetLeft;
    scrollLeft.current = ref.current.scrollLeft;
  };

  const stopDrag = () => (isDown.current = false);

  const onMouseMove = (e) => {
    if (!isDown.current) return;
    e.preventDefault();
    const x = e.pageX - ref.current.offsetLeft;
    const walk = (x - startX.current) * 1.2;
    ref.current.scrollLeft = scrollLeft.current - walk;
  };

  return {
    ref,
    onMouseDown,
    onMouseUp: stopDrag,
    onMouseLeave: stopDrag,
    onMouseMove,
  };
}

/* ================= COMPONENT ================= */

export default function InfiniteProductShowcase() {
  const dragTop = useDragScroll();
  const dragBottom = useDragScroll();

  const loopProducts = [...products, ...products, ...products];

  return (
    <section className="relative py-40 min-h-[130vh] bg-white overflow-hidden">

      {/* ANGLED ANIMATED BACKGROUND */}
      <div className="absolute inset-0 -z-10 bg-angled-pattern animate-bgMove" />

      {/* HEADING */}
      <div className="text-center max-w-[900px] mx-auto mb-28 px-6">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
          Our Product Range
        </h2>
        <p className="text-lg text-gray-600">
          Premium scenting machines crafted for performance, elegance, and scale.
        </p>
      </div>

      {/* TOP TICKER */}
      <div
        ref={dragTop.ref}
        onMouseDown={dragTop.onMouseDown}
        onMouseUp={dragTop.onMouseUp}
        onMouseLeave={dragTop.onMouseLeave}
        onMouseMove={dragTop.onMouseMove}
        className="overflow-x-scroll scrollbar-hide cursor-grab active:cursor-grabbing mb-40"
        style={{ perspective: "1200px" }}
      >
        <div className="flex w-max gap-16 animate-marquee px-24">
          {loopProducts.map((p, i) => (
            <Card key={`top-${i}`} product={p} />
          ))}
        </div>
      </div>

      {/* BOTTOM TICKER */}
      <div
        ref={dragBottom.ref}
        onMouseDown={dragBottom.onMouseDown}
        onMouseUp={dragBottom.onMouseUp}
        onMouseLeave={dragBottom.onMouseLeave}
        onMouseMove={dragBottom.onMouseMove}
        className="overflow-x-scroll scrollbar-hide cursor-grab active:cursor-grabbing"
        style={{ perspective: "1200px" }}
      >
        <div className="flex w-max gap-16 animate-marquee-reverse px-24">
          {loopProducts.map((p, i) => (
            <Card key={`bottom-${i}`} product={p} />
          ))}
        </div>
      </div>

      {/* STYLES */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }

        .bg-angled-pattern {
          background-image: repeating-linear-gradient(
            135deg,
            #f3f4f6 0px,
            #f3f4f6 40px,
            #ffffff 40px,
            #ffffff 80px
          );
        }

        @keyframes bgMove {
          0% { background-position: 0 0; }
          100% { background-position: 400px 400px; }
        }

        .animate-bgMove {
          animation: bgMove 60s linear infinite;
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes marqueeReverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        .animate-marquee {
          animation: marquee 42s linear infinite;
        }

        .animate-marquee-reverse {
          animation: marqueeReverse 52s linear infinite;
        }
      `}</style>
    </section>
  );
}

/* ================= CARD ================= */

function Card({ product }) {
  return (
    <div
      className="
        relative min-w-[260px] h-[340px]
        rounded-2xl overflow-hidden
        shadow-xl bg-white
        transform-gpu transition-all duration-500
        hover:-translate-y-3 hover:rotate-y-6 hover:shadow-2xl
      "
      style={{ transformStyle: "preserve-3d" }}
    >
      <img
        src={product.image}
        alt={product.name}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* PRODUCT NAME */}
      <div className="absolute bottom-0 w-full bg-white/80 backdrop-blur px-4 py-3">
        <p className="text-gray-900 text-base font-semibold tracking-wide">
          {product.name}
        </p>
      </div>
    </div>
  );
}
