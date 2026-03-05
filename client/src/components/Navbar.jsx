import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe } from 'lucide-react';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.services'), path: '/services' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  const languages = [
    { code: 'en', name: 'EN' },
    { code: 'fr', name: 'FR' },
    { code: 'es', name: 'ES' },
    { code: 'zh-CN', name: 'ZH' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-brand-blue">Island Hands</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-gray-700 hover:text-brand-blue font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
            
            <div className="flex items-center space-x-2 border-l pl-4 ml-4">
              <Globe className="w-4 h-4 text-gray-500" />
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={`text-xs font-semibold px-2 py-1 rounded transition-colors ${
                    i18n.language === lang.code
                      ? 'bg-brand-blue text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {lang.name}
                </button>
              ))}
            </div>

            <Link
              to="/contact"
              className="bg-brand-accent hover:bg-brand-accent/90 text-white px-4 py-2 rounded-md font-bold transition-transform active:scale-95"
            >
              {t('nav.request_quote')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-brand-blue"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-blue hover:bg-gray-50"
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-wrap gap-2 px-3 py-2 border-t mt-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={`text-sm font-semibold px-3 py-1 rounded transition-colors ${
                    i18n.language === lang.code
                      ? 'bg-brand-blue text-white'
                      : 'text-gray-600 bg-gray-100'
                  }`}
                >
                  {lang.name}
                </button>
              ))}
            </div>
            <div className="px-3 pt-4">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-brand-accent text-white px-4 py-3 rounded-md font-bold"
              >
                {t('nav.request_quote')}
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
