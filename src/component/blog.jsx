import React from "react";
import { motion } from "framer-motion";
import { ArrowRightIcon, CalendarDaysIcon, ClockIcon } from "@heroicons/react/24/outline";

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
    image: "https://images.unsplash.com/photo-1504384308090-c54be3855463?q=80&w=900",
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
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb7d5b73?q=80&w=900",
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
    <section id="blog" className="relative py-32 px-6 bg-[#020617] overflow-hidden text-slate-300 font-sans selection:bg-indigo-500 selection:text-white">
      
      {/* ================= BACKGROUND EFFECTS ================= */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Subtle Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20" />
        
        {/* Aurora Glows */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-900/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] mix-blend-screen" />
      </div>

      <div className="relative max-w-[1400px] mx-auto z-10">
        
        {/* --- Header --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
               <span className="w-10 h-[1px] bg-indigo-500"></span>
               <span className="text-indigo-400 font-bold tracking-widest uppercase text-xs">
                 The Scent Journal
               </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight">
              Latest Insights, Trends <br/> & <span className="italic text-indigo-400">Expert Advice</span>
            </h2>
          </div>
          
          <div className="hidden md:block">
            <button className="group flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 hover:border-indigo-500/50 hover:bg-white/[0.03] transition-all duration-300 font-medium text-white backdrop-blur-sm">
              View All Articles
              <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform text-indigo-400" />
            </button>
          </div>
        </motion.div>

        {/* --- Blog Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article 
              key={post.id} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col h-full bg-[#0B0F19] border border-white/5 rounded-[2rem] overflow-hidden hover:border-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-900/20 transition-all duration-500 cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent opacity-80" />
                
                {/* Floating Category */}
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-bold text-white uppercase tracking-widest bg-white/10 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content Body */}
              <div className="flex-1 flex flex-col p-8 pt-6">
                
                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-slate-500 font-medium mb-4">
                  <div className="flex items-center gap-1.5">
                    <CalendarDaysIcon className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{post.date}</span>
                  </div>
                  <div className="w-1 h-1 rounded-full bg-white/20"></div>
                  <div className="flex items-center gap-1.5">
                    <ClockIcon className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-serif text-white mb-4 leading-snug group-hover:text-indigo-300 transition-colors duration-300">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3 font-light">
                  {post.excerpt}
                </p>

                {/* Link */}
                <div className="mt-auto pt-6 border-t border-white/5">
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-white group-hover:text-indigo-400 transition-colors uppercase tracking-wider text-[10px]">
                    Read Article <ArrowRightIcon className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* --- Mobile View All Button (Visible only on small screens) --- */}
        <div className="mt-12 text-center md:hidden">
          <button className="w-full px-6 py-4 bg-white text-[#020617] font-bold rounded-xl shadow-lg uppercase tracking-wide text-sm">
            View All Articles
          </button>
        </div>

      </div>
    </section>
  );
}