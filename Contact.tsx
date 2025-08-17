import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Laptop } from 'lucide-react';

interface ContactProps {
  contactInfo?: Array<{
    icon: React.ComponentType<any>;
    title: string;
    value: string;
    href: string;
  }>;
}

const Contact: React.FC<ContactProps> = ({ contactInfo } = {}) => {

  // Default contact info with safe fallback
  const defaultContactInfo: ContactProps['contactInfo'] = [
    {
      icon: Mail,
      title: 'Email',
      value: 'info@fitflowai.nl',
      href: 'mailto:info@fitflowai.nl'
    },
    {
      icon: Phone,
      title: 'Telefoon',
      value: '+31 970 102 89355',
      href: 'tel:+31970102893555'
    },
    {
      icon: MapPin,
      title: 'Locatie',
      value: 'Elst, Nederland',
      href: '#'
    },
    {
      icon: Clock,
      title: 'Reactietijd',
      value: 'Binnen 24 uur',
      href: '#'
    }
  ];

  // Use props contactInfo or fallback to default
  const finalContactInfo = contactInfo || defaultContactInfo;

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Klaar om je fitnessreis te beginnen? Neem contact met ons op voor een gratis consultatie.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Neem contact op</h3>
            
            <div className="space-y-6 mb-8">
              {finalContactInfo && finalContactInfo.length > 0 ? finalContactInfo.map((item, index) => {
                const IconComponent = item?.icon;
                return (
                  <div key={index} className="flex items-center">
                    <div className="bg-blue-100 p-3 rounded-xl mr-4">
                      {IconComponent && <IconComponent className="h-6 w-6 text-blue-600" />}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{item?.title || 'Contact'}</p>
                      {(item?.href || '').startsWith('#') ? (
                        <p className="text-gray-600">{item?.value || ''}</p>
                      ) : (
                        <a href={item?.href || '#'} className="text-blue-600 hover:text-blue-700 transition-colors duration-200">
                          {item?.value || ''}
                        </a>
                      )}
                    </div>
                  </div>
                );
              }) : (
                <p className="text-gray-500">Contactinformatie wordt geladen...</p>
              )}
            </div>
          </div>
          
          <div className="flex flex-col justify-start h-full">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Stuur ons een bericht</h3>
            
            {/* Tally Script */}
            <script async src="https://tally.so/widgets/embed.js"></script>
            
            <div className="flex flex-col items-start justify-center flex-1">
              {/* Tally Popup Button */}
              <button 
                data-tally-open="3NZbal" 
                data-tally-layout="modal" 
                className="w-full bg-blue-600 text-white border-none rounded-lg text-lg cursor-pointer hover:bg-blue-700 transition-colors duration-200 font-semibold py-4 px-8 shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                <Laptop className="w-5 h-5 mr-2" />
                Neem contact op
              </button>
              
              {/* Small text with icon */}
              <div className="flex items-center mt-3 text-sm text-gray-500">
                <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Formulier wordt geopend in een nieuw tabblad voor de beste ervaring
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;