import React from 'react';
import { Search, Clock, CheckCircle, ArrowRight, Zap, Target, FileText } from 'lucide-react';

const AIScanBlock: React.FC = () => {
  return (
    <section id="ai-scan-block" className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white bg-opacity-20 rounded-full mb-6">
            <Search className="h-10 w-10 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-white mb-6">
            Gratis AI Proces Scan
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Ontdek binnen enkele minuten welke AI-oplossingen perfect passen bij jouw bedrijfsprocessen. 
            Volledig gratis, zonder verplichtingen en direct resultaat.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col justify-start h-full">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-white mb-6">Wat krijg je?</h3>
              <div className="space-y-4">
                <div className="flex items-center text-white">
                  <CheckCircle className="h-5 w-5 text-green-300 mr-3 flex-shrink-0" />
                  <span>Maakt de <span className="font-bold text-blue-200">FIT</span> tussen je huidige proces en mogelijke AI-oplossingen</span>
                </div>
                <div className="flex items-center text-white">
                  <CheckCircle className="h-5 w-5 text-green-300 mr-3 flex-shrink-0" />
                  <span>Brengt duidelijk de <span className="font-bold text-blue-200">FLOW</span> van je proces in beeld</span>
                </div>
                <div className="flex items-center text-white">
                  <CheckCircle className="h-5 w-5 text-green-300 mr-3 flex-shrink-0" />
                  <span>Geeft concrete <span className="font-bold text-blue-200">AI</span>-oplossingen voor jouw processen</span>
                </div>
                <div className="flex items-center text-white">
                  <CheckCircle className="h-5 w-5 text-green-300 mr-3 flex-shrink-0" />
                  <span>Volledig adviesrapport per e-mail</span>
                </div>
                <div className="flex items-center text-white">
                  <CheckCircle className="h-5 w-5 text-green-300 mr-3 flex-shrink-0" />
                  <span>Geen verplichtingen of kosten</span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4">
                <Clock className="h-8 w-8 text-green-300 mx-auto mb-2" />
                <p className="text-white font-semibold">Binnen 1 uur</p>
                <p className="text-blue-100 text-sm">Snelle analyse</p>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4">
                <Target className="h-8 w-8 text-green-300 mx-auto mb-2" />
                <p className="text-white font-semibold">100% Gratis</p>
                <p className="text-blue-100 text-sm">Geen kosten</p>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4">
                <FileText className="h-8 w-8 text-green-300 mx-auto mb-2" />
                <p className="text-white font-semibold">Direct rapport</p>
                <p className="text-blue-100 text-sm">Per e-mail</p>
              </div>
            </div>
          </div>

          <div className="text-center lg:text-left flex flex-col justify-start h-full">
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto lg:mx-0 mb-6">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Start nu je AI-reis
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Upload je bedrijfsprocessen of beschrijf ze in tekst. Onze AI analyseert 
                alles en geeft je binnen enkele uren concrete aanbevelingen.
              </p>
              
              <div className="space-y-4">
                <button
                  onClick={() => window.location.href = '/ai-scan'}
                  className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center group"
                >
                  Start Gratis AI Proces Scan
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
                </button>
                
                <p className="text-xs text-gray-500 text-center">
                  ✅ Geen account nodig • ✅ Direct resultaat • ✅ 100% Vrijblijvend
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIScanBlock;