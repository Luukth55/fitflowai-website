import React from 'react';
import { Search, Settings, ArrowRight, Users, Zap } from 'lucide-react';

const Services: React.FC = () => {
  const approaches = [
    {
      icon: Search,
      title: 'Start',
      description: 'Korte gesprek waarin we jouw uitdagingen en doelen bespreken.',
      features: [
        'AI-oplossingen verkennen',
        'AI proces scan bepalen',
        'Doelen & plan bespreken'
      ],
      note: 'Het intake gesprek wordt online gedaan',
      buttonText: 'Plan startgesprek',
      buttonLink: 'https://api.leadconnectorhq.com/widget/booking/0pCtJiJf6pLScscicglx',
      headerText: 'FIT'
    },
    {
      icon: Zap,
      title: 'Processen',
      description: 'Duidelijke analyse van uw processen met concrete AI-oplossingen, die direct resultaat opleveren.',
      features: [
        'Processen verdiepen',
        'Aanbeveling AI-oplossingen',
        'Offerte met benefitcase'
      ],
      headerText: 'FLOW'
    },
    {
      icon: Settings,
      title: 'AI-implementatie',
      description: 'Ontwikkeling en integratie van AI-oplossingen in jouw bedrijf.',
      features: [
        'Maatwerk AI-oplossingen',
        'Systeem-integraties realiseren',
        'Oplevering & Nazorg'
      ],
      headerText: 'AI'
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Onze Aanpak</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Van intake tot implementatie. Zo maken we AI praktisch en waardevol voor jouw bedrijf.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {approaches.map((approach, index) => {
            const IconComponent = approach.icon;
            return (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover-lift">
                {/* Header with company name part */}
                <div className="bg-blue-600 text-white px-4 py-2 rounded-lg text-center font-bold text-lg mb-6">
                  {approach.headerText}
                </div>
                
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-xl mr-4">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{approach.title}</h3>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {approach.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {approach.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-gray-700">
                      <div className="h-2 w-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature === 'AI-oplossingen verkennen' ? (
                        <button
                          onClick={() => {
                            const element = document.querySelector('#ai-services-block');
                            if (element) {
                              element.scrollIntoView({ behavior: 'smooth' });
                            }
                          }}
                          className="text-blue-600 hover:text-blue-700 underline text-left"
                        >
                          {feature}
                        </button>
                      ) : feature === 'AI proces scan bepalen' ? (
                        <button
                          onClick={() => {
                            const element = document.querySelector('#ai-scan-block');
                            if (element) {
                              element.scrollIntoView({ behavior: 'smooth' });
                            }
                          }}
                          className="text-blue-600 hover:text-blue-700 underline text-left"
                        >
                          {feature}
                        </button>
                      ) : (
                        feature
                      )}
                    </li>
                  ))}
                </ul>
                
                {approach.note && (
                  <p className="text-sm text-blue-600 mb-4 font-medium">
                    {approach.note}
                  </p>
                )}
                
                {approach.buttonText && (
                  <a
                    href={approach.buttonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center group"
                  >
                    {approach.buttonText}
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={16} />
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;