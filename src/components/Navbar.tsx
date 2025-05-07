import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#e0f2f1] text-[#003366] px-6 py-3 flex justify-between items-center shadow-md backdrop-blur-md transition-all duration-500">
      {/* Logo + Brand */}
      <div className="flex items-center space-x-3">
        <Image
          src="/assets/logo-newone.png"
          alt="Company Logo"
          width={60}
          height={60}
          className="hover:scale-110 transition-transform duration-300"
        />
        <span className="text-2xl font-extrabold tracking-wide">NEX Shift</span>
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-8 text-base font-medium">
        <li>
          <Link
            href="/"
            className="hover:text-[#007acc] transition-colors duration-300"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-[#007acc] transition-colors duration-300"
          >
            About Us
          </Link>
        </li>
        {/* Add more links here if needed */}
      </ul>
    </nav>
  );
}
