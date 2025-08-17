import React from 'react';

const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Algemene Voorwaarden – FitFlow AI
          </h1>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Algemeen</h2>
              <p className="text-gray-600 leading-relaxed">
                Deze algemene voorwaarden zijn van toepassing op alle diensten en producten geleverd door FitFlow AI, gevestigd in Elst, Gelderland.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Diensten</h2>
              <p className="text-gray-600 leading-relaxed">
                FitFlow AI levert AI-consultancy, procesoptimalisatie en automatiseringsoplossingen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Offertes en prijzen</h2>
              <p className="text-gray-600 leading-relaxed">
                Alle offertes zijn vrijblijvend en 14 dagen geldig. Prijzen zijn exclusief btw, tenzij anders vermeld.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Betaling</h2>
              <p className="text-gray-600 leading-relaxed">
                Betaling dient te geschieden binnen 14 dagen na factuurdatum, tenzij schriftelijk anders overeengekomen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Aansprakelijkheid</h2>
              <p className="text-gray-600 leading-relaxed">
                FitFlow AI is niet aansprakelijk voor indirecte schade, winstderving of gevolgschade.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Intellectueel eigendom</h2>
              <p className="text-gray-600 leading-relaxed">
                Alle door FitFlow AI ontwikkelde materialen, scripts en automatiseringen blijven eigendom van FitFlow AI, tenzij schriftelijk anders overeengekomen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Toepasselijk recht</h2>
              <p className="text-gray-600 leading-relaxed">
                Op deze voorwaarden is Nederlands recht van toepassing.
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

export default TermsPage;