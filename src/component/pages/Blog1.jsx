import React from "react";
import { motion } from "framer-motion";
import { ArrowRightIcon, CalendarDaysIcon, EnvelopeIcon, TagIcon } from "@heroicons/react/24/outline";

/* ================= UPDATED DATA STRUCTURE (5 ITEMS) ================= */
const blogPosts = [
  {
    id: 1,
    title: "The Psychology of Scent in Luxury Retail",
    excerpt: "Discover how the right fragrance can increase customer dwell time, boost sales, and create lasting emotional connections.",
    category: "Business Strategy",
    date: "Mar 15, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1508090228729-c062eefc9bef?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    productLink: "View Commercial Range"
  },
  {
    id: 2,
    title: "HVAC Scenting: A Complete Architectural Guide",
    excerpt: "Integrating scent diffusion into central air systems for uniform, invisible coverage across sprawling commercial spaces.",
    category: "Installation",
    date: "Mar 10, 2026",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?q=80&w=900",
    productLink: "Explore HVAC Units"
  },
  {
    id: 3,
    title: "Top 5 Fragrance Trends for Luxury Hotels",
    excerpt: "Explore the trending olfactory notes defining luxury hospitality and guest experience for the 2026 season.",
    category: "Hospitality",
    date: "Feb 28, 2026",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=900",
    productLink: "Hotel Collection"
  },
  {
    id: 4,
    title: "Cold-Air Nebulization: The Future of Diffusion",
    excerpt: "Why heat-free technology is essential for preserving the therapeutic properties and purity of essential oils.",
    category: "Technology",
    date: "Feb 15, 2026",
    readTime: "6 min",
    image: "https://plus.unsplash.com/premium_photo-1664303418178-b8767b25f646?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHNjZW50fGVufDB8fDB8fHww",
    productLink: "View Tech Specs"
  },
  {
    id: 5,
    title: "Designing a Signature Scent for Your Home",
    excerpt: "A guide to selecting base and top notes that reflect your interior design aesthetic and personal style.",
    category: "Lifestyle",
    date: "Feb 05, 2026",
    readTime: "7 min",
    image: "https://media.istockphoto.com/id/1265249156/photo/portrait-of-a-beautiful-woman-enjoying-the-smell-of-fresh-flowers.webp?a=1&b=1&s=612x612&w=0&k=20&c=MH8YmLhSjKnY2T6kQ93z_WRzf_lOEg-L1P7WNaNaW8c=",
    productLink: "Shop Home Range"
  },
];

export default function EcommerceBlog() {
  return (
    <section id="blog" className="relative py-24 bg-white overflow-hidden font-sans text-slate-600">
      
      <div className="relative max-w-[1600px] mx-auto px-6 lg:px-12">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 leading-[0.9] tracking-tighter mb-6">
              Scenting <span className="text-blue-600 italic font-serif font-light">Academy</span>
            </h2>
            <p className="text-lg text-slate-500 font-medium font-sans">
              Expert advice on scent marketing, technology, and creating the perfect atmosphere for your brand or home.
            </p>
          </div>
          <a href="/blog" className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold text-xs uppercase tracking-[0.2em] hover:bg-blue-600 transition-all shadow-xl shadow-slate-200">
            Browse All Articles
          </a>
        </div>

        {/* --- Product-Driven Blog Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post) => (
            <motion.article 
              key={post.id}
              whileHover={{ y: -10 }}
              className="group flex flex-col bg-white border border-slate-100 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)]"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-6 left-6">
                  <span className="px-3 py-1.5 bg-white/90 backdrop-blur rounded-full text-[10px] font-black uppercase tracking-widest text-blue-600 shadow-sm">
                    {post.category}
                  </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900/20 backdrop-blur-[2px]">
                   <a href="/blog" className="px-6 py-3 bg-white text-slate-900 rounded-full text-xs font-bold shadow-2xl flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                     Read Article <ArrowRightIcon className="w-4 h-4" />
                   </a>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4 font-sans">
                  <span className="flex items-center gap-1.5"><CalendarDaysIcon className="w-3.5 h-3.5"/> {post.date}</span>
                  <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-blue-600 transition-colors font-serif">
                  {post.title}
                </h3>
                
                <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-3 font-sans font-normal">
                  {post.excerpt}
                </p>

                {/* Footer with Product Link */}
                <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                   <div className="flex items-center gap-2 text-blue-600 font-bold text-[11px] uppercase tracking-widest font-sans">
                      <TagIcon className="w-4 h-4" />
                      {post.productLink}
                   </div>
                   <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <ArrowRightIcon className="w-4 h-4" />
                   </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-24 bg-slate-50 rounded-[3rem] p-10 md:p-20 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-[100px] -mr-48 -mt-48" />
          
          <div className="relative z-10 max-w-xl text-center lg:text-left">
            <div className="flex justify-center lg:justify-start mb-6">
              <div className="p-4 bg-white rounded-2xl shadow-sm">
                <EnvelopeIcon className="w-8 h-8 text-blue-600" />
              </div>
            </div>
            <h3 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter mb-4 font-sans uppercase">
              Join the <span className="text-blue-600">Scent List</span>
            </h3>
            <p className="text-slate-500 font-medium font-sans">
              Get exclusive offers, new fragrance alerts, and scenting tips delivered weekly.
            </p>
          </div>

          <div className="relative z-10 w-full max-w-md">
            <div className="flex p-2 bg-white rounded-3xl shadow-2xl shadow-slate-200">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-6 py-4 bg-transparent text-slate-900 text-sm focus:outline-none font-bold placeholder:font-normal font-sans" 
              />
              <button className="bg-slate-900 text-white px-8 py-4 rounded-2xl text-xs font-bold hover:bg-blue-600 transition-all uppercase tracking-widest font-sans">
                Subscribe
              </button>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=Plus+Jakarta+Sans:wght@400;500;700;800&display=swap');
        
        .font-serif { font-family: 'Playfair Display', serif; }
        .font-sans { font-family: 'Plus Jakarta Sans', sans-serif; }
      `}</style>
    </section>
  );
}