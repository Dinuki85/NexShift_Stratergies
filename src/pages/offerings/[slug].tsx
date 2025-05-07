import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

const offeringDetails = {
  'supply-chain-strategy': {
    title: 'Supply Chain Strategy and Transformation',
    image: '/assets/offer1.png',
    content: 'We help businesses redesign their supply chain to become agile, future-ready, and cost-efficient. Our transformation framework addresses strategic, operational, and tactical dimensions to ensure long-term competitiveness.',
  },
  'logistics-optimization': {
    title: 'End-to-End Logistics Optimization',
    image: '/assets/offer2.png',
    content: 'We analyze your logistics processes from warehousing to last-mile delivery to reduce costs and improve delivery speed, helping you stay ahead in customer satisfaction and efficiency.',
  },
  'risk-management': {
    title: 'Risk Management and Contingency Planning',
    image: '/assets/offer3.png',
    content: 'We conduct comprehensive risk assessments and create contingency plans to minimize disruptions and ensure your business continuity during market volatility or supply crises.',
  },
  'technology-integration': {
    title: 'Technology Integration and Automation',
    image: '/assets/offer4.png',
    content: 'Our experts integrate ERP, AI, and automation tools to enhance your operations with real-time visibility, decision intelligence, and smart workflows.',
  },
  'inventory-management': {
    title: 'Inventory Management and Demand Forecasting',
    image: '/assets/offer5.png',
    content: 'We improve demand planning with AI-driven forecasting and optimize inventory levels to reduce holding costs while meeting customer expectations.',
  },
  'process-improvement': {
    title: 'Process Improvement and Cost Efficiency',
    image: '/assets/offer6.png',
    content: 'We eliminate inefficiencies in your supply chain processes through lean methodologies and continuous improvement initiatives.',
  },
  'gap-analysis': {
    title: 'GAP Analysis and Solutions',
    image: '/assets/offer7.png',
    content: 'Our GAP analysis uncovers performance blind spots and provides actionable strategies to align operations with organizational goals.',
  },
};

export default function OfferingDetails() {
  const router = useRouter();
  const { slug } = router.query;

  const data = slug ? offeringDetails[slug as string] : null;

  if (!data) {
    return (
      <div className="p-10 text-center">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 px-6 pb-10 bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className=" w-full bg-white ">
          <Image src={data.image} alt={data.title} width={1500} height={400} objectFit = 'contain'className="w-full h-[400px] object-contain transition-transform duration-300 ease-in-out hover:scale-105" />
        </div>
        <div className="p-6">
          <h1 className="text-3xl font-bold text-blue-800 mb-4">{data.title}</h1>
          <p className="text-gray-700 text-lg">{data.content}</p>

          <Link href="/about">
            <button className="mt-6 inline-block bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-700">
               Back 
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
