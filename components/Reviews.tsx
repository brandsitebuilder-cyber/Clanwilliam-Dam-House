import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '../types';

const reviews: Testimonial[] = [
  {
    id: 1,
    name: "Tanya V",
    location: "South Africa",
    rating: 5,
    text: "Excellent. Stunning house, great location. Very comfortable and spacious. The view is absolutely breathtaking, just as the name suggests. Highly recommended for a family getaway.",
    date: "January 2024"
  },
  {
    id: 2,
    name: "Hester P",
    location: "South Africa",
    rating: 5,
    text: "What a house! We had a wonderful stay. The house is well equipped and very comfortable. We will definitely be back.",
    date: "December 2023"
  },
  {
    id: 3,
    name: "Marlene S",
    location: "South Africa",
    rating: 5,
    text: "Breath-taking. The house is beautiful, modern and very clean. The view is spectacular. We had a lovely stay and enjoyed the braai area immensely.",
    date: "October 2023"
  }
];

const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-32 bg-brand-50 border-t border-brand-200">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-400 block mb-4">Guest Experiences</span>
          <h2 className="font-serif text-4xl md:text-5xl text-brand-900">Word of Mouth</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-10 shadow-sm relative group hover:-translate-y-2 transition-transform duration-500">
              <Quote className="absolute top-8 right-8 text-brand-200 w-10 h-10 group-hover:text-brand-300 transition-colors" />
              
              <div className="flex gap-1 mb-6 text-brand-900">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>

              <p className="font-serif text-lg text-brand-800 leading-relaxed mb-8">
                "{review.text}"
              </p>

              <div className="flex items-center gap-4 border-t border-brand-100 pt-6">
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-widest text-brand-900">{review.name}</h4>
                  <span className="text-xs text-brand-400">{review.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;