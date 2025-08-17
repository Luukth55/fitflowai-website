import React, { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';

const CookieBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already given consent
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    // Save consent to localStorage
    localStorage.setItem('cookieConsent', 'true');
    setShowBanner(false);
  };

  const handleClose = () => {
    setShowBanner(false);
  };

  // Don't render if banner shouldn't be shown
  if (!showBanner) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-700 text-white shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          {/* Cookie icon and text */}
          <div className="flex items-start sm:items-center gap-3 flex-1">
            <Cookie className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-0.5 sm:mt-0" />
            <div className="flex-1">
              <p className="text-sm sm:text-base leading-relaxed">
                We gebruiken cookies om je ervaring te verbeteren.{' '}
                <a 
                  href="/cookiebeleid" 
                  className="text-blue-200 hover:text-blue-100 underline transition-colors duration-200"
                >
                  Lees ons cookiebeleid
                </a>
                .
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handleAccept}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200 flex-1 sm:flex-none"
            >
              Accepteren
            </button>
            <button
              onClick={handleClose}
              className="text-gray-300 hover:text-white transition-colors duration-200 p-2"
              aria-label="Sluiten"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;