import React from 'react';
import { Brain, Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Brain className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">FitFlowAI</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Het Nederlandse AI-bureau dat bedrijven helpt om snel en concreet waarde te halen uit kunstmatige intelligentie. 
              Geen hype, geen ruis, gewoon AI die werkt.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/company/fitflowai" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://www.instagram.com/fitflow.ai_nl/?fbclid=IwY2xjawMJq09leHRuA2FlbQIxMQBicmlkETFrWkFuaG0wZ0pIOWY4VHlpAR4M2r_LnmrEm5grkxf2ci5FFJcVch0kiguHbb2T1av4OVizqgVHPAmINos80Q_aem_GmSRNfmhLoCJwaC_5A5KwQ" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-pink-400 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=61577624852926" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Navigatie</h3>
            <ul className="space-y-3">
              <li><a href="/onze-aanpak" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">Onze Aanpak</a></li>
              <li><a href="/oplossingen" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">AI-oplossingen</a></li>
              <li><a href="/ai-scan" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">AI Proces Scan</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">Over FitFlowAI</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-400">
                <Mail className="h-4 w-4 mr-2" />
                info@fitflowai.nl
              </li>
              <li className="flex items-center text-gray-400">
                <Phone className="h-4 w-4 mr-2" />
                +31 970 102 89355
              </li>
              <li className="flex items-center text-gray-400">
                <MapPin className="h-4 w-4 mr-2" />
                Elst, Nederland
              </li>
              <li className="flex items-center text-gray-400">
                <span className="h-4 w-4 mr-2 text-center font-bold text-xs">KVK</span>
                97367400
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400">
              © 2024 FitFlowAI. Alle rechten voorbehouden. | KVK: 97367400
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="/algemene-voorwaarden" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                Algemene voorwaarden
              </a>
              <a href="/privacybeleid" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                Privacybeleid
              </a>
              <a href="/cookiebeleid" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                Cookiebeleid
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;