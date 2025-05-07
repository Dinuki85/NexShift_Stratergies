'use client';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const ContactForm = dynamic(() => import('../components/ContactForm'), { ssr: false });

// Background images
const backgroundImages = [
  '/assets/background1.jpg',
  '/assets/background2.jpg',
  '/assets/background3.jpg',
  '/assets/background4.jpg',
  '/assets/background5.jpg',
  '/assets/background6.jpg',
  '/assets/background7.jpg',
  '/assets/background8.jpg',
];

// Color themes (cool tones)
const titleColors = ['text-blue-300', 'text-sky-300', 'text-cyan-200', 'text-indigo-300'];
const subColors = ['text-white', 'text-blue-100', 'text-sky-100', 'text-gray-200'];
const buttonColors = [
  'text-blue-300 border-blue-300',
  'text-indigo-300 border-indigo-300',
  'text-cyan-300 border-cyan-300',
  'text-sky-300 border-sky-300',
];

export default function Home() {
  const [bgImageIndex, setBgImageIndex] = useState(0);
  const [btnIndex, setBtnIndex] = useState(0);
  const [titleColorIndex, setTitleColorIndex] = useState(0);
  const [subColorIndex, setSubColorIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [animateTitle, setAnimateTitle] = useState(true);
  const [animateSubtitle, setAnimateSubtitle] = useState(true);

  useEffect(() => {
    const bgInterval = setInterval(() => {
      setBgImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 3000);

    const btnInterval = setInterval(() => {
      setBtnIndex((prev) => (prev + 1) % buttonColors.length);
    }, 1000);

    const titleInterval = setInterval(() => {
      setTitleColorIndex((prev) => (prev + 1) % titleColors.length);
      setAnimateTitle(false);
      setTimeout(() => setAnimateTitle(true), 200);
    }, 3000); // every 3s

    const subInterval = setInterval(() => {
      setSubColorIndex((prev) => (prev + 1) % subColors.length);
      setAnimateSubtitle(false);
      setTimeout(() => setAnimateSubtitle(true), 200);
    }, 4000); // every 4s

    return () => {
      clearInterval(bgInterval);
      clearInterval(btnInterval);
      clearInterval(titleInterval);
      clearInterval(subInterval);
    };
  }, []);

  return (
    <div className="relative min-h-screen pt-20 overflow-hidden">
      {/* Background slideshow */}
      {backgroundImages.map((src, index) => (
        <Image
          key={index}
          src={src}
          alt={`Background ${index}`}
          fill
          priority
          className={`absolute inset-0 object-cover z-0 transition-opacity duration-1000 ${
            index === bgImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />

      {/* Content */}
      <section className="relative z-20 flex flex-col items-center justify-center min-h-screen text-center px-4 py-10">
        {/* Zoom-in Title */}
        <h1
          className={`text-4xl md:text-5xl font-extrabold tracking-wide mb-4 transition-transform duration-1000 ease-in-out ${
            animateTitle ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
          } ${titleColors[titleColorIndex]}`}
        >
          NEX Shift Strategies Private Limited
        </h1>

        {/* Pull in/out subtitle */}
        <div
          className={`text-lg md:text-xl font-semibold mb-4 transition-all duration-1000 ease-in-out transform ${
            animateSubtitle ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-6 scale-90 opacity-0'
          } ${subColors[subColorIndex]}`}
        >
          Connecting Supply Chains Today, Driving Innovation Tomorrow
        </div>

        {/* Button */}
        <button
          onClick={() => setShowPopup(true)}
          className={`border px-4 py-2 mt-2 rounded transition-all duration-500 ${buttonColors[btnIndex]}`}
          style={{ backgroundColor: 'transparent' }}
        >
          Contact Us
        </button>
      </section>

      {/* Contact Form Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md text-black relative">
            <button
              className="absolute top-2 right-2 text-xl font-bold"
              onClick={() => setShowPopup(false)}
            >
              &times;
            </button>
            <ContactForm onClose={() => setShowPopup(false)} />
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center p-6 relative z-20">
        <div className="text-lg font-semibold">NEX Shift Strategies Pvt Ltd</div>
        <p className="text-sm mt-2">Connecting Supply Chains Today, Driving Innovation Tomorrow</p>
        <p className="text-sm mt-1 mb-4">All rights reserved © 2025</p>
      </footer>
    </div>
  );
}
