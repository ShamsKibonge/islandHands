import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-blue text-white pt-12 pb-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div>
          <h3 className="text-xl font-bold mb-4">Island Hands, LLC</h3>
          <p className="text-gray-300 mb-6">
            Professional Facility & Service Partner. Reliable, insured, and dedicated to excellence on Bainbridge Island and Kitsap County.
          </p>
          <div className="flex space-x-4">
            {/* Social links placeholder */}
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4 underline decoration-brand-accent decoration-2 underline-offset-4">
            {t('nav.services')}
          </h4>
          <ul className="space-y-2 text-gray-300">
            <li>Janitorial (Commercial/Municipal)</li>
            <li>Office & House Cleaning</li>
            <li>Carpet Cleaning</li>
            <li>Moving & Delivery</li>
            <li>Pressure Washing & Demolition</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4 underline decoration-brand-accent decoration-2 underline-offset-4">
            Contact Us
          </h4>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-center">
              <Phone className="w-5 h-5 mr-3 text-brand-accent" />
              <span>(360) XXX-XXXX</span>
            </li>
            <li className="flex items-center">
              <Mail className="w-5 h-5 mr-3 text-brand-accent" />
              <span>info@islandhands.com</span>
            </li>
            <li className="flex items-center">
              <MapPin className="w-5 h-5 mr-3 text-brand-accent" />
              <span>Bainbridge Island, WA (Serving Kitsap County)</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
        <p>&copy; {currentYear} Island Hands, LLC. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <Link to="/" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
