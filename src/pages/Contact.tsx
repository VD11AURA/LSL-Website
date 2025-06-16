import { useEffect, useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

interface ContactData {
  address: {
    street: string;
    city: string;
    country: string;
  };
  phone: string;
  email: string;
  businessHours: {
    [key: string]: string;
  };
}

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  message: string;
}

const Contact = () => {
  const [contactData, setContactData] = useState<ContactData | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const fetchContactData = async () => {
      try {
        const response = await fetch('/data/contact.json');
        const data = await response.json();
        setContactData(data);
      } catch (error) {
        console.error('Error fetching contact data:', error);
      }
    };

    fetchContactData();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: '',
      });
    }, 3000);
  };

  const businessHoursDays = {
    monday: 'Montag',
    tuesday: 'Dienstag',
    wednesday: 'Mittwoch',
    thursday: 'Donnerstag',
    friday: 'Freitag',
    saturday: 'Samstag',
    sunday: 'Sonntag',
  };

  if (!contactData) {
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
              Kontakt
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-100">
              Lassen Sie uns gemeinsam über Ihre Herausforderungen sprechen
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Kostenlose Erstberatung anfragen
                </h2>
                
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                      Vielen Dank!
                    </h3>
                    <p className="text-gray-700">
                      Ihre Nachricht wurde erfolgreich übermittelt. Wir melden uns innerhalb von 24 Stunden bei Ihnen.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Ihr vollständiger Name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          E-Mail *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="ihre.email@unternehmen.de"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                          Unternehmen *
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          required
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Ihr Unternehmen"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Telefon
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="+49 123 456 789"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                        Interesse an
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Bitte wählen Sie eine Leistung</option>
                        <option value="strategieentwicklung">Strategieentwicklung</option>
                        <option value="prozessoptimierung">Geschäftsprozessoptimierung</option>
                        <option value="digitalisierung">Digitalisierungsberatung</option>
                        <option value="finanzplanung">Finanzplanung und -analyse</option>
                        <option value="change-management">Change Management</option>
                        <option value="allgemein">Allgemeine Beratung</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Nachricht *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Beschreiben Sie Ihre Herausforderung oder Ihr Anliegen..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-blue-900 text-white px-6 py-4 rounded-lg hover:bg-blue-800 transition-colors font-semibold inline-flex items-center justify-center"
                    >
                      Nachricht senden
                      <Send className="ml-2 h-5 w-5" />
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Address */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-blue-900 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Adresse</h3>
                    <div className="text-gray-700">
                      <div>{contactData.address.street}</div>
                      <div>{contactData.address.city}</div>
                      <div>{contactData.address.country}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-blue-900 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Telefon</h3>
                    <a
                      href={`tel:${contactData.phone.replace(/\s/g, '')}`}
                      className="text-gray-700 hover:text-blue-900 transition-colors"
                    >
                      {contactData.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-blue-900 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">E-Mail</h3>
                    <a
                      href={`mailto:${contactData.email}`}
                      className="text-gray-700 hover:text-blue-900 transition-colors"
                    >
                      {contactData.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-blue-900 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Öffnungszeiten</h3>
                    <div className="space-y-1 text-gray-700">
                      {Object.entries(contactData.businessHours).map(([day, hours]) => (
                        <div key={day} className="flex justify-between">
                          <span>{businessHoursDays[day as keyof typeof businessHoursDays]}:</span>
                          <span>{hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Warum eine kostenlose Erstberatung?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              In einem unverbindlichen Gespräch lernen wir Ihr Unternehmen kennen und zeigen Ihnen konkrete Verbesserungsmöglichkeiten auf.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Analyse</h3>
                <p className="text-gray-600">
                  Wir analysieren Ihre aktuelle Situation und identifizieren Potentiale
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Empfehlungen</h3>
                <p className="text-gray-600">
                  Sie erhalten konkrete Handlungsempfehlungen für Ihr Unternehmen
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Roadmap</h3>
                <p className="text-gray-600">
                  Wir erstellen einen ersten Fahrplan für Ihre nächsten Schritte
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
