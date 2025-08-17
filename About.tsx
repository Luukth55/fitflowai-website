import React from 'react';
import { Users, Target, Zap, CheckCircle, ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Users,
      title: 'Mens + Technologie',
      description: 'AI als aanvulling op mensen, niet als vervanging. Wij geloven in technologie die teams sterker maakt.'
    },
    {
      icon: Target,
      title: 'Resultaatgericht',
      description: 'Concrete, direct toepasbare oplossingen die belangrijke meerwaarde hebben voor je bedrijf.'
    },
    {
      icon: Zap,
      title: 'Snelheid',
      description: 'Geen lange trajecten, maar directe waarde snelwerkende oplossingen van idee tot volledige implementatie.'
    }
  ];

  const benefits = [
    'Ervaren team met track record in AI-implementaties',
    'Praktische, no-nonsense benadering',
    'Snelle time-to-value voor uw investeringen',
    'Nederlandse service en support',
    'Transparante communicatie en pricing'
  ];

  return (
    <section id="about" className="py-20 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Over FitFlowAI</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Wij zijn het Nederlandse AI-bureau dat bedrijven helpt om snel en concreet waarde te halen uit kunstmatige intelligentie.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Onze Missie</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Te veel bedrijven blijven steken in AI-hype zonder concrete resultaten. Wij doorbreken dit patroon door praktische AI-oplossingen te leveren die direct impact hebben op je bedrijfsresultaat.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Geen lange theoretische trajecten, maar snelle AI-implementaties die echt voor je werken.
            </p>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  {benefit}
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-xl text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mb-6">
                <span className="text-3xl font-bold text-white">🎯</span>
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Onze Missie</h4>
              <p className="text-gray-600 leading-relaxed">
                Praktische AI-oplossingen die direct resultaat opleveren voor jouw bedrijf. 
                Geen hype, maar concrete waarde die je kunt meten en voelen.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                  <IconComponent className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="mt-16 text-center">
        <div className="bg-blue-50 rounded-2xl p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Klaar om te beginnen?
          </h3>
          <p className="text-gray-600 mb-6">
            Elke reis begint met een gesprek. Laten we ontdekken hoe AI uw bedrijf kan versterken.
          </p>
          <a
            href="https://api.leadconnectorhq.com/widget/booking/0pCtJiJf6pLScscicglx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 group"
          >
            Plan een gratis kennismaking
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200 inline" size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;