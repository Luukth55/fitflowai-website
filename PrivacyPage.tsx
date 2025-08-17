import React from 'react';

const PrivacyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Privacybeleid – FitFlow AI
          </h1>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="space-y-8">
            <section>
              <p className="text-gray-600 leading-relaxed mb-6">
                FitFlow AI respecteert uw privacy en verwerkt persoonsgegevens conform de AVG.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Welke gegevens</h2>
              <p className="text-gray-600 leading-relaxed">
                Naam, e-mailadres, bedrijfsgegevens, ingevulde formulieren, website-interactie.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Doel</h2>
              <p className="text-gray-600 leading-relaxed">
                Dienstverlening, communicatie, facturatie en marketing.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Bewaartermijn</h2>
              <p className="text-gray-600 leading-relaxed">
                Gegevens worden maximaal 5 jaar bewaard.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Delen van gegevens</h2>
              <p className="text-gray-600 leading-relaxed">
                Alleen met partners die nodig zijn voor onze dienstverlening (bijv. hosting, e-mail, betaalproviders).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Rechten</h2>
              <p className="text-gray-600 leading-relaxed">
                U heeft recht op inzage, correctie, verwijdering en dataportabiliteit.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact</h2>
              <p className="text-gray-600 leading-relaxed">
                <a href="mailto:info@fitflowai.nl" className="text-blue-600 hover:text-blue-700">
                  info@fitflowai.nl
                </a>
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

export default PrivacyPage;