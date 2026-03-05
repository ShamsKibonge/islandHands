import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ShieldCheck, Zap, Map, Briefcase, ChevronRight, CheckCircle2 } from 'lucide-react';

const Home = () => {
  const { t } = useTranslation();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Island Hands, LLC",
    "image": "https://islandhands.com/img/hero-cleaning.jpg",
    "@id": "",
    "url": "https://islandhands.com",
    "telephone": "(360) XXX-XXXX",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Bainbridge Island",
      "addressRegion": "WA",
      "postalCode": "98110",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 47.6263,
      "longitude": -122.521
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    }
  };

  const services = [
    { 
      title: t('services.janitorial'), 
      desc: t('services.janitorial_desc'), 
      img: '/img/commercial-cleaning.jpg' 
    },
    { 
      title: t('services.residential'), 
      desc: t('services.residential_desc'), 
      img: '/img/residential-cleaning.jpg' 
    },
    { 
      title: t('services.carpet'), 
      desc: t('services.carpet_desc'), 
      img: '/img/carpet-machine.jpg' 
    },
    { 
      title: t('services.moving'), 
      desc: t('services.moving_desc'), 
      img: '/img/moving-service.jpg' 
    }
  ];

  return (
    <div className="bg-gray-50">
      <Helmet>
        <title>Island Hands, LLC | Professional Facility & Service Partner - Bainbridge Island</title>
        <meta name="description" content="Professional janitorial, residential cleaning, and labor services on Bainbridge Island and Kitsap County. Insured and bonded-ready for commercial and municipal contracts." />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/img/hero-cleaning.jpg" 
            alt="Island Hands Cleaning" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-blue/60 backdrop-blur-[2px]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
            {t('hero.headline')}
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-2xl text-gray-200">
            {t('hero.subheadline')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/contact" 
              className="bg-brand-accent hover:bg-brand-accent/90 text-white px-8 py-4 rounded-md font-bold text-lg text-center transition-all transform hover:scale-105"
            >
              {t('hero.cta')}
            </Link>
            <Link 
              to="/services" 
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border-2 border-white/30 px-8 py-4 rounded-md font-bold text-lg text-center transition-all"
            >
              {t('hero.explore')}
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Badges Strip */}
      <section className="bg-white border-y border-gray-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center space-x-3 text-brand-blue">
              <ShieldCheck className="w-8 h-8 text-brand-accent flex-shrink-0" />
              <span className="font-bold text-sm uppercase tracking-wider">{t('trust.insured')}</span>
            </div>
            <div className="flex items-center space-x-3 text-brand-blue">
              <Zap className="w-8 h-8 text-brand-accent flex-shrink-0" />
              <span className="font-bold text-sm uppercase tracking-wider">{t('trust.fast')}</span>
            </div>
            <div className="flex items-center space-x-3 text-brand-blue">
              <Map className="w-8 h-8 text-brand-accent flex-shrink-0" />
              <span className="font-bold text-sm uppercase tracking-wider">{t('trust.local')}</span>
            </div>
            <div className="flex items-center space-x-3 text-brand-blue">
              <Briefcase className="w-8 h-8 text-brand-accent flex-shrink-0" />
              <span className="font-bold text-sm uppercase tracking-wider">{t('trust.commercial')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">{t('home.services_title')}</h2>
          <div className="w-24 h-1 bg-brand-accent mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {t('home.services_subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group border border-gray-100">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-brand-blue/10 group-hover:bg-transparent transition-colors"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-brand-blue mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {service.desc}
                </p>
                <Link 
                  to="/services" 
                  className="inline-flex items-center font-bold text-brand-accent hover:text-brand-blue transition-colors group"
                >
                  {t('services.learn_more')}
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How it Works */}
      <section className="bg-brand-blue py-24 px-4 overflow-hidden relative">
        <div className="absolute -right-24 -top-24 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute -left-24 -bottom-24 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('home.how_it_works_title')}</h2>
            <div className="w-24 h-1 bg-brand-accent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { step: '01', title: t('steps.step1_title'), desc: t('steps.step1_desc') },
              { step: '02', title: t('steps.step2_title'), desc: t('steps.step2_desc') },
              { step: '03', title: t('steps.step3_title'), desc: t('steps.step3_desc') }
            ].map((item, idx) => (
              <div key={idx} className="text-center group">
                <div className="inline-block bg-brand-accent text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-black mb-6 shadow-lg shadow-brand-accent/20 group-hover:scale-110 transition-transform">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section / Equipment */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-6">{t('home.equipment_title')}</h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              {t('home.equipment_desc')}
            </p>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-700 font-medium">
                <CheckCircle2 className="w-5 h-5 text-green-500 mr-3" />
                {t('home.equipment_feat1')}
              </li>
              <li className="flex items-center text-gray-700 font-medium">
                <CheckCircle2 className="w-5 h-5 text-green-500 mr-3" />
                {t('home.equipment_feat2')}
              </li>
              <li className="flex items-center text-gray-700 font-medium">
                <CheckCircle2 className="w-5 h-5 text-green-500 mr-3" />
                {t('home.equipment_feat3')}
              </li>
            </ul>
            <div className="mt-10">
              <Link 
                to="/about" 
                className="inline-block bg-brand-blue text-white px-8 py-3 rounded-md font-bold hover:bg-brand-blue/90 transition-colors"
              >
                {t('home.equipment_cta')}
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img src="/img/equipment-van-1.jpg" alt="Our Van" className="rounded-xl shadow-md w-full h-64 object-cover" />
              <img src="/img/equipment-closeup.jpg" alt="Equipment" className="rounded-xl shadow-md w-full h-48 object-cover" />
            </div>
            <div className="pt-8">
              <img src="/img/equipment-van-2.jpg" alt="Equipment" className="rounded-xl shadow-md w-full h-[360px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-6">{t('home.cta_title')}</h2>
          <p className="text-xl text-gray-600 mb-10">
            {t('home.cta_subtitle')}
          </p>
          <Link 
            to="/contact" 
            className="bg-brand-accent hover:bg-brand-accent/90 text-white px-10 py-5 rounded-md font-extrabold text-xl shadow-xl shadow-brand-accent/20 transition-all transform hover:-translate-y-1 inline-block"
          >
            {t('home.cta_button')}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
