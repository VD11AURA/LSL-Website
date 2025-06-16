import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Users, TrendingUp, CheckCircle } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface Company {
  name: string;
  mission: string;
  vision: string;
  values: string[];
}

const Home = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [company, setCompany] = useState<Company | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [servicesRes, companyRes] = await Promise.all([
          fetch('/data/services.json'),
          fetch('/data/company.json'),
        ]);
        
        const servicesData = await servicesRes.json();
        const companyData = await companyRes.json();
        
        setServices(servicesData.slice(0, 3)); // Show first 3 services
        setCompany(companyData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20"
        style={{
          backgroundImage: 'linear-gradient(rgba(30, 58, 138, 0.8), rgba(29, 78, 216, 0.8)), url(/images/hero-consulting.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Strategisches Consulting für <span className="text-blue-300">KMUs</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100">
              {company?.mission || 'Wir begleiten kleine und mittlere Unternehmen dabei, ihre strategischen Ziele zu erreichen und nachhaltiges Wachstum zu generieren.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/kontakt"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
              >
                Kostenlose Beratung anfragen
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/leistungen"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
              >
                Unsere Leistungen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Warum Limburg Strategy Lab?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wir verstehen die besonderen Herausforderungen von KMUs und bieten maßgeschneiderte Lösungen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Zielgerichtet</h3>
              <p className="text-gray-600">
                Individuelle Strategien, die genau auf Ihre Unternehmensziele abgestimmt sind.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Erfahren</h3>
              <p className="text-gray-600">
                Über 15 Jahre Erfahrung in der Beratung von kleinen und mittleren Unternehmen.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Erfolgsorientiert</h3>
              <p className="text-gray-600">
                Messbare Ergebnisse und nachhaltiges Wachstum für Ihr Unternehmen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Unsere Kernleistungen
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professionelle Beratung in allen wichtigen Bereichen der Unternehmensführung
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link
                    to="/leistungen"
                    className="text-blue-900 font-medium hover:text-blue-700 inline-flex items-center"
                  >
                    Mehr erfahren
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/leistungen"
              className="bg-blue-900 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition-colors font-medium inline-flex items-center"
            >
              Alle Leistungen ansehen
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Values Section */}
      {company && (
        <section className="py-16 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Unsere Werte
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Diese Prinzipien leiten uns bei jeder Beratung
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {company.values.map((value, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                  <CheckCircle className="h-8 w-8 text-blue-900 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900">{value}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Bereit für den nächsten Schritt?
          </h2>
          <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Lassen Sie uns gemeinsam eine Strategie für Ihren Erfolg entwickeln.
            Kontaktieren Sie uns für eine kostenlose Erstberatung.
          </p>
          <Link
            to="/kontakt"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-500 transition-colors font-semibold inline-flex items-center"
          >
            Jetzt Beratung anfragen
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
