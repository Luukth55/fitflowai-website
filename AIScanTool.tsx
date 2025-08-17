import React, { useState } from 'react';
import { Upload, User, Mail, Phone, Building, FileText, Brain, CheckCircle, ArrowRight, AlertCircle, Download, Clock, Sparkles, Target, Zap, Search } from 'lucide-react';

const AIScanTool: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="relative mb-8">
            <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
              <Brain className="w-20 h-20 text-white" />
            </div>
            <div className="absolute -top-2 -right-2">
              <Sparkles className="w-8 h-8 text-yellow-400 animate-pulse" />
            </div>
            <div className="absolute -bottom-2 -left-2">
              <Sparkles className="w-6 h-6 text-pink-400 animate-pulse" />
            </div>
          </div>
          
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            🚀 Online AI Proces Scan
          </h1>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ontdek waar AI jouw bedrijfsprocessen kan verbeteren
          </p>
        </div>


        {/* Form Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
              <FileText className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              📝 Start je AI Proces Scan
            </h2>
            <p className="text-gray-600 mb-8">
              Vul het formulier in en ontvang binnen 1 uur je persoonlijke AI-adviesrapport
            </p>
            
            {/* Timeline */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 mb-8">
              <div className="flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">⏰ Snelle analyse</h3>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center bg-white rounded-full px-6 py-3 shadow-lg">
                  <span className="text-2xl font-bold text-blue-600 mr-2">60</span>
                  <span className="text-lg text-gray-700">minuten of minder</span>
                </div>
                <p className="text-gray-600 mt-3">
                  Van formulier tot volledig AI-adviesrapport in je inbox! 📧
                </p>
              </div>
            </div>
            
            {/* Tally Form Embed */}
            <div className="w-full max-w-4xl mx-auto mb-8 bg-gray-50 rounded-lg p-6">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  📋 Vul je procesgegevens in
                </h3>
                <p className="text-gray-600 text-sm">
                  Het formulier opent in een nieuw venster voor de beste ervaring
                </p>
              </div>
              
              {/* Direct link to Tally form */}
              <div className="space-y-4">
                <a
                  href="https://tally.so/r/w5aAxP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 text-center shadow-lg hover:shadow-xl group text-lg"
                >
                  🚀 Start AI Proces Scan Nu
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200 inline" size={20} />
                </a>
                
                <div className="text-xs text-gray-500 text-center">
                  Het formulier opent in een nieuw tabblad. Na het invullen ontvang je automatisch je rapport.
                </div>
              </div>
              
              {/* Embedded iframe as fallback */}
              <div className="mt-6 border-t pt-6">
                <details className="group">
                  <summary className="cursor-pointer text-blue-600 hover:text-blue-700 font-medium">
                    🔧 Problemen met het formulier? Klik hier voor alternatieve weergave
                  </summary>
                  <div className="mt-4 border border-gray-200 rounded-lg overflow-hidden">
                    <iframe 
                      src="https://tally.so/embed/w5aAxP?alignLeft=1&transparentBackground=1&dynamicHeight=1" 
                      width="100%" 
                      height="629" 
                      frameBorder="0" 
                      marginHeight="0" 
                      marginWidth="0" 
                      title="Online AI Proces Scan – FitFlowAI"
                      sandbox="allow-scripts allow-forms allow-same-origin allow-popups"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </details>
              </div>
            </div>
            
            <div className="mt-6 text-sm text-gray-500">
              <div className="flex items-center justify-center space-x-6">
                <span className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  100% Gratis & Vrijblijvend
                </span>
                <span className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Veilig & Vertrouwelijk
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-12 text-center text-sm text-gray-500">
          <p className="bg-white rounded-lg p-4 shadow-sm">
            💡 <strong>Tip:</strong> Hoe gedetailleerder je proces beschrijft, hoe specifieker onze AI-aanbevelingen worden! 
          </p>
          <p className="mt-4">
            Vragen over de AI Proces Scan? Neem contact op via{' '}
            <a href="mailto:info@fitflowai.nl" className="text-blue-600 hover:text-blue-700">
              info@fitflowai.nl
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

export default AIScanTool;