import React from "react";
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
    <section id="blog" className="relative py-28 px-6 bg-white overflow-hidden">
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

      <div className="relative max-w-[1400px] mx-auto">
        
        {/* --- Header --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-indigo-600 font-bold tracking-widest uppercase text-sm mb-3 block">
              The Scent Journal
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">
              Latest Insights, Trends <br/> & Expert Advice
            </h2>
          </div>
          
          <div className="hidden md:block">
            <button className="group flex items-center gap-2 px-6 py-3 rounded-full border border-gray-200 hover:border-indigo-600 hover:bg-indigo-600 hover:text-white transition-all duration-300 font-medium">
              View All Articles
              <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* --- Blog Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className="group flex flex-col h-full cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden rounded-2xl mb-6">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
              </div>

              {/* Content Body */}
              <div className="flex-1 flex flex-col">
                
                {/* Meta & Category */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider bg-indigo-50 px-2 py-1 rounded-md">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-3 text-xs text-gray-400 font-medium">
                    <div className="flex items-center gap-1">
                      <CalendarDaysIcon className="w-3.5 h-3.5" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <ClockIcon className="w-3.5 h-3.5" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-serif leading-snug group-hover:text-indigo-600 transition-colors duration-300">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Link */}
                <div className="mt-auto">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors border-b border-gray-200 pb-0.5 group-hover:border-indigo-600">
                    Read Article
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* --- Mobile View All Button (Visible only on small screens) --- */}
        <div className="mt-12 text-center md:hidden">
          <button className="w-full px-6 py-4 bg-gray-900 text-white font-semibold rounded-xl shadow-lg">
            View All Articles
          </button>
        </div>

      </div>
    </section>
  );
}