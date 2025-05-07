import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Core Values
const values = [
  { icon: '💡', text: 'Innovation: We seek new ways to enhance supply chains with technology and strategy.' },
  { icon: '🤝', text: 'Collaboration: We co-create tailored strategies in close partnership with our clients.' },
  { icon: '⚙️', text: 'Efficiency: We streamline, reduce costs, and increase long-term value.' },
  { icon: '🛡️', text: 'Integrity: We operate transparently and build client trust.' },
  { icon: '🔄', text: 'Adaptability: We design supply chains that evolve with market demands.' },
];

// Offerings with images and slugs
const offerings = [
  {
    title: 'Supply Chain Strategy and Transformation',
    slug: 'supply-chain-strategy',
    desc: 'Resilient and scalable supply chain frameworks for the future.',
    image: '/assets/offer1.png',
  },
  {
    title: 'End-to-End Logistics Optimization',
    slug: 'logistics-optimization',
    desc: 'Improve logistics from procurement to delivery.',
    image: '/assets/offer2.png',
  },
  {
    title: 'Risk Management and Contingency Planning',
    slug: 'risk-management',
    desc: 'Build safeguards and continuity plans for resilience.',
    image: '/assets/offer3.png',
  },
  {
    title: 'Technology Integration and Automation',
    slug: 'technology-integration',
    desc: 'Leverage AI and automation to boost performance.',
    image: '/assets/offer4.png',
  },
  {
    title: 'Inventory Management and Demand Forecasting',
    slug: 'inventory-management',
    desc: 'Match supply with demand efficiently.',
    image: '/assets/offer5.png',
  },
  {
    title: 'Process Improvement and Cost Efficiency',
    slug: 'process-improvement',
    desc: 'Eliminate inefficiencies and enhance value.',
    image: '/assets/offer6.png',
  },
  {
    title: 'GAP Analysis and Solutions',
    slug: 'gap-analysis',
    desc: 'Uncover inefficiencies and fix them strategically.',
    image: '/assets/offer7.png',
  },
];

export default function About() {
  const [iconIndex, setIconIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIconIndex((prev) => (prev + 1) % values.length);
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-800 py-16 px-6 pt-24">
      <div className="max-w-7xl mx-auto space-y-20">

        {/* About + Image */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-blue-800">About Us</h2>
            <p>
              NEX Shift Strategies Private Limited is a premier supply chain consulting firm dedicated to transforming supply chains through cutting-edge strategies and innovative solutions. Our mission is to optimize operations for today while preparing businesses for the challenges of tomorrow. We focus on helping businesses build resilient, adaptable supply chains that evolve alongside the market, ensuring sustainable growth and success in an ever-changing business landscape.
            </p>
            <h2 className="text-2xl font-semibold text-blue-800 mt-6">Mission</h2>
            <p>
              To connect businesses with sustainable, cutting-edge supply chain solutions today while paving the way for innovation and adaptability in the future.
            </p>
          </div>
          <div className="relative w-full h-80 transition-transform duration-1000 ease-in-out transform hover:scale-105 animate-fade-slide">
            <Image src="/assets/about-side1.png" alt="About NEX Shift" width={600} height={800} objectFit="contain"  className="rounded-lg shadow-lg" />
          </div>
        </div>

        {/* Core Values */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-blue-900 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {values.map((value, i) => (
              <div key={i} className="flex items-start space-x-3">
                <div className="text-3xl">{values[(iconIndex + i) % values.length].icon}</div>
                <p>{value.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Offerings - Horizontal Slider */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-blue-900 text-center">Our Offerings</h2>
          <div className="overflow-x-auto">
            <div className="flex space-x-6 min-w-max px-4 py-6">
              {offerings.map((item, i) => (
                <motion.div
                  key={item.slug}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white border border-blue-200 shadow-lg rounded-lg w-72 flex-shrink-0 p-4"
                >
                  <div className="w-full h-40 relative mb-4">
                    <Image src={item.image} alt={item.title} layout="fill" objectFit="cover" className="rounded" />
                  </div>
                  <h3 className="text-lg font-semibold text-blue-800">{item.title}</h3>
                  <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
                  <Link href={`/offerings/${item.slug}`} className="text-blue-600 text-sm mt-3 inline-block hover:underline">
                    Read More 
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="text-center max-w-4xl mx-auto pt-10 border-t">
          <h2 className="text-2xl font-bold text-blue-800 mb-2">Why Choose NEX Shift</h2>
          <p>
            At NEX Shift Strategies, we are committed to helping businesses connect their supply chains with the latest tools and strategies today, while shaping the future with innovative solutions. Our focus on efficiency, adaptability, and long-term value ensures that your supply chain is ready for tomorrow’s opportunities, whatever they may be.
          </p>
        </div>

        {/* Footer */}
        <footer className="bg-blue-900 text-white text-center p-6 mt-20 relative">
          <div className="text-lg font-semibold">NEX Shift Strategies Pvt Ltd</div>
          <p className="text-sm mt-2">Connecting Supply Chains Today, Driving Innovation Tomorrow</p>
          <p className="text-sm mt-1 mb-4">All rights reserved © 2025</p>
        </footer>
      </div>
    </div>
  );
}
