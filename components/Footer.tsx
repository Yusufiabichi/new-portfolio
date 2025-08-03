
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Yusuf</h3>
            <p className="text-gray-300 leading-relaxed">
              Full-stack developer crafting scalable web applications with modern technologies.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <Link href="#about" className="block text-gray-300 hover:text-white cursor-pointer transition-colors">
                About
              </Link>
              <Link href="#projects" className="block text-gray-300 hover:text-white cursor-pointer transition-colors">
                Projects
              </Link>
              <Link href="#skills" className="block text-gray-300 hover:text-white cursor-pointer transition-colors">
                Skills
              </Link>
              <Link href="#contact" className="block text-gray-300 hover:text-white cursor-pointer transition-colors">
                Contact
              </Link>
              <Link href="/manage" className="block text-gray-300 hover:text-white cursor-pointer transition-colors">
                Manage
              </Link>
            </nav>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="https://github.com/Yusufiabichi/Yusufiabichi.git" className="w-10 h-10 bg-gray-800 text-gray-300 rounded-full flex items-center justify-center hover:bg-gray-700 hover:text-white cursor-pointer transition-all">
                <i className="ri-github-line w-5 h-5 flex items-center justify-center"></i>
              </a>
              <a href="http://www.linkedin.com/in/yusufiabichi" className="w-10 h-10 bg-gray-800 text-gray-300 rounded-full flex items-center justify-center hover:bg-gray-700 hover:text-white cursor-pointer transition-all">
                <i className="ri-linkedin-fill w-5 h-5 flex items-center justify-center"></i>
              </a>
              <a href="https://twitter.com/YusufiaBichi" className="w-10 h-10 bg-gray-800 text-gray-300 rounded-full flex items-center justify-center hover:bg-gray-700 hover:text-white cursor-pointer transition-all">
                <i className="ri-twitter-fill w-5 h-5 flex items-center justify-center"></i>
              </a>
              <a href="https://wa.me/2347068538000/" className="w-10 h-10 bg-gray-800 text-gray-300 rounded-full flex items-center justify-center hover:bg-gray-700 hover:text-white cursor-pointer transition-all">
                <i className="ri-whatsapp-fill w-5 h-5 flex items-center justify-center"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Yusuf. All rights reserved. Available at yusuf.dev
          </p>
        </div>
      </div>
    </footer>
  );
}
