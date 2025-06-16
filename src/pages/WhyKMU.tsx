import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Heart, DollarSign, Target, Users, TrendingUp } from 'lucide-react';

interface WhyKMUData {
  title: string;
  subtitle: string;
  points: {
    title: string;
    description: string;
  }[];
}

const WhyKMU = () => {
  const [whyKMUData, setWhyKMUData] = useState<WhyKMUData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/company.json');
        const data = await response.json();
        setWhyKMUData(data.whyKMU);
      } catch (error) {
        console.error('Error fetching KMU data:', error);
      }
    };

    fetchData();
  }, []);

  const icons = [Zap, Heart, DollarSign, Target];

  if (!whyKMUData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-gray-600">Laden...</div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative py-20 text-white"
        style={{
          backgroundImage: 'linear-gradient(rgba(30, 58, 138, 0.8), rgba(29, 78, 216, 0.8)), url(/images/sme-business.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {whyKMUData.title}
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-100">
              {whyKMUData.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {whyKMUData.points.map((point, index) => {
              const IconComponent = icons[index];
              return (
                <div key={index} className="flex items-start">
                  <div className="bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {point.title}
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              KMUs in Deutschland
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Zahlen und Fakten über die Bedeutung kleiner und mittlerer Unternehmen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="bg-blue-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-white" />
              </div>
              <div className="text-3xl font-bold text-blue-900 mb-2">99,5%</div>
              <div className="text-lg text-gray-700">aller Unternehmen in Deutschland</div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="bg-blue-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-10 w-10 text-white" />
              </div>
              <div className="text-3xl font-bold text-blue-900 mb-2">60%</div>
              <div className="text-lg text-gray-700">aller Arbeitsplätze</div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="bg-blue-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-10 w-10 text-white" />
              </div>
              <div className="text-3xl font-bold text-blue-900 mb-2">55%</div>
              <div className="text-lg text-gray-700">der Bruttowertschöpfung</div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Typische Herausforderungen für KMUs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wir verstehen die spezifischen Probleme und entwickeln passende Lösungen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Begrenzte Ressourcen</h3>
              <p className="text-gray-700">
                Weniger Personal und Budget für strategische Projekte
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Digitalisierungsdruck</h3>
              <p className="text-gray-700">
                Notwendigkeit der digitalen Transformation bei begrenztem Know-how
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-yellow-500">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Fachkräftemangel</h3>
              <p className="text-gray-700">
                Schwierigkeiten bei der Gewinnung und Bindung qualifizierter Mitarbeiter
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Wettbewerbsdruck</h3>
              <p className="text-gray-700">
                Konkurrenz zu größeren Unternehmen und internationalen Anbietern
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Regulatorische Anforderungen</h3>
              <p className="text-gray-700">
                Komplexe Gesetze und Vorschriften ohne eigene Rechtsabteilung
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Finanzierungshürden</h3>
              <p className="text-gray-700">
                Schwieriger Zugang zu Kapital für Wachstum und Investitionen
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Unsere Lösungen für KMUs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Maßgeschneiderte Beratung, die zu Ihrem Budget und Ihren Ressourcen passt
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Modulare Beratung</h3>
              <p className="text-gray-700 mb-4">
                Flexible Beratungsansätze, die sich an Ihr Budget und Ihre zeitlichen Ressourcen anpassen.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Phasenweise Umsetzung</li>
                <li>• Skalierbare Lösungen</li>
                <li>• Priorisierung nach Dringlichkeit</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Praxisnahe Umsetzung</h3>
              <p className="text-gray-700 mb-4">
                Strategien, die Sie mit Ihren vorhandenen Ressourcen tatsächlich umsetzen können.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Realistische Zielsetzung</li>
                <li>• Interne Kompetenzen nutzen</li>
                <li>• Schritt-für-Schritt Anleitungen</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Langfristige Partnerschaft</h3>
              <p className="text-gray-700 mb-4">
                Kontinuierliche Begleitung statt einmaliger Beratung für nachhaltigen Erfolg.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Regelmäßige Check-ups</li>
                <li>• Anpassung an Veränderungen</li>
                <li>• Langfristige Beziehung</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Kosteneffiziente Ansätze</h3>
              <p className="text-gray-700 mb-4">
                Maximaler Nutzen bei optimalem Einsatz Ihrer finanziellen Ressourcen.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Transparente Kostenstruktur</li>
                <li>• ROI-orientierte Projekte</li>
                <li>• Flexible Zahlungsmodelle</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Bereit für den nächsten Schritt?
          </h2>
          <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Lassen Sie uns gemeinsam die Herausforderungen Ihres KMUs angehen und
            nachhaltige Lösungen entwickeln.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/kontakt"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-500 transition-colors font-semibold inline-flex items-center justify-center"
            >
              Kostenlose Beratung anfragen
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/leistungen"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-colors font-semibold"
            >
              Unsere Leistungen ansehen
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyKMU;
