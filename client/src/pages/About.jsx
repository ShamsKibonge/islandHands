import { useTranslation } from 'react-i18next';
import { Target, Heart, Award, ShieldCheck } from 'lucide-react';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-brand-blue py-20 px-4">
        <div className="max-w-7xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('about.title')}</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>
      </section>

      {/* Local Story */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-brand-blue mb-6">{t('about.story_title')}</h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Island Hands, LLC was founded on the principles of hard work, reliability, and community service. Based right here on Bainbridge Island, we understand the unique needs of our neighbors—from municipal facilities requiring strict adherence to safety standards to local businesses and residential homes.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              We aren't just another cleaning company; we are your "Professional Facility & Service Partner." Whether it's janitorial work for a public building or moving help for a local family, we bring the same level of professionalism and care to every job.
            </p>
          </div>
          <div className="relative">
            <img src="/img/training-certificate.jpg" alt="Training Certificate" className="rounded-2xl shadow-2xl w-full h-auto border-8 border-white" />
            <div className="absolute -bottom-6 -right-6 bg-brand-accent text-white p-6 rounded-xl shadow-xl hidden md:block">
              <span className="text-4xl font-black block">100%</span>
              <span className="text-sm font-bold uppercase tracking-wider">Committed to Quality</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="bg-gray-50 py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-brand-blue mb-4">{t('about.mission_title')}</h2>
          <div className="w-24 h-1 bg-brand-accent mx-auto"></div>
        </div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-brand-accent">
            <Target className="w-12 h-12 text-brand-accent mb-6" />
            <h3 className="text-xl font-bold text-brand-blue mb-4">Our Mission</h3>
            <p className="text-gray-600">To provide exceptional facility and residential services that enhance the safety, cleanliness, and efficiency of our local community.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-brand-accent">
            <Heart className="w-12 h-12 text-brand-accent mb-6" />
            <h3 className="text-xl font-bold text-brand-blue mb-4">Community Focused</h3>
            <p className="text-gray-600">We take pride in serving Bainbridge Island and Kitsap County, treating every project as if it were for our own family.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-brand-accent">
            <ShieldCheck className="w-12 h-12 text-brand-accent mb-6" />
            <h3 className="text-xl font-bold text-brand-blue mb-4">Integrity & Safety</h3>
            <p className="text-gray-600">Fully insured and trained in modern safety protocols, ensuring peace of mind for our clients and staff.</p>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-brand-blue mb-4">{t('about.who_serve_title')}</h2>
          <p className="text-gray-600 text-lg">Diverse solutions for a diverse community.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative group overflow-hidden rounded-2xl h-64">
            <img src="/img/commercial-cleaning.jpg" alt="Municipal" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-brand-blue/70 flex flex-col justify-end p-6">
              <h3 className="text-white text-xl font-bold">Municipal & Government</h3>
              <p className="text-gray-300 text-sm">Public buildings, schools, and local facilities.</p>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-2xl h-64">
            <img src="/img/floor-cleaning-office.jpg" alt="Commercial" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-brand-blue/70 flex flex-col justify-end p-6">
              <h3 className="text-white text-xl font-bold">Commercial Businesses</h3>
              <p className="text-gray-300 text-sm">Offices, retail spaces, and property management.</p>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-2xl h-64">
            <img src="/img/residential-cleaning.jpg" alt="Residential" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-brand-blue/70 flex flex-col justify-end p-6">
              <h3 className="text-white text-xl font-bold">Residential Homes</h3>
              <p className="text-gray-300 text-sm">Private residences and vacation rentals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Banner */}
      <section className="bg-brand-blue py-16 text-white text-center px-4">
        <Award className="w-16 h-16 text-brand-accent mx-auto mb-6" />
        <h2 className="text-3xl font-bold mb-4">Insured, Bonded & Professionally Trained</h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          We meet and exceed all local and state requirements for commercial and municipal service contracts.
        </p>
      </section>
    </div>
  );
};

export default About;
