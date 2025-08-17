import React from 'react';
import { ArrowRight, Zap, Users, Target } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center gradient-bg ai-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              <span className="text-gray-900">Van complex naar concreet.</span><br />
              <span className="text-blue-600">AI oplossingen met waarde.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              FitFlowAI helpt bedrijven om snel en concreet resultaat te behalen met Artificial Intelligence (AI). Wij bieden praktische AI-oplossingen met duidelijke resultaatgarantie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="https://api.leadconnectorhq.com/widget/booking/0pCtJiJf6pLScscicglx"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center group"
              >
                Start
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
              </a>
              <button
                onClick={() => window.location.href = '/oplossingen'}
                className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200"
              >
                Bekijk AI-oplossingen
              </button>
            </div>
            
            <div className="grid grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <Zap className="h-8 w-8 text-blue-600 mb-2" />
                <span className="text-sm font-medium text-gray-600">Snelle implementatie</span>
              </div>
              <div className="flex flex-col items-center">
                <Users className="h-8 w-8 text-blue-600 mb-2" />
                <span className="text-sm font-medium text-gray-600">Mens + Technologie</span>
              </div>
              <div className="flex flex-col items-center">
                <Target className="h-8 w-8 text-blue-600 mb-2" />
                <span className="text-sm font-medium text-gray-600">Resultaatgericht</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="floating-animation">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl blur-3xl opacity-20"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl tech-grid">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="h-4 bg-blue-100 rounded-full w-32"></div>
                      <div className="h-4 bg-green-100 rounded-full w-16"></div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-3 bg-gray-100 rounded-full w-full"></div>
                      <div className="h-3 bg-gray-100 rounded-full w-4/5"></div>
                      <div className="h-3 bg-blue-100 rounded-full w-3/5"></div>
                    </div>
                    <div className="flex space-x-4">
                      <div className="h-20 w-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                        <div className="h-8 w-8 bg-white rounded-lg"></div>
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="h-4 bg-gray-100 rounded-full w-full"></div>
                        <div className="h-4 bg-gray-100 rounded-full w-2/3"></div>
                        <div className="h-4 bg-cyan-100 rounded-full w-1/2"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;