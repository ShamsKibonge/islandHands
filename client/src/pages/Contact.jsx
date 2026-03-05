import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    // Simulate an API call delay
    setTimeout(() => {
      setStatus({ type: 'success', message: 'Thank you! Your request has been sent successfully (Demo Mode).' });
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const serviceTypes = [
    'Janitorial (Commercial/Municipal)',
    'Office & House Cleaning',
    'Carpet Cleaning',
    'Moving & Delivery',
    'Pressure Washing',
    'Demolition',
    'General Labor'
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header */}
      <section className="relative py-24 flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src="img/floor-cleaning-office.jpg" 
            alt="Contact Us" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-blue/80 backdrop-blur-sm"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">{t('contact.title')}</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-brand-blue mb-8">Get In Touch</h2>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-brand-accent/10 p-4 rounded-xl text-brand-accent mr-6">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-blue">Phone</h3>
                  <p className="text-gray-600">(360) XXX-XXXX</p>
                  <p className="text-sm text-gray-500 mt-1">Mon - Fri, 8:00am - 6:00pm</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-brand-accent/10 p-4 rounded-xl text-brand-accent mr-6">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-blue">Email</h3>
                  <p className="text-gray-600">info@islandhands.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-brand-accent/10 p-4 rounded-xl text-brand-accent mr-6">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-blue">Service Area</h3>
                  <p className="text-gray-600">Bainbridge Island, WA</p>
                  <p className="text-gray-600">Serving all of Kitsap County</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-brand-accent/10 p-4 rounded-xl text-brand-accent mr-6">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-blue">Response Time</h3>
                  <p className="text-gray-600 italic">"We promise a response to all quotes within 24 business hours."</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-12 h-64 bg-gray-100 rounded-2xl border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400 font-medium">
              <div className="text-center">
                <MapPin className="w-10 h-10 mx-auto mb-2 opacity-50" />
                Map Placeholder (Bainbridge Island, WA)
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold text-brand-blue mb-8">{t('contact.form_title')}</h3>
            
            {status.message && (
              <div className={`mb-8 p-4 rounded-xl flex items-center space-x-3 ${status.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {status.type === 'success' && <CheckCircle2 className="w-5 h-5 flex-shrink-0" />}
                <span className="font-medium">{status.message}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all outline-none"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all outline-none"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all outline-none"
                    placeholder="(000) 000-0000"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Service Type *</label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all outline-none bg-white"
                  >
                    <option value="">Select a service</option>
                    {serviceTypes.map((s, i) => (
                      <option key={i} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Project Details / Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all outline-none resize-none"
                  placeholder="Tell us about your cleaning or labor needs..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-brand-accent text-white py-4 rounded-xl font-black text-lg flex items-center justify-center space-x-3 shadow-lg shadow-brand-accent/20 transition-all active:scale-[0.98] ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-brand-accent/90'}`}
              >
                {isSubmitting ? (
                  <span>Processing...</span>
                ) : (
                  <>
                    <span>Submit Request</span>
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
