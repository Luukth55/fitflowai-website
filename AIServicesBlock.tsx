import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ArrowRight, Bot, MessageCircle, Phone, Target, Mail, FileText, PenTool, Database, Users, Calendar, HelpCircle, Calculator, GitBranch, Brain } from 'lucide-react';

interface Service {
  id: number;
  name: string;
  description: string;
  icon: React.ComponentType<any>;
}

const AIServicesBlock: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedServices, setSelectedServices] = useState<number[]>([]);

  const services: Service[] = [
    {
      id: 1,
      name: 'AI Telefoon Assistent',
      description: 'Neemt automatisch inkomende telefoontjes aan, 24/7 bereikbaar en altijd vriendelijk.',
      icon: Phone
    },
    {
      id: 2,
      name: 'AI Website Chatbot',
      description: 'Beantwoordt vragen, verzamelt leads en begeleidt bezoekers op je website.',
      icon: MessageCircle
    },
    {
      id: 3,
      name: 'AI Omnichannel Assistent',
      description: 'Eén AI die actief is op WhatsApp, e-mail, telefoon, chat en SMS.',
      icon: Bot
    },
    {
      id: 4,
      name: 'AI Lead Kwalificatie Bot',
      description: 'Herkent waardevolle leads, neemt contact op en plant automatisch een afspraak.',
      icon: Target
    },
    {
      id: 5,
      name: 'AI Cold Email Campagnes',
      description: 'Stuurt gepersonaliseerde cold emails op schaal en optimaliseert respons.',
      icon: Mail
    },
    {
      id: 6,
      name: 'AI Inbox & Follow-up Assistent',
      description: 'Beantwoordt e-mails, stuurt automatische opvolgingen en plant afspraken in.',
      icon: Mail
    },
    {
      id: 7,
      name: 'AI Document Scanner',
      description: 'Leest en begrijpt contracten, facturen en andere documenten in PDF, Word of JPG.',
      icon: FileText
    },
    {
      id: 8,
      name: 'AI Content & SEO Schrijver',
      description: 'Genereert blogs, SEO-teksten en advertenties afgestemd op jouw doelgroep.',
      icon: PenTool
    },
    {
      id: 9,
      name: 'CRM Koppeling & Lead verrijker',
      description: 'Verbindt AI met je CRM en verrijkt automatisch klantgegevens.',
      icon: Database
    },
    {
      id: 10,
      name: 'AI Leadlijst Generator',
      description: 'Zoekt koude leads en verrijkt deze met informatie en geeft score.',
      icon: Users
    },
    {
      id: 11,
      name: 'AI Meeting Samenvatter',
      description: 'Vat vergaderingen samen en zet actiepunten helder op een rij.',
      icon: Calendar
    },
    {
      id: 12,
      name: 'AI HR Assistent',
      description: 'Beantwoordt HR-vragen van medewerkers over verlof, declaraties, documenten en meer – 24/7.',
      icon: HelpCircle
    },
    {
      id: 13,
      name: 'AI Offerte Generator',
      description: 'Maakt automatisch prijsvoorstellen en offertes op basis van klantinformatie.',
      icon: Calculator
    },
    {
      id: 14,
      name: 'AI Procesvisualisatie',
      description: 'Genereert automatisch duidelijke flowcharts op basis van tekst of uitleg.',
      icon: GitBranch
    },
    {
      id: 15,
      name: 'AI Financiële Rapportage',
      description: 'Genereert automatisch financiële rapportages, dashboards en inzichten op basis van boekhoudgegevens of Excel-bestanden.',
      icon: Calculator
    },
    {
      id: 16,
      name: 'AI Bedrijfsrapportage',
      description: 'Maakt op basis van interne data een overzichtelijk rapport over de prestaties van je bedrijf, per afdeling of KPI.',
      icon: FileText
    },
    {
      id: 17,
      name: 'AI Concurrentie Analyse',
      description: 'Vergelijkt jouw bedrijf met concurrenten op basis van online zichtbaarheid, prijzen, producten, klantbeoordelingen en meer.',
      icon: Target
    },
    {
      id: 18,
      name: 'AI Bedrijfsbrein',
      description: 'Het centrale brein voor al uw bedrijfskennis - doorzoekt direct al uw documenten, e-mails en rapporten via een slimme AI-chatbot.',
      icon: Brain
    }
  ];

  const handleServiceToggle = (serviceId: number) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const handleNextStep = () => {
    if (selectedServices.length === 0) {
      alert('Selecteer minimaal één AI-dienst om door te gaan.');
      return;
    }

    // Get selected service names
    const selectedServiceNames = services
      .filter(service => selectedServices.includes(service.id))
      .map(service => service.name);

    // Create dynamic Tally.so URL with selected services
    const baseUrl = 'https://tally.so/r/nPqAZQ';
    const servicesParam = encodeURIComponent(selectedServiceNames.join(', '));
    const dynamicUrl = `${baseUrl}?diensten=${servicesParam}`;

    // Open Tally form in new tab
    window.open(dynamicUrl, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div id="ai-services-block"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Welke praktische AI-oplossingen bieden wij aan?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Ontdek welke AI-oplossingen perfect passen bij jouw bedrijf. Van automatisering tot slimme assistenten - 
            wij hebben de tools die voor jouw bedrijf praktisch werken.
          </p>
          
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 flex items-center justify-center mx-auto group"
          >
            Onze AI-oplossingen
            {isExpanded ? (
              <ChevronUp className="ml-2 group-hover:-translate-y-1 transition-transform duration-200" size={20} />
            ) : (
              <ChevronDown className="ml-2 group-hover:translate-y-1 transition-transform duration-200" size={20} />
            )}
          </button>
        </div>

        {/* Expandable Services Grid */}
        <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white rounded-2xl shadow-xl p-8 mt-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              In welke AI-oplossingen ben jij geïnteresseerd?
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {services.map((service) => {
                const IconComponent = service.icon;
                const isSelected = selectedServices.includes(service.id);
                
                return (
                  <div
                    key={service.id}
                    className={`border-2 rounded-lg p-4 cursor-pointer transition-all duration-200 hover:shadow-md ${
                      isSelected 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                    onClick={() => handleServiceToggle(service.id)}
                  >
                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => handleServiceToggle(service.id)}
                        className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        onClick={(e) => e.stopPropagation()}
                      />
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <IconComponent className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                          <h4 className="font-semibold text-gray-900 text-sm leading-tight">
                            {service.name}
                          </h4>
                        </div>
                        <p className="text-xs text-gray-600 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Selected Services Counter */}
            {selectedServices.length > 0 && (
              <div className="text-center mb-6">
                <p className="text-blue-600 font-medium">
                  {selectedServices.length} dienst{selectedServices.length !== 1 ? 'en' : ''} geselecteerd
                </p>
              </div>
            )}

            {/* Next Step Button */}
            <div className="text-center">
              <button
                onClick={handleNextStep}
                className={`px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center mx-auto group ${
                  selectedServices.length > 0
                    ? 'bg-green-600 text-white hover:bg-green-700'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
                disabled={selectedServices.length === 0}
              >
                Volgende stap
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIServicesBlock;