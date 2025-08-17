import React from 'react';
import { CheckCircle, Mail, Phone, Brain, Clock, ArrowRight } from 'lucide-react';

const AIScanConfirmation: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI Proces Scan - Bevestiging
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Bedankt voor het invullen van het formulier! Wij gaan uw proces analyseren.
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center">
            {/* Success Checkmark */}
            <div className="relative mb-8">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-16 h-16 text-green-600" />
              </div>
            </div>
            
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Formulier succesvol ontvangen! ✅
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Wij gaan uw proces analyseren en u ontvangt de volledige AI-analyse via uw e-mail.
            </p>
            
            {/* Process Steps */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Wat gebeurt er nu?</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-gray-900">Formulier ontvangen ✅</p>
                      <p className="text-sm text-gray-600">Uw gegevens zijn veilig bij ons aangekomen</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                      <Brain className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-gray-900">AI-analyse wordt uitgevoerd 🔄</p>
                      <p className="text-sm text-gray-600">Onze AI identificeert optimalisatiemogelijkheden</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center mr-4">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-gray-900">Rapport per e-mail ⏳</p>
                      <p className="text-sm text-gray-600">Binnen 2-4 uur ontvangt u het volledige adviesrapport</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* What to expect */}
            <div className="bg-blue-600 text-white rounded-2xl p-8 mb-8">
              <h3 className="text-xl font-bold mb-4">📧 Wat krijgt u per e-mail?</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                  Concrete AI-aanbevelingen voor uw processen
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                  ROI-berekening per AI-toepassing
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                  Prioritering van quick wins
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                  Implementatie roadmap
                </div>
              </div>
            </div>
            
            {/* Contact section */}
            <div className="text-center">
              <p className="text-gray-600 mb-6">
                Vragen over uw AI-analyse? Neem direct contact op!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:info@fitflowai.nl"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  info@fitflowai.nl
                </a>
                <a
                  href="tel:0622639939"
                  className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 flex items-center justify-center"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  06 22 63 99 39
                </a>
              </div>
            </div>

            {/* Back to home */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <a
                href="/"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
              >
                ← Terug naar homepage
              </a>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-12 text-center text-sm text-gray-500">
          <p>
            Vragen over de AI Proces Scan? Neem contact op via{' '}
            <a href="mailto:info@fitflowai.nl" className="text-blue-600 hover:text-blue-700">
              href="tel:+31970102893555"
            </a>{' '}
            of{' '}
            <a href="tel:+31970102893555" className="text-blue-600 hover:text-blue-700">
              +31 970 102 89355
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AIScanConfirmation;