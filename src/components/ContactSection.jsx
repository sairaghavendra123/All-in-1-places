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
    <section id="contact" className="py-20 bg-[#1A0D07] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-widest mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Connect & Share Food Feedback</span>
          </div>
          <h2 className="font-festive text-3xl sm:text-5xl font-bold text-white mb-4">
            Contact & Community
          </h2>
          <p className="text-amber-100/70 text-sm sm:text-base leading-relaxed">
            Have a traditional recipe from your hometown in Andhra Pradesh that should be featured? Drop us a message!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 bg-[#2B160C]/90 rounded-3xl p-8 border border-amber-500/30 shadow-2xl flex flex-col justify-between space-y-8">
            <div>
              <h3 className="font-festive text-2xl font-bold text-amber-100 mb-4">
                Get in Touch
              </h3>
              <p className="text-amber-200/70 text-sm leading-relaxed mb-6">
                We welcome culinary stories, regional food corrections, and authentic photographs from heritage kitchens across Andhra Pradesh.
              </p>

              <div className="space-y-5">
                
                {/* Email Box */}
                <a 
                  href="mailto:sairaghavendra937@gmail.com"
                  className="group flex items-center gap-4 p-4 rounded-2xl bg-[#1C0D07]/90 border border-amber-500/30 hover:border-amber-400/80 transition-all hover:scale-[1.02] shadow-lg relative overflow-hidden block"
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

                {/* WhatsApp Box */}
                <div className="group relative p-5 rounded-2xl bg-gradient-to-br from-[#1C0D07] to-[#0D1F16] border border-emerald-500/40 hover:border-emerald-400 shadow-xl transition-all hover:scale-[1.02]">
                  <div className="absolute -right-6 -top-6 w-28 h-28 bg-emerald-500/15 rounded-full blur-2xl group-hover:bg-emerald-500/25 transition-all"></div>
                  
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500/30 to-teal-700/40 text-emerald-400 border border-emerald-400/40 flex items-center justify-center shrink-0 group-hover:rotate-6 transition-transform">
                        <Phone className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                          </span>
                          <span className="text-[10px] uppercase tracking-widest text-emerald-400 font-extrabold">Instant WhatsApp • Online</span>
                        </div>
                        <a 
                          href="https://wa.me/918309179296" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-white text-base sm:text-lg hover:text-emerald-300 font-bold transition-colors block tracking-wide"
                        >
                          +91 8309179296
                        </a>
                      </div>
                    </div>
                  </div>

                  <a
                    href="https://wa.me/918309179296"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 text-white font-bold text-xs sm:text-sm shadow-lg shadow-emerald-950/60 hover:shadow-emerald-500/40 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 border border-emerald-300/30 group/btn"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-200 group-hover/btn:rotate-12 transition-transform" />
                    <span>Click to Start WhatsApp Chat Now</span>
                  </a>
                </div>

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
