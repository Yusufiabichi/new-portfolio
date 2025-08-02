'use client';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Real Estate Agency Owner",
      project: "Real Estate Platform",
      content: "Yusuf transformed our business with an incredible real estate platform. Our sales increased by 40% in just 3 months. His attention to detail and technical expertise are outstanding.",
      avatar: "SJ",
      rating: 5
    },
    {
      name: "Dr. Michael Chen",
      role: "Agricultural Consultant",
      project: "AI Crop Diagnosis App",
      content: "The AI crop diagnosis app Yusuf built has been a game-changer for our farming community. The 95% accuracy rate has saved thousands of dollars in crop losses. Exceptional work!",
      avatar: "MC",
      rating: 5
    },
    {
      name: "Lisa Rodriguez",
      role: "E-commerce Store Owner",
      project: "E-commerce Dashboard",
      content: "Working with Yusuf was a pleasure. He delivered a comprehensive dashboard that gave us insights we never had before. Our inventory management improved dramatically.",
      avatar: "LR",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            What clients say about working with me
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-gray-100">
              {/* Rating Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i key={i} className="ri-star-fill text-yellow-400 w-5 h-5 flex items-center justify-center"></i>
                ))}
              </div>

              <blockquote className="text-gray-700 mb-8 leading-relaxed">
                "{testimonial.content}"
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}
                  </div>
                  <div className="text-sm text-blue-600 font-medium">
                    {testimonial.project}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}