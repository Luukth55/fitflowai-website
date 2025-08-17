import React from 'react';

const CookiePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Cookiebeleid – FitFlow AI
          </h1>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="space-y-8">
            <section>
              <p className="text-gray-600 leading-relaxed mb-6">
                FitFlow AI gebruikt cookies om:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Websiteprestaties te verbeteren</li>
                <li>Statistieken te meten (Google Analytics)</li>
                <li>Marketingcampagnes te optimaliseren</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Toestemming</h2>
              <p className="text-gray-600 leading-relaxed">
                Bij eerste bezoek vragen wij via een pop-up toestemming voor cookies.
              </p>
            </section>
          </div>
        </div>

        {/* Back to home */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <a
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            ← Terug naar homepage
          </a>
        </div>
      </div>
    </div>
  );
};

export default CookiePage;