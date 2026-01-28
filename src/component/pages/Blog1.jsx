import React from "react";
import { ArrowRightIcon, CalendarDaysIcon } from "@heroicons/react/24/outline";

const blogPosts = [
  {
    id: 1,
    title: "The Psychology of Scent in Retail",
    excerpt: "Discover how the right fragrance can increase customer dwell time, boost sales, and create lasting emotional connections with your brand.",
    category: "Featured",
    date: "Mar 15, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1555529771-835f59fc5efe?q=80&w=900",
    isFeatured: true,
  },
  {
    id: 2,
    title: "HVAC Scenting: A Complete Guide",
    excerpt: "Integrating scent diffusion into central air systems for uniform coverage.",
    category: "Technology",
    date: "Mar 10, 2025",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1504384308090-c54be3855463?q=80&w=900",
  },
  {
    id: 3,
    title: "Top 5 Fragrance Trends for Hotels",
    excerpt: "Explore the trending olfactory notes defining luxury hospitality.",
    category: "Hospitality",
    date: "Feb 28, 2025",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=900",
  },
  {
    id: 4,
    title: "The Science of Memory",
    excerpt: "Why specific scents trigger vivid memories and how brands leverage this.",
    category: "Science",
    date: "Feb 15, 2025",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=900",
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="relative py-24 px-6 bg-stone-50 overflow-hidden">
      
      {/* Decorative Background Blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto">
        
        {/* --- Section Header --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-200 pb-8">
          <div>
            <span className="text-indigo-600 font-bold tracking-widest uppercase text-xs mb-2 block">
              The Scent Journal
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-gray-900">
              Latest Insights
            </h2>
          </div>
          <a href="/blog" className="hidden md:flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-indigo-600 transition-colors">
            View Archive <ArrowRightIcon className="w-4 h-4" />
          </a>
        </div>

        {/* --- Editorial Layout --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* FEATURED POST (Left Column) */}
          <article className="group relative h-full flex flex-col cursor-pointer">
            <div className="relative w-full h-[400px] lg:h-[500px] overflow-hidden rounded-2xl shadow-lg">
              <img
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity duration-500" />
              
              {/* Floating Badge */}
              <div className="absolute top-6 left-6">
                <span className="px-4 py-1.5 bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-sm">
                  {blogPosts[0].category}
                </span>
              </div>

              {/* Text Overlay for Featured */}
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="flex items-center gap-4 text-gray-300 text-sm mb-3 font-medium">
                    <span className="flex items-center gap-1"><CalendarDaysIcon className="w-4 h-4"/> {blogPosts[0].date}</span>
                    <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                    <span>{blogPosts[0].readTime}</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4 leading-tight group-hover:text-indigo-200 transition-colors">
                    {blogPosts[0].title}
                </h3>
                <p className="text-gray-200 line-clamp-2 max-w-xl text-lg mb-6 font-light leading-relaxed">
                    {blogPosts[0].excerpt}
                </p>
                <span className="inline-flex items-center gap-2 text-white font-semibold border-b border-white/30 pb-1 group-hover:border-white transition-all group-hover:gap-3">
                    Read Full Story <ArrowRightIcon className="w-4 h-4" />
                </span>
              </div>
            </div>
          </article>

          {/* SIDE LIST (Right Column) */}
          <div className="flex flex-col gap-8 h-full justify-between">
            {blogPosts.slice(1).map((post) => (
              <article key={post.id} className="group flex flex-col sm:flex-row gap-6 items-start cursor-pointer border-b border-gray-100 pb-8 last:border-0 last:pb-0">
                
                {/* Thumbnail */}
                <div className="w-full sm:w-48 h-48 sm:h-32 flex-shrink-0 rounded-xl overflow-hidden relative shadow-sm">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0 py-1">
                  <div className="flex items-center gap-3 text-xs font-bold text-indigo-600 mb-2 uppercase tracking-wide">
                    <span>{post.category}</span>
                    <span className="text-gray-300 font-light">•</span>
                    <span className="text-gray-400 font-medium normal-case">{post.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2 font-serif group-hover:text-indigo-700 transition-colors line-clamp-2 leading-snug">
                    {post.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-2 mb-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-2 text-sm font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                    Read <ArrowRightIcon className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            ))}
            
            {/* Newsletter CTA Block (Integrated into the list flow) */}
            <div className="mt-4 bg-white border border-gray-200 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
                <div className="text-center sm:text-left">
                    <h4 className="text-gray-900 font-bold text-lg mb-1 font-serif">Subscribe to our journal</h4>
                    <p className="text-gray-500 text-sm">Get the latest scent trends delivered.</p>
                </div>
                <div className="flex w-full sm:w-auto shadow-sm rounded-lg overflow-hidden border border-gray-200 focus-within:border-indigo-500 transition-colors">
                    <input type="email" placeholder="Email address" className="bg-white text-gray-900 text-sm px-4 py-3 focus:outline-none w-full placeholder:text-gray-400" />
                    <button className="bg-indigo-600 text-white px-6 py-3 text-sm font-bold hover:bg-indigo-700 transition-colors">
                        Join
                    </button>
                </div>
            </div>
          </div>

        </div>

        {/* Mobile View All */}
        <div className="mt-12 text-center md:hidden">
            <a href="/blog" className="inline-block px-8 py-3 bg-white border border-gray-300 rounded-full font-semibold text-gray-900 shadow-sm hover:shadow-md transition-shadow">
                View All Articles
            </a>
        </div>

      </div>
    </section>
  );
}