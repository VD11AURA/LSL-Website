import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { href: '/', label: 'Startseite' },
    { href: '/ueber-uns', label: 'Über uns' },
    { href: '/leistungen', label: 'Leistungen' },
    { href: '/warum-kmus', label: 'Warum KMUs' },
    { href: '/referenzen', label: 'Referenzen' },
    { href: '/kontakt', label: 'Kontakt' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center">
            <img 
              src="/images/logo.png" 
              alt="Limburg Strategy Lab Logo" 
              className="h-12 w-auto mr-3"
            />
            <div className="hidden sm:block">
              <div className="text-lg font-bold text-blue-900">
                Limburg Strategy Lab
              </div>
              <div className="text-xs text-gray-600">
                Consulting für KMUs
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-gray-700 hover:text-blue-900 transition-colors font-medium ${
                  isActive(item.href) ? 'text-blue-900 border-b-2 border-blue-900' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Link
              to="/kontakt"
              className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors font-medium"
            >
              Kostenlose Beratung
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`text-gray-700 hover:text-blue-900 transition-colors font-medium ${
                    isActive(item.href) ? 'text-blue-900' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/kontakt"
                className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors font-medium text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Kostenlose Beratung
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
