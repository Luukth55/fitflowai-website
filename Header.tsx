import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, X, Brain } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isAIScanPage = location.pathname === '/ai-scan';

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Oplossingen', href: '/oplossingen' },
    { name: 'Onze aanpak', href: '/onze-aanpak' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('/')) {
      // Direct navigation for routes like /ai-scan
      window.location.href = href;
    } else {
      if (location.pathname !== '/') {
        // Navigate to home page first, then scroll
        window.location.href = `/${href}`;
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    if (isAIScanPage) {
      window.location.href = '/';
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button 
            onClick={handleLogoClick}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-200"
          >
            <Brain className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">FitFlowAI</span>
          </button>
          
          {/* Desktop Navigation */}
          {!isAIScanPage && (
            <div className="hidden md:flex items-center space-x-8">
              <nav className="flex space-x-8">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                  >
                    {item.name}
                  </button>
                ))}
              </nav>
              <button
                onClick={() => window.location.href = '/ai-scan'}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                Start AI proces scan
              </button>
            </div>
          )}

          {isAIScanPage && (
            <nav className="hidden md:flex space-x-8">
              <a
                href="/"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                Terug naar Home
              </a>
              <a
                href="/#contact"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                Contact
              </a>
            </nav>
          )}

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {!isAIScanPage ? (
                <>
                  {navItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium w-full text-left"
                    >
                      {item.name}
                    </button>
                  ))}
                  <button
                    onClick={() => window.location.href = '/ai-scan'}
                    className="block w-full mt-2 bg-blue-600 text-white px-3 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 text-left"
                  >
                    Start AI proces scan
                  </button>
                </>
              ) : (
                <>
                  <a
                    href="/"
                    className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                  >
                    Terug naar Home
                  </a>
                  <a
                    href="/#contact"
                    className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                  >
                    Contact
                  </a>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;