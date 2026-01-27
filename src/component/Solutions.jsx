import React from "react";

// You can use lucide-react or heroicons. 
// I have embedded SVGs below to ensure this works immediately without installing packages.

const solutions = [
  {
    title: "Scent Marketing Strategy",
    description: "We analyze your brand identity to create a bespoke olfactory logo that triggers memory and emotion, driving customer retention.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
    ),
  },
  {
    title: "Commercial Diffusion",
    description: "Standalone, silent diffusion towers designed for lobbies, retail boutiques, and hotel suites. Elegant hardware that blends into decor.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
    ),
  },
  {
    title: "HVAC Integrated Scenting",
    description: "Advanced scent delivery systems that connect directly to your central air conditioning for uniform, invisible coverage across large square footage.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" /></svg>
    ),
  },
  {
    title: "Washroom Hygiene",
    description: "Neutralize odors at the molecular level. Our antibacterial scent solutions ensure high-traffic restrooms remain fresh and sanitary.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
    ),
  },
  {
    title: "Car & Personal Scenting",
    description: "Compact luxury diffusers for VIP transport fleets and executive offices. Bring the signature scent experience into smaller, intimate spaces.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
    ),
  },
  {
    title: "Maintenance & Support",
    description: "A worry-free subscription model. We handle refilling, cleaning, and programming your machines, so you only focus on your business.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
    ),
  },
];

export default function SolutionsSection() {
  return (
    <section className="py-24 bg-gray-50 text-gray-900" id="solutions">
      {/* --- Changed max-w-7xl to max-w-[1600px] --- */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        
        {/* --- Header Section --- */}
        <div className="mb-20 max-w-3xl">
          <h2 className="text-sm font-bold tracking-widest text-indigo-600 uppercase mb-3">
            Our Expertise
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">
            Comprehensive <span className="italic text-gray-500">Scenting</span> Solutions
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed border-l-4 border-indigo-600 pl-6">
            From centralized HVAC integration for sprawling hotels to intimate diffusers for luxury retail, we engineer atmospheres that define your brand identity.
          </p>
        </div>

        {/* --- Solutions Grid (Increased gap for wider layout) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {solutions.map((item, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-start p-8 bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 rounded-2xl"
            >
              {/* Icon Container with Hover Effect */}
              <div className="mb-6 p-4 rounded-xl bg-gray-50 text-gray-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                {item.icon}
              </div>

              {/* Title */}
              <h4 className="text-2xl font-semibold mb-3 group-hover:text-indigo-600 transition-colors">
                {item.title}
              </h4>

              {/* Description */}
              <p className="text-gray-500 leading-relaxed mb-8 text-lg">
                {item.description}
              </p>

              {/* Subtle 'Learn More' Link */}
              <a
                href="#"
                className="mt-auto flex items-center gap-2 text-sm font-medium text-gray-900 group-hover:underline decoration-indigo-600 underline-offset-4"
              >
                Learn more
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}