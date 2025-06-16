import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Limburg Strategy Lab</h3>
            <p className="text-gray-300 mb-4">
              Ihr Partner für strategische Beratung und nachhaltiges Wachstum.
              Spezialisiert auf kleine und mittlere Unternehmen.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/company/limburg-strategy-lab"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Startseite
                </Link>
              </li>
              <li>
                <Link to="/ueber-uns" className="text-gray-300 hover:text-white transition-colors">
                  Über uns
                </Link>
              </li>
              <li>
                <Link to="/leistungen" className="text-gray-300 hover:text-white transition-colors">
                  Leistungen
                </Link>
              </li>
              <li>
                <Link to="/warum-kmus" className="text-gray-300 hover:text-white transition-colors">
                  Warum KMUs
                </Link>
              </li>
              <li>
                <Link to="/referenzen" className="text-gray-300 hover:text-white transition-colors">
                  Referenzen
                </Link>
              </li>
              <li>
                <Link to="/kontakt" className="text-gray-300 hover:text-white transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-1 text-blue-400 flex-shrink-0" />
                <div className="text-gray-300">
                  <div>Domstraße 12</div>
                  <div>65549 Limburg an der Lahn</div>
                  <div>Deutschland</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <a
                  href="tel:+4964319750"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  +49 6431 975-0
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <a
                  href="mailto:info@limburg-strategy-lab.de"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  info@limburg-strategy-lab.de
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Limburg Strategy Lab. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
