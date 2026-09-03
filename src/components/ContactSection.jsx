import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Instagram, Facebook, Send, CheckCircle2, MessageSquare, Sparkles } from 'lucide-react';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    city: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', city: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#FAF7F2] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#9E3B24]/10 border border-[#9E3B24]/20 text-[#9E3B24] text-xs font-semibold uppercase tracking-widest mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Connect & Share Food Feedback</span>
          </div>
          <h2 className="font-festive text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight mb-4">
            Contact & Community
          </h2>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            Have a traditional recipe from your hometown in Andhra Pradesh that should be featured? Drop us a message!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-8 border border-stone-200/90 shadow-xl flex flex-col justify-between space-y-8">
            <div>
              <h3 className="font-festive text-2xl font-bold text-stone-900 mb-4">
                Get in Touch
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed mb-6">
                We welcome culinary stories, regional food corrections, and authentic photographs from heritage kitchens across Andhra Pradesh.
              </p>

              <div className="space-y-5">
                
                {/* Email Box */}
                <a 
                  href="mailto:sairaghavendra937@gmail.com"
                  className="group flex items-center gap-4 p-5 rounded-2xl bg-stone-50 border border-stone-200 hover:border-[#9E3B24] transition-all hover:scale-[1.02] shadow-sm block"
                >
                  <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-amber-500/10 rounded-full blur-xl group-hover:bg-amber-500/20 transition-all"></div>
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-700/30 text-amber-300 border border-amber-400/30 flex items-center justify-center shrink-0 group-hover:rotate-6 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="block text-[10px] uppercase tracking-widest text-amber-400 font-bold">Email Us Directly</span>
                    <span className="text-amber-100 text-sm sm:text-base hover:text-amber-300 transition-colors font-medium break-all block">
                      sairaghavendra937@gmail.com
                    </span>
                  </div>
                </a>

              </div>
            </div>

            {/* Social Links */}
            <div>
              <span className="block text-xs font-bold text-amber-300 uppercase tracking-wider mb-3">
                Follow Telugu Food Stories
              </span>
              <div className="flex gap-3">
                <a
                  href="#instagram"
                  className="px-4 py-2.5 rounded-xl bg-[#1C0D07] hover:bg-amber-500/20 text-amber-200 border border-amber-500/30 text-xs font-semibold flex items-center gap-2 transition-all"
                >
                  <Instagram className="w-4 h-4 text-pink-400" />
                  <span>Instagram</span>
                </a>
                <a
                  href="#facebook"
                  className="px-4 py-2.5 rounded-xl bg-[#1C0D07] hover:bg-amber-500/20 text-amber-200 border border-amber-500/30 text-xs font-semibold flex items-center gap-2 transition-all"
                >
                  <Facebook className="w-4 h-4 text-blue-400" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Feedback Form */}
          <div className="lg:col-span-7 bg-[#2B160C]/90 rounded-3xl p-8 border border-amber-500/30 shadow-2xl">
            <h3 className="font-festive text-2xl font-bold text-amber-100 mb-2">
              Suggest a Heritage Food
            </h3>
            <p className="text-amber-200/70 text-sm mb-6">
              Is there a famous dish in your city that isn't listed here? Send us the details!
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#245428]/80 border border-emerald-400/50 p-8 rounded-2xl text-center space-y-3"
              >
                <CheckCircle2 className="w-12 h-12 text-emerald-300 mx-auto" />
                <h4 className="font-festive text-2xl font-bold text-emerald-100">Thank You!</h4>
                <p className="text-emerald-200/80 text-sm">
                  Your feedback and food suggestion has been recorded for our Telugu culinary archive.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-amber-300 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ramakrishna"
                      className="w-full px-4 py-3 rounded-xl bg-[#1C0D07] border border-amber-500/30 text-amber-100 text-sm focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-amber-300 mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="ram@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#1C0D07] border border-amber-500/30 text-amber-100 text-sm focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-amber-300 mb-1">
                    Hometown / City Name
                  </label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="e.g. Tenali, Karimnagar, Eluru..."
                    className="w-full px-4 py-3 rounded-xl bg-[#1C0D07] border border-amber-500/30 text-amber-100 text-sm focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-amber-300 mb-1">
                    Food Name & Details
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about the dish, why it is famous, and key ingredients..."
                    className="w-full px-4 py-3 rounded-xl bg-[#1C0D07] border border-amber-500/30 text-amber-100 text-sm focus:outline-none focus:border-amber-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#7A1C1C] via-[#A32828] to-[#D4AF37] text-amber-100 font-bold text-sm shadow-festive hover:scale-[1.01] transition-transform flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-amber-300" />
                  <span>Submit Culinary Suggestion</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
