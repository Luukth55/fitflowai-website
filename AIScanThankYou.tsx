import React from 'react';
import { CheckCircle, Mail, Clock, Brain, ArrowRight, Sparkles, Target, Zap } from 'lucide-react';

const AIScanThankYou: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-cyan-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="relative mb-8">
            <div className="w-32 h-32 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
              <CheckCircle className="w-20 h-20 text-white" />
            </div>
            <div className="absolute -top-2 -right-2">
              <Sparkles className="w-8 h-8 text-yellow-400 animate-pulse" />
            </div>
            <div className="absolute -bottom-2 -left-2">
              <Sparkles className="w-6 h-6 text-pink-400 animate-pulse" />
            </div>
          </div>
          
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            🎉 Bedankt voor je AI Proces Scan!
          </h1>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Je proces wordt nu geanalyseerd door onze AI-experts
          </p>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-10 mb-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6">
              <Brain className="w-12 h-12 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Wat gebeurt er nu? 🚀
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Onze AI gaat direct aan de slag met jouw proces
            </p>
          </div>
          
          {/* Process Steps */}
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">✅ Ontvangen</h3>
              <p className="text-gray-600">
                Je proces informatie is veilig bij ons aangekomen
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-10 h-10 text-blue-600 animate-pulse" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">🔄 Analyseren</h3>
              <p className="text-gray-600">
                AI identificeert optimalisatie-mogelijkheden
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">📧 Rapport</h3>
              <p className="text-gray-600">
                Binnen 1 uur krijg je het volledige advies
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-8">
            <div className="flex items-center justify-center mb-6">
              <Clock className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">⏰ Verwachte tijdlijn</h3>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center bg-white rounded-full px-6 py-3 shadow-lg">
                <span className="text-3xl font-bold text-blue-600 mr-2">60</span>
                <span className="text-lg text-gray-700">minuten of minder</span>
              </div>
              <p className="text-gray-600 mt-4">
                Meestal zijn we nog sneller! 🚀
              </p>
            </div>
          </div>

          {/* What you'll receive */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              📧 Wat krijg je per e-mail?
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <Target className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Concrete AI-aanbevelingen</h4>
                  <p className="text-gray-600 text-sm">Specifieke oplossingen voor jouw processen</p>
                </div>
              </div>
              <div className="flex items-start">
                <Zap className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">ROI-berekening</h4>
                  <p className="text-gray-600 text-sm">Wat elke AI-toepassing je oplevert</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Quick wins prioritering</h4>
                  <p className="text-gray-600 text-sm">Welke stappen eerst te nemen</p>
                </div>
              </div>
              <div className="flex items-start">
                <ArrowRight className="w-6 h-6 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Implementatie roadmap</h4>
                  <p className="text-gray-600 text-sm">Stap-voor-stap plan naar resultaat</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="text-center space-y-4">
          <a
            href="/"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl group text-lg"
          >
            🏠 Ga terug naar de homepagina
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
          </a>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <a
              href="mailto:info@fitflowai.nl"
              className="inline-flex items-center border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200"
            >
              <Mail className="w-4 h-4 mr-2" />
              info@fitflowai.nl
            </a>
            <a
              href="tel:+31970102893555"
              className="inline-flex items-center border border-green-600 text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors duration-200"
            >
              📞 +31 970 102 89355
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-sm text-gray-500">
          <p className="bg-white rounded-lg p-4 shadow-sm">
            💡 <strong>Tip:</strong> Voeg <span className="font-mono text-blue-600">info@fitflowai.nl</span> toe aan je contacten 
            zodat ons rapport niet in je spam komt! 
          </p>
        </div>
      </div>
    </div>
  );
};

export default AIScanThankYou;