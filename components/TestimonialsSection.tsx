'use client';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Tobiloba Oluwa",
      role: "CEO Youth Movement for SDGs",
      project: "YM4SDGs Website",
      content: "Yusuf did an amazing job building our website. He understood our mission and created a platform that truly represents our work. The site is user-friendly and has helped us reach a wider audience.",
      avatar: "TO",
      rating: 5
    },
    {
      name: "Mustapha Mukhtar",
      role: "CEO Miftah Edu-Trade Hub",
      project: "Miftah Edu-Trade Hub Website",
      content: "Yusuf delivered a professional website that perfectly showcased our services. The site is easy to navigate and has helped us attract more clients globally.",
      avatar: "MM",
      rating: 5
    },
    {
      name: "Arc. Ahmad Said",
      role: "CEO DYAM Natural Water",
      project: "DYAM Natural Water Charity Platform",
      content: "Yusuf built a fantastic platform for our charity operations. The system is efficient and has streamlined our donation management and water distribution processes.",
      avatar: "AS",
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