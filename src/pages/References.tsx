import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Quote, Star, TrendingUp, Users, Target } from 'lucide-react';

interface Testimonial {
  id: number;
  company: string;
  industry: string;
  quote: string;
  author: string;
  position: string;
  result: string;
  projectType: string;
}

const References = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch('/data/testimonials.json');
        const data = await response.json();
        setTestimonials(data);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
    };

    fetchTestimonials();
  }, []);

  const getProjectIcon = (projectType: string) => {
    switch (projectType.toLowerCase()) {
      case 'digitalisierungsberatung':
        return <Target className="h-6 w-6" />;
      case 'strategieentwicklung':
        return <TrendingUp className="h-6 w-6" />;
      case 'change management':
        return <Users className="h-6 w-6" />;
      default:
        return <Star className="h-6 w-6" />;
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative py-20 text-white"
        style={{
          backgroundImage: 'linear-gradient(rgba(30, 58, 138, 0.8), rgba(29, 78, 216, 0.8)), url(/images/office-background.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Erfolgsgeschichten
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-100">
              Erfahren Sie, wie wir anderen KMUs zu nachhaltigem Erfolg verholfen haben
            </p>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Unsere Erfolge in Zahlen
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-10 w-10 text-white" />
              </div>
              <div className="text-3xl font-bold text-blue-900 mb-2">200+</div>
              <div className="text-lg text-gray-700">Erfolgreiche Projekte</div>
            </div>

            <div className="text-center">
              <div className="bg-blue-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-white" />
              </div>
              <div className="text-3xl font-bold text-blue-900 mb-2">95%</div>
              <div className="text-lg text-gray-700">Kundenzufriedenheit</div>
            </div>

            <div className="text-center">
              <div className="bg-blue-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-10 w-10 text-white" />
              </div>
              <div className="text-3xl font-bold text-blue-900 mb-2">25%</div>
              <div className="text-lg text-gray-700">Durchschnittl. Effizienzsteigerung</div>
            </div>

            <div className="text-center">
              <div className="bg-blue-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-10 w-10 text-white" />
              </div>
              <div className="text-3xl font-bold text-blue-900 mb-2">15</div>
              <div className="text-lg text-gray-700">Jahre Erfahrung</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Was unsere Kunden sagen
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Authentische Bewertungen von Unternehmen, die mit uns erfolgreich waren
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-lg shadow-lg p-8 relative">
                <div className="absolute top-4 right-4 text-blue-900">
                  <Quote className="h-8 w-8" />
                </div>
                
                <div className="mb-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-900 w-12 h-12 rounded-full flex items-center justify-center mr-4 text-white">
                      {getProjectIcon(testimonial.projectType)}
                    </div>
                    <div>
                      <div className="text-sm text-blue-900 font-semibold">
                        {testimonial.projectType}
                      </div>
                      <div className="text-sm text-gray-600">
                        {testimonial.industry}
                      </div>
                    </div>
                  </div>
                  
                  <blockquote className="text-lg text-gray-700 italic mb-6">
                    "{testimonial.quote}"
                  </blockquote>
                </div>

                <div className="border-t pt-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-gray-600">
                        {testimonial.position}
                      </div>
                      <div className="text-sm text-gray-600">
                        {testimonial.company}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-600">
                        {testimonial.result}
                      </div>
                      <div className="text-sm text-gray-600">
                        Ergebnis
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Highlights */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Projekt-Highlights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Einblicke in unsere erfolgreichsten Beratungsprojekte
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-blue-900 mb-4">
                <Target className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Digitale Transformation</h3>
              <p className="text-gray-700 mb-4">
                Vollständige Digitalisierung eines Familienunternehmens mit 50 Mitarbeitern.
              </p>
              <div className="text-green-600 font-semibold">
                Ergebnis: 40% Effizienzsteigerung
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-blue-900 mb-4">
                <TrendingUp className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Strategische Neuausrichtung</h3>
              <p className="text-gray-700 mb-4">
                Entwicklung einer neuen Marktstrategie für einen Maschinenbaubetrieb.
              </p>
              <div className="text-green-600 font-semibold">
                Ergebnis: 15% Umsatzwachstum
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-blue-900 mb-4">
                <Users className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Change Management</h3>
              <p className="text-gray-700 mb-4">
                Erfolgreiche Implementierung neuer Arbeitsstrukturen in einem Handelsunternehmen.
              </p>
              <div className="text-green-600 font-semibold">
                Ergebnis: 100% Mitarbeiterakzeptanz
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Branchen-Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Erfolgreich in verschiedenen Industrien und Geschäftsbereichen
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-900 mb-2">25%</div>
              <div className="text-sm text-gray-700">Produktion & Fertigung</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-900 mb-2">20%</div>
              <div className="text-sm text-gray-700">Handel & Vertrieb</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-900 mb-2">15%</div>
              <div className="text-sm text-gray-700">IT & Software</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-900 mb-2">12%</div>
              <div className="text-sm text-gray-700">Dienstleistung</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-900 mb-2">10%</div>
              <div className="text-sm text-gray-700">Gesundheitswesen</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-900 mb-2">8%</div>
              <div className="text-sm text-gray-700">Logistik</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-900 mb-2">6%</div>
              <div className="text-sm text-gray-700">Tourismus</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-900 mb-2">4%</div>
              <div className="text-sm text-gray-700">Andere</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Werden Sie Teil unserer Erfolgsgeschichten
          </h2>
          <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Lassen Sie uns gemeinsam Ihre nächste Erfolgsgeschichte schreiben.
            Kontaktieren Sie uns für eine kostenlose Erstberatung.
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

export default References;
