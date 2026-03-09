import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; 
import { ArrowRightIcon, CalendarDaysIcon, ClockIcon} from "@heroicons/react/24/outline";


const blogPosts = [
  {
    id: 1,
    title: "Scent Marketing for Hotels: Improve Guest Experience & Loyalty",
    excerpt: "Discover how hotels in UAE use scent marketing solutions to improve guest experience, brand recall, and loyalty with professional aroma diffusers.",
    category: "Hospitality",
    date: "Feb 20, 2026",
    readTime: "6 min read",
    path: "/blog/scent-marketing-hotels-uae/", // Blog 1 Redirect
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=900",
  },
  {
    id: 2,
    title: "What to Consider When Choosing a Commercial Aroma Diffuser",
    excerpt: "Learn what large companies actually consider when selecting professional scent systems—from HVAC compatibility to micro-atomization technology.",
    category: "Business Guide",
    date: "Feb 18, 2026",
    readTime: "7 min read",
    path: "/blog/scent-marketing-hotels-uae/", // Blog 2 Redirect
    image: "https://images.unsplash.com/photo-1508090228729-c062eefc9bef?q=80&w=1170&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Scent Marketing 101 Solutions in UAE | Cool Max Scent",
    excerpt: "Scent Marketing 101: How Dubai Businesses Use.",
    category: "Marketing Mastery",
    date: "Mar 15, 2025",
    readTime: "5 min read",
    path: "/blog/scent-marketing-101-uae/",
    image: "https://plus.unsplash.com/premium_photo-1664303418178-b8767b25f646?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 4,
    title: "Why 5-Star Hotels in Dubai Use Scent Diffusers - The Power of Scent Marketing in Luxury Hospitality",
    excerpt: "Discover why leading 5-star hotels in Dubai invest in hotel scent diffuser systems.",
    category: "Science",
    date: "Feb 15, 2025",
    readTime: "6 min read",
    path: "/blog/why-5-star-hotels-dubai-use-scent-diffusers/",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=900",
  },
  {
    id: 5,
    title: "How to Choose the Best Scent Diffuser Machine for Homes, Offices, and Commercial Spaces",
    excerpt: "Many homes, offices, hotels, and retail spaces struggle with maintaining a pleasant and consistent atmosphere.",
    category: "scent diffuser machines",
    date: "Feb 10, 2025",
    readTime: "4 min read",
    path: "/blog/how-to-choose-best-scent-diffuser-machine/",
    image: "https://media.istockphoto.com/id/1265249156/photo/portrait-of-a-beautiful-woman-enjoying-the-smell-of-fresh-flowers.webp?a=1&b=1&s=612x612&w=0&k=20&c=MH8YmLhSjKnY2T6kQ93z_WRzf_lOEg-L1P7WNaNaW8c=",
  },
  {
    id: 6,
    title: "Creating a Spa-Like Atmosphere at Home",
    excerpt: "You don't need a hotel budget to smell like luxury. Tips for positioning home diffusers to maximize relaxation.",
    category: "Lifestyle",
    date: "Jan 25, 2025",
    readTime: "5 min read",
    path: "/blog/scent-marketing-hotels-uae/",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=900",
  },
];

export default function BlogSection() {
  return (
    <div className="relative min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 overflow-hidden text-left">
      
      {/* ================= GLOBAL BACKGROUND ================= */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-slate-100/50 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.01)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-16 mt-16">

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
                className="group relative flex flex-col h-full bg-white border border-slate-100 rounded-[3rem] overflow-hidden hover:border-blue-200 hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)] transition-all duration-500"
              >
                {/* Image Container */}
                <Link to={post.path} className="relative h-72 overflow-hidden m-4 rounded-[2.5rem] block">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500" />
                  
                  <div className="absolute top-6 left-6">
                    <span className="text-[9px] font-black text-slate-900 uppercase tracking-widest bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-sm">
                      {post.category}
                    </span>
                  </div>
                </Link>

                {/* Content Body */}
                <div className="flex-1 flex flex-col p-10 pt-4 text-left">
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

                  <Link to={post.path}>
                    <h3 className="text-2xl font-serif text-slate-900 mb-6 leading-tight group-hover:text-blue-600 transition-colors duration-300 text-left">
                      {post.title}
                    </h3>
                  </Link>

                  <p className="text-slate-500 text-base leading-relaxed mb-8 line-clamp-3 font-light text-left">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto pt-8 border-t border-slate-50 text-left">
                    <Link 
                      to={post.path}
                      className="inline-flex items-center gap-2 text-[10px] font-black text-slate-900 group-hover:text-blue-600 transition-colors uppercase tracking-[0.2em]"
                    >
                      Read Article <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* ================= FOOTER CTA ================= */}
        <section className="py-32 text-center bg-slate-50 rounded-[5rem] mb-20 border border-slate-200 shadow-sm">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="max-w-4xl mx-auto px-6">
            <h2 className="text-5xl md:text-7xl font-serif text-slate-900 mb-8 tracking-tighter leading-none text-center">
              Stay Informed on <br /> <span className="italic text-blue-600 font-light">Scent Excellence.</span>
            </h2>
            <p className="text-xl text-slate-500 mb-12 leading-relaxed font-light max-w-2xl mx-auto text-center">
              Whether you are looking for a scent machine for home or a full-scale machine for business, our blog provides the knowledge you need.
            </p>
          </motion.div>
        </section>

      </div>
    </div>
  );
}