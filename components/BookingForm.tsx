import React, { useState } from 'react';
import { Calendar, Users, Mail, Phone, CheckCircle, ArrowRight, MessageCircle } from 'lucide-react';
import { BookingRequest } from '../types';

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState<BookingRequest>({
    checkIn: '',
    checkOut: '',
    guests: 2,
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      console.log('Booking Request:', formData);
      setStatus('success');
      setFormData({
        checkIn: '', checkOut: '', guests: 2, name: '', email: '', phone: '', message: ''
      });
    }, 1500);
  };

  return (
    <section id="booking" className="bg-brand-900 text-brand-50 relative">
      <div className="flex flex-col lg:flex-row min-h-screen">
        
        {/* Left Side: Information */}
        <div className="lg:w-1/2 p-12 lg:p-24 flex flex-col justify-between relative overflow-hidden">
           {/* Abstract Background Decoration */}
           <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute top-10 left-10 w-64 h-64 border rounded-full"></div>
              <div className="absolute bottom-20 right-20 w-96 h-96 border rounded-full"></div>
           </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-400 mb-6 block">Availability</span>
            <h2 className="font-serif text-5xl md:text-6xl mb-8 leading-tight">
              Reserve Your <br />
              <span className="italic text-brand-400">Experience.</span>
            </h2>
            <p className="text-brand-300 text-lg font-light leading-relaxed max-w-md mb-12">
              The house is available for exclusive use rentals. Due to high demand during peak season, we recommend inquiring at least 3 months in advance.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex flex-col gap-1">
              <span className="text-xs uppercase tracking-widest text-brand-500">Contact</span>
              <a href="mailto:sonja@isales.co.za" className="text-xl hover:text-white transition-colors">sonja@isales.co.za</a>
              <a href="tel:+27824485395" className="text-xl hover:text-white transition-colors">082 448 5395</a>
              <a 
                href="https://wa.me/27824485395" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-xl hover:text-white transition-colors flex items-center gap-2 mt-2"
              >
                <MessageCircle className="w-5 h-5" /> WhatsApp Owner
              </a>
            </div>
            <div className="flex flex-col gap-1">
               <span className="text-xs uppercase tracking-widest text-brand-500">Social</span>
               <div className="flex gap-6">
                 <a href="#" className="hover:text-white transition-colors">Instagram</a>
                 <a href="#" className="hover:text-white transition-colors">Facebook</a>
               </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="lg:w-1/2 bg-white text-brand-900 p-12 lg:p-24 flex items-center">
          {status === 'success' ? (
            <div className="w-full text-center py-20">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-3xl mb-4">Request Received</h3>
              <p className="text-brand-500 mb-8 max-w-xs mx-auto">We will confirm availability within 24 hours.</p>
              <button 
                onClick={() => setStatus('idle')}
                className="text-xs uppercase tracking-widest border-b border-brand-900 pb-1 hover:text-brand-500 hover:border-brand-500 transition-all"
              >
                Send Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto space-y-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-brand-400">Check In</label>
                  <input 
                    type="date" 
                    name="checkIn"
                    required
                    className="w-full pb-2 border-b border-brand-200 focus:border-brand-900 outline-none bg-transparent transition-colors font-serif text-lg"
                    value={formData.checkIn}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-brand-400">Check Out</label>
                  <input 
                    type="date" 
                    name="checkOut"
                    required
                    className="w-full pb-2 border-b border-brand-200 focus:border-brand-900 outline-none bg-transparent transition-colors font-serif text-lg"
                    value={formData.checkOut}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-brand-400">Guests</label>
                <select 
                  name="guests"
                  className="w-full pb-2 border-b border-brand-200 focus:border-brand-900 outline-none bg-transparent transition-colors font-serif text-lg"
                  value={formData.guests}
                  onChange={handleChange}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                    <option key={num} value={num}>{num} Guests</option>
                  ))}
                </select>
              </div>

              <div className="space-y-6">
                <input 
                  type="text" 
                  name="name"
                  placeholder="Full Name"
                  required
                  className="w-full pb-4 border-b border-brand-200 focus:border-brand-900 outline-none bg-transparent placeholder-brand-300 transition-colors"
                  value={formData.name}
                  onChange={handleChange}
                />
                <input 
                  type="email" 
                  name="email"
                  placeholder="Email Address"
                  required
                  className="w-full pb-4 border-b border-brand-200 focus:border-brand-900 outline-none bg-transparent placeholder-brand-300 transition-colors"
                  value={formData.email}
                  onChange={handleChange}
                />
                <input 
                  type="tel" 
                  name="phone"
                  placeholder="Phone Number"
                  required
                  className="w-full pb-4 border-b border-brand-200 focus:border-brand-900 outline-none bg-transparent placeholder-brand-300 transition-colors"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <textarea 
                  name="message"
                  rows={2}
                  placeholder="Special Requests"
                  className="w-full pb-4 border-b border-brand-200 focus:border-brand-900 outline-none bg-transparent placeholder-brand-300 transition-colors resize-none"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="group w-full bg-brand-900 text-white py-4 mt-4 flex items-center justify-between px-8 hover:bg-brand-800 transition-colors disabled:opacity-70"
              >
                <span className="text-xs uppercase tracking-[0.2em] font-bold">
                  {status === 'submitting' ? 'Processing...' : 'Request Booking'}
                </span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default BookingForm;