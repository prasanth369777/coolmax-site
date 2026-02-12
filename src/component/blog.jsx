import React from "react";
import { motion } from "framer-motion";
import { ArrowRightIcon, CalendarDaysIcon, ClockIcon, SparklesIcon } from "@heroicons/react/24/outline";

// --- Mapped Product Images for the Hero Visual ---
import HeroBlogImg from "../asset/productimg/CMwebpimg/AeroMax Pro/3.webp"; 

const blogPosts = [
  {
    id: 1,
    title: "The Psychology of Scent in Retail",
    excerpt: "Discover how the right fragrance can increase customer dwell time, boost sales, and create lasting emotional connections with your brand.",
    category: "Scent Marketing",
    date: "Mar 15, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1555529771-835f59fc5efe?q=80&w=900",
  },
  {
    id: 2,
    title: "HVAC Scenting: A Complete Guide",
    excerpt: "Everything you need to know about integrating scent diffusion into your central air system for uniform, invisible coverage in large spaces.",
    category: "Technology",
    date: "Mar 10, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=900",
  },
  {
    id: 3,
    title: "Top 5 Fragrance Trends for Hotels",
    excerpt: "From white tea to sandalwood, explore the trending olfactory notes that top luxury hotels are using to define their guest experience this year.",
    category: "Hospitality",
    date: "Feb 28, 2025",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=900",
  },
  {
    id: 4,
    title: "The Science of Memory: Why Scent Sticks",
    excerpt: "Olfactory memory is the strongest type of recall. Learn the biology behind why specific scents trigger vivid memories and how brands leverage this.",
    category: "Science",
    date: "Feb 15, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=900",
  },
  {
    id: 5,
    title: "Sustainable Scenting: Eco-Friendly Solutions",
    excerpt: "As businesses go green, fragrance follows. Explore our commitment to non-toxic, hypoallergenic, and sustainably sourced aroma oils.",
    category: "Sustainability",
    date: "Feb 10, 2025",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1555529771-835f59fc5efe?q=80&w=900",
  },
  {
    id: 6,
    title: "Creating a Spa-Like Atmosphere at Home",
    excerpt: "You don't need a hotel budget to smell like luxury. Tips for positioning home diffusers to maximize relaxation and air freshness.",
    category: "Lifestyle",
    date: "Jan 25, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=900",
  },
];

export default function BlogSection() {
  return (
    <div className="relative min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 overflow-hidden">
      
      {/* ================= GLOBAL BACKGROUND (White/Grey) ================= */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-slate-100/50 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.01)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-16">

        {/* ================= NEW HERO SECTION (SPLIT: TEXT LEFT, IMAGE RIGHT) ================= */}
        <section className="min-h-[90vh] flex flex-col lg:flex-row items-center pt-32 lg:pt-0 gap-16 text-left">
          
          {/* LEFT: TEXT CONTENT */}
          <div className="lg:w-1/2 flex flex-col items-start z-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-8 shadow-sm">
                <SparklesIcon className="w-4 h-4 text-blue-600" />
                <span className="text-blue-700 text-[10px] font-black uppercase tracking-[0.3em]">
                  The Scent Journal
                </span>
              </div>
              
              <h1 className="text-6xl md:text-8xl lg:text-7xl xl:text-7xl font-serif text-slate-900 tracking-tighter mb-8 leading-[0.95]">
                Latest Insights, <br />
                <span className="italic text-slate-400 font-light pr-2">Expert Advice</span> <br />
                & Trends.
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-500 font-light max-w-xl mb-10 leading-relaxed">
                Deep dives into olfactory science, brand strategy, and the technology of professional scenting.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="#articles" className="px-10 py-5 bg-slate-900 text-white font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-blue-600 transition-all shadow-xl">
                  Start Reading
                </a>
                
              </div>
            </motion.div>
          </div>

          {/* RIGHT: IMAGE STAGE */}
          <div className="lg:w-1/2 relative flex items-center justify-center w-full">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative w-full aspect-square max-w-[600px] p-8"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-100 to-white rounded-[4rem] shadow-inner border border-slate-50" />
              <img 
                src={HeroBlogImg} 
                alt="Expert Scent Insights" 
                className="w-full h-full object-contain relative z-10 drop-shadow-[0_50px_50px_rgba(0,0,0,0.1)] hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-2/3 h-12 bg-slate-900/5 blur-3xl rounded-full" />
            </motion.div>
          </div>
        </section>

        {/* ================= ARTICLES GRID SECTION ================= */}
        <section id="articles" className="py-24 border-t border-slate-100">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((post, index) => (
              <motion.article 
                key={post.id} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex flex-col h-full bg-white border border-slate-100 rounded-[3rem] overflow-hidden hover:border-blue-200 hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)] transition-all duration-500 cursor-pointer text-left"
              >
                {/* Image Container */}
                <div className="relative h-72 overflow-hidden m-4 rounded-[2.5rem]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500" />
                  
                  {/* Floating Category */}
                  <div className="absolute top-6 left-6">
                    <span className="text-[9px] font-black text-slate-900 uppercase tracking-widest bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-sm">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="flex-1 flex flex-col p-10 pt-4">
                  
                  {/* Meta */}
                  <div className="flex items-center gap-4 text-[10px] text-slate-400 font-black uppercase tracking-widest mb-6">
                    <div className="flex items-center gap-1.5">
                      <CalendarDaysIcon className="w-3.5 h-3.5 text-blue-500" />
                      <span>{post.date}</span>
                    </div>
                    <div className="w-1 h-1 rounded-full bg-slate-200"></div>
                    <div className="flex items-center gap-1.5">
                      <ClockIcon className="w-3.5 h-3.5 text-blue-500" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-serif text-slate-900 mb-6 leading-tight group-hover:text-blue-600 transition-colors duration-300">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-slate-500 text-base leading-relaxed mb-8 line-clamp-3 font-light">
                    {post.excerpt}
                  </p>

                  {/* Link */}
                  <div className="mt-auto pt-8 border-t border-slate-50">
                    <span className="inline-flex items-center gap-2 text-[10px] font-black text-slate-900 group-hover:text-blue-600 transition-colors uppercase tracking-[0.2em]">
                      Read Article <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* ================= FOOTER CTA ================= */}
        <section className="py-32 text-center bg-slate-50 rounded-[5rem] mb-20 border border-slate-200 shadow-sm">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="max-w-4xl mx-auto px-6">
            <h2 className="text-5xl md:text-7xl font-serif text-slate-900 mb-8 tracking-tighter leading-none">
              Stay Informed on <br /> <span className="italic text-blue-600 font-light">Scent Excellence.</span>
            </h2>
            <p className="text-xl text-slate-500 mb-12 leading-relaxed font-light max-w-2xl mx-auto">
              Whether you are looking for a scent machine for home or a full-scale machine for business, our blog provides the knowledge you need.
            </p>
          
          </motion.div>
        </section>

      </div>
    </div>
  );
}