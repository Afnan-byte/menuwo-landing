import React from 'react';

const SocialProof = () => {
  const testimonials = [
    {
      date: "November 16",
      text: "I actually called in for digital menu integration instead of a standard PDF setup. Menuwo gave a concise explanation of the situation in easy to understand terms, and suggested ways to reduce our operational friction. They are obviously very knowledgeable and patient, totally recommended!",
      rating: 5,
      name: "Huan C",
      location: "Kochi, KL",
      imgColor: "bg-blue-500"
    },
    {
      date: "July 24",
      text: "Not a flim flam service. Every time they deploy a stand you gain confidence that they are the competent partner you want representing your brand. Lays it out like it is, no false promises. There are services that earn their living honestly and with integrity. Menuwo appears to be one of them.",
      rating: 5,
      name: "Daniel R",
      location: "Trivandrum, KL",
      imgColor: "bg-orange-600"
    },
    {
      date: "March 12",
      text: "No more paper menus tearing or getting dirty. The acrylic stands look incredibly premium on our tables, and the instant updates save us hours every week. The onboarding was seamless, and the ongoing support is highly responsive. A must-have for modern dining.",
      rating: 5,
      name: "Sarah M",
      location: "Calicut, KL",
      imgColor: "bg-purple-500"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-8 max-w-7xl">

        <h2 className="text-5xl md:text-7xl font-extrabold text-brand-dark mb-12 tracking-tighter">Testimonials</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-brand-gray p-8 rounded-2xl relative flex flex-col justify-between min-h-[350px]" data-aos="fade-up" data-aos-delay={i * 100}>

              <div>
                <p className="text-sm font-medium text-gray-500 mb-6">{t.date}</p>
                <p className="text-gray-600 font-medium leading-relaxed mb-6">
                  {t.text}
                </p>

                {/* Stars */}
                <div className="flex items-center space-x-1 mb-8">
                  {[...Array(t.rating)].map((_, idx) => (
                    <svg key={idx} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-yellow-400">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                    </svg>
                  ))}
                  <span className="font-bold text-brand-dark ml-2">{t.rating}</span>
                </div>
              </div>

              {/* Footer Profile & Quote Icon */}
              <div className="flex justify-between items-center mt-auto">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-full ${t.imgColor} text-white flex items-center justify-center font-bold text-lg`}>
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-brand-dark font-bold text-sm">{t.name}</p>
                    <p className="text-gray-500 text-xs font-medium">{t.location}</p>
                  </div>
                </div>

                {/* Green Quote Mark */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-brand-green">
                  <path fillRule="evenodd" d="M4.804 21.644A6.707 6.707 0 0 0 6 21.75a6.721 6.721 0 0 0 3.583-1.036c.403-.244.597-.715.44-1.147a3.172 3.172 0 0 1-.21-1.082c0-1.75 1.42-3.166 3.167-3.166H15c2.485 0 4.5-2.015 4.5-4.5V6.75C19.5 4.265 17.485 2.25 15 2.25H6c-2.485 0-4.5 2.015-4.5 4.5v3.133c0 2.485 2.015 4.5 4.5 4.5.158 0 .313-.01.465-.027a4.67 4.67 0 0 0 1.25-.262c.38-.13.784.053.966.417.159.319.263.66.306 1.014.043.348-.005.702-.138 1.026a2.916 2.916 0 0 1-.502.827c-.201.242-.435.456-.694.636a7.227 7.227 0 0 1-1.428.751 6.643 6.643 0 0 1-1.442.366c-.43.056-.816.353-.94.767a1 1 0 0 0 .61 1.258Zm7.068-10.428a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5v1.466c0 .828-.672 1.5-1.5 1.5h-3Z" clipRule="evenodd" />
                </svg>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
