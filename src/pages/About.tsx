import { useEffect, useState } from 'react';
import { CheckCircle, Users, Award, TrendingUp } from 'lucide-react';

interface Company {
  name: string;
  mission: string;
  vision: string;
  values: string[];
  story: string;
}

const About = () => {
  const [company, setCompany] = useState<Company | null>(null);

  useEffect(() => {
    const fetchCompanyData = async () => {
      try {
        const response = await fetch('/data/company.json');
        const data = await response.json();
        setCompany(data);
      } catch (error) {
        console.error('Error fetching company data:', error);
      }
    };

    fetchCompanyData();
  }, []);

  if (!company) {
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
          backgroundImage: 'linear-gradient(rgba(30, 58, 138, 0.8), rgba(29, 78, 216, 0.8)), url(/images/office-background.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Über {company.name}
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-100">
              Ihr vertrauensvoller Partner für strategische Beratung und nachhaltiges Wachstum
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Unsere Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {company.mission}
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Unsere Vision</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {company.vision}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Unsere Geschichte
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {company.story}
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Unsere Werte
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Diese Prinzipien bilden das Fundament unserer Arbeit und prägen jede Beratung
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {company.values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{value}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Facts */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Limburg Strategy Lab in Zahlen
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-white" />
              </div>
              <div className="text-3xl font-bold text-blue-900 mb-2">15+</div>
              <div className="text-lg text-gray-700">Jahre Erfahrung</div>
            </div>

            <div className="text-center">
              <div className="bg-blue-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-10 w-10 text-white" />
              </div>
              <div className="text-3xl font-bold text-blue-900 mb-2">200+</div>
              <div className="text-lg text-gray-700">Erfolgreiche Projekte</div>
            </div>

            <div className="text-center">
              <div className="bg-blue-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-10 w-10 text-white" />
              </div>
              <div className="text-3xl font-bold text-blue-900 mb-2">95%</div>
              <div className="text-lg text-gray-700">Kundenzufriedenheit</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Unser Expertenteam
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Erfahrene Berater mit langjähriger Expertise in verschiedenen Branchen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="h-16 w-16 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Dr. Michael Strategen</h3>
              <p className="text-blue-900 font-medium mb-2">Geschäftsführer & Senior Berater</p>
              <p className="text-gray-600">
                15+ Jahre Erfahrung in Strategieentwicklung und Change Management
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="h-16 w-16 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sarah Digital</h3>
              <p className="text-blue-900 font-medium mb-2">Digitalisierungsexpertin</p>
              <p className="text-gray-600">
                Spezialistin für digitale Transformation und Prozessoptimierung
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="h-16 w-16 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Thomas Finanz</h3>
              <p className="text-blue-900 font-medium mb-2">Finanzberater</p>
              <p className="text-gray-600">
                Experte für Finanzplanung und Controlling in KMUs
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
