'use client';

import image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              About Me
            </h2>
            
            <div className="prose prose-lg text-gray-700 space-y-6">
              <p className="text-lg leading-relaxed">
                I'm a passionate web developer with strong expertise in building fast, responsive, and scalable full-stack applications. I've built everything from real estate platforms to AI-powered apps.
              </p>
              
              <p className="text-lg leading-relaxed">
                My approach combines technical excellence with user-centered design, ensuring every project delivers both exceptional performance and intuitive user experiences.
              </p>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mt-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Recent Achievement</h3>
                <p className="text-gray-700">
                  Built AI Crop Diagnosis App with Next.js + MongoDB that helps farmers identify plant diseases, serving 1000+ active users with 95% accuracy rate.
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl">
                <image 
                  src="/yusufia.jpg"
                  alt="Yusuf - Full Stack Developer"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-4 rounded-full shadow-lg">
                <i className="ri-code-s-slash-line text-2xl w-8 h-8 flex items-center justify-center"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}