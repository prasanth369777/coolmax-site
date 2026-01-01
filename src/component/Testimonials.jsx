import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";

/* ================= REVIEWS DATA ================= */

const reviews = [
  {
    name: "Ahmed Al Mansoori",
    title: "Facility Manager, Luxury Hotel",
    feedback:
      "The CoolMax lobby scent diffuser elevated our guest experience with subtle, consistent fragrance distribution.",
    image: "/images/reviews/client1.jpg",
    rating: 5,
    product: "Lobby Scent Diffuser (CM-102)",
  },
  {
    name: "Ritika Sharma",
    title: "Operations Head, Retail Chain",
    feedback:
      "CoolMax HVAC scent systems are reliable, easy to maintain, and perfect for multi-location deployment.",
    image: "/images/reviews/client2.jpg",
    rating: 5,
    product: "HVAC Scent Diffuser (CM-104)",
  },
  {
    name: "Mohammed Faisal",
    title: "Office Administrator",
    feedback:
      "The room atmosphere diffuser created a pleasant workspace without overpowering the senses.",
    image: "/images/reviews/client3.jpg",
    rating: 4,
    product: "Room Atmosphere Diffuser (CM-105)",
  },
  {
    name: "Neha Verma",
    title: "Showroom Manager",
    feedback:
      "Our customers instantly noticed the premium fragrance. It improved dwell time significantly.",
    image: "/images/reviews/client4.jpg",
    rating: 5,
    product: "Wall Mount Diffuser (CM-103)",
  },
];

/* ================= CARD ================= */

function ReviewCard({ review }) {
  return (
    <div className="mx-4 w-[340px] shrink-0 rounded-2xl
                    backdrop-blur-xl bg-white/70
                    border border-white/50
                    shadow-lg p-6 transition hover:shadow-2xl">

      <div className="flex items-center gap-4 mb-4">
        <img
          src={review.image}
          alt={review.name}
          className="w-12 h-12 rounded-full object-cover border"
        />
        <div>
          <p className="font-semibold text-slate-900">{review.name}</p>
          <p className="text-xs text-slate-500">{review.title}</p>
        </div>
      </div>

      <p className="text-sm text-slate-700 leading-relaxed mb-4">
        “{review.feedback}”
      </p>

      <p className="text-xs font-medium text-indigo-600 mb-3">
        {review.product}
      </p>

      <div className="flex">
        {[...Array(review.rating)].map((_, i) => (
          <StarIcon key={i} className="w-4 h-4 text-yellow-400" />
        ))}
      </div>
    </div>
  );
}

/* ================= COMPONENT ================= */

export default function ProductReviewsMarquee() {
  const loopReviews = [...reviews, ...reviews];

  return (
    <>
      {/* ================= STYLES ================= */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        .marquee {
          animation: marquee 30s linear infinite;
        }

        .marquee-reverse {
          animation-direction: reverse;
        }
      `}</style>

      <section
        id="reviews"
        className="relative py-32 overflow-hidden
                   bg-gradient-to-br from-white via-slate-50 to-slate-100"
      >
        {/* GRADIENT BLURS */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-indigo-300/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-pink-300/20 rounded-full blur-3xl" />

        {/* HEADING */}
        <div className="relative max-w-4xl mx-auto text-center mb-24 px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-slate-600 text-lg">
            Trusted by hotels, offices, and commercial spaces
          </p>
        </div>

        {/* ================= TOP MARQUEE ================= */}
        <div className="relative max-w-6xl mx-auto overflow-hidden">
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />

          <div className="flex min-w-[200%] marquee py-6">
            {loopReviews.map((review, i) => (
              <ReviewCard key={`top-${i}`} review={review} />
            ))}
          </div>

          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        </div>

        {/* ================= BOTTOM MARQUEE ================= */}
        <div className="relative max-w-6xl mx-auto overflow-hidden mt-16">
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />

          <div className="flex min-w-[200%] marquee marquee-reverse py-6">
            {loopReviews.map((review, i) => (
              <ReviewCard key={`bottom-${i}`} review={review} />
            ))}
          </div>

          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        </div>
      </section>
    </>
  );
}
