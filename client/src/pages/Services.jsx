import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { CheckCircle, Building2, Home as HomeIcon, Waves, Truck, Trash2, Hammer, ShieldCheck } from 'lucide-react';

const Services = () => {
  const { t } = useTranslation();

  const commercialServices = [
    {
      title: t('services.janitorial'),
      desc: t('services.janitorial_desc'),
      img: '/img/commercial-cleaning.jpg',
      features: ['Daily/Weekly maintenance', 'Floor care & waxing', 'Sanitization protocols', 'Restroom deep cleaning']
    },
    {
      title: t('services.carpet'),
      desc: t('services.carpet_desc'),
      img: '/img/carpet-machine.jpg',
      features: ['Deep steam extraction', 'Stain & odor removal', 'Quick drying times', 'Fabric protection']
    },
    {
      title: t('services.sanitizing'),
      desc: t('services.sanitizing_desc'),
      img: '/img/sanitizing-backpack.jpg',
      features: ['EPA-approved disinfectants', 'Large area coverage', 'Safe for all surfaces', 'Health-focused approach']
    }
  ];

  const residentialServices = [
    {
      title: t('services.residential'),
      desc: t('services.residential_desc'),
      img: '/img/residential-cleaning.jpg',
      features: ['Standard & deep cleans', 'Move-in/Move-out', 'Post-construction', 'Eco-friendly options']
    },
    {
      title: t('services.moving'),
      desc: t('services.moving_desc'),
      img: '/img/moving-service.jpg',
      features: ['Furniture assembly', 'Loading & unloading', 'Delivery & pickup', 'Heavy lifting']
    }
  ];

  const otherServices = [
    { title: 'Pressure Washing', icon: <Waves className="w-6 h-6" /> },
    { title: 'Demolition', icon: <Hammer className="w-6 h-6" /> },
    { title: 'General Labor', icon: <Trash2 className="w-6 h-6" /> },
    { title: 'Delivery & Pickup', icon: <Truck className="w-6 h-6" /> },
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-brand-blue py-20 px-4">
        <div className="max-w-7xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('services.title')}</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>
      </section>

      {/* Commercial / Municipal */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-4 mb-12">
          <Building2 className="w-10 h-10 text-brand-accent" />
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue uppercase tracking-tight">{t('services.commercial_title')}</h2>
        </div>
        
        <div className="space-y-20">
          {commercialServices.map((service, idx) => (
            <div key={idx} className={`flex flex-col lg:flex-row gap-12 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2">
                <img src={service.img} alt={service.title} className="rounded-2xl shadow-2xl w-full h-[400px] object-cover" />
              </div>
              <div className="lg:w-1/2">
                <h3 className="text-2xl md:text-3xl font-bold text-brand-blue mb-4">{service.title}</h3>
                <p className="text-gray-600 text-lg mb-8">{service.desc}</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                  {service.features.map((f, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-brand-accent mr-3 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="inline-block bg-brand-accent text-white px-8 py-3 rounded-md font-bold hover:shadow-lg transition-all">
                  {t('nav.request_quote')}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Commercial Ready Banner */}
      <section className="bg-gray-50 py-16 border-y border-gray-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-block bg-brand-blue text-white px-4 py-1 rounded-full text-sm font-bold mb-6">{t('services.ready_badge')}</div>
          <h2 className="text-3xl font-bold text-brand-blue mb-4">{t('services.ready_title')}</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            {t('services.ready_desc')}
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <span className="bg-white border border-gray-300 px-4 py-2 rounded-lg font-semibold text-gray-700">Professional Safety Gear</span>
            <span className="bg-white border border-gray-300 px-4 py-2 rounded-lg font-semibold text-gray-700">Background Checked Staff</span>
            <span className="bg-white border border-gray-300 px-4 py-2 rounded-lg font-semibold text-gray-700">Hazardous Waste Training</span>
          </div>
        </div>
      </section>

      {/* Residential */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-4 mb-12">
          <HomeIcon className="w-10 h-10 text-brand-accent" />
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue uppercase tracking-tight">{t('services.residential_title')}</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {residentialServices.map((service, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg group">
              <div className="h-64 overflow-hidden">
                <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-brand-blue mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.desc}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((f, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-brand-accent mr-3" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="block text-center border-2 border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-white font-bold py-3 rounded-md transition-colors">
                  {t('nav.request_quote')}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Safety Section */}
      <section className="py-24 bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img src="/img/bathroom-safety.jpg" alt="Safety Standard" className="rounded-2xl shadow-xl w-full h-[400px] object-cover" />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold text-brand-blue mb-6">{t('services.safety_title')}</h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              {t('services.safety_desc')}
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <ShieldCheck className="w-6 h-6 text-brand-accent mr-4 flex-shrink-0" />
                <span className="text-gray-700 font-medium">OSHA-compliant safety practices</span>
              </div>
              <div className="flex items-start">
                <ShieldCheck className="w-6 h-6 text-brand-accent mr-4 flex-shrink-0" />
                <span className="text-gray-700 font-medium">Proper hazardous material handling</span>
              </div>
              <div className="flex items-start">
                <ShieldCheck className="w-6 h-6 text-brand-accent mr-4 flex-shrink-0" />
                <span className="text-gray-700 font-medium">Regular safety audits and training</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services Grid */}

      <section className="py-24 bg-brand-blue text-white px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">{t('services.other_title')}</h2>
          <div className="w-24 h-1 bg-brand-accent mx-auto"></div>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {otherServices.map((s, idx) => (
            <div key={idx} className="flex flex-col items-center p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-all">
              <div className="text-brand-accent mb-4">{s.icon}</div>
              <span className="text-xl font-bold">{s.title}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
