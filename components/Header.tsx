
// 'use client';

import Link from 'next/link';
import { useState } from 'react';

export const metadata = {
  title: 'Yusufian | Portfolio',
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const downloadResume = () => {
    // Create a temporary link element to trigger download
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // You can replace this with your actual resume file path
    link.download = 'Yusuf_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-b border-gray-100 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-gray-900">
            Yusuf
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-gray-700 hover:text-gray-900 cursor-pointer whitespace-nowrap transition-colors">
              About
            </Link>
            <Link href="#projects" className="text-gray-700 hover:text-gray-900 cursor-pointer whitespace-nowrap transition-colors">
              Projects
            </Link>
            <Link href="#skills" className="text-gray-700 hover:text-gray-900 cursor-pointer whitespace-nowrap transition-colors">
              Skills
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-gray-900 cursor-pointer whitespace-nowrap transition-colors">
              Contact
            </Link>
            <button 
              onClick={downloadResume}
              className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 cursor-pointer whitespace-nowrap transition-colors"
            >
              Download Resume
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-6 h-6 flex items-center justify-center cursor-pointer"
          >
            <i className={`ri-menu-line text-xl ${isMenuOpen ? 'ri-close-line' : 'ri-menu-line'}`}></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <Link href="#about" className="text-gray-700 hover:text-gray-900 cursor-pointer">
                About
              </Link>
              <Link href="#projects" className="text-gray-700 hover:text-gray-900 cursor-pointer">
                Projects
              </Link>
              <Link href="#skills" className="text-gray-700 hover:text-gray-900 cursor-pointer">
                Skills
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-gray-900 cursor-pointer">
                Contact
              </Link>
              <button 
                onClick={downloadResume}
                className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 cursor-pointer whitespace-nowrap transition-colors w-fit"
              >
                Download Resume
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
