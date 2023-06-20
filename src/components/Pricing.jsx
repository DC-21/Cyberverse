import React from 'react';

const Pricing = () => {
  const pricingData = [
    { title: 'Basic', price: '$9.99', features: ['Feature 1', 'Feature 2', 'Feature 3'] },
    { title: 'Standard', price: '$19.99', features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'] },
    { title: 'Premium', price: '$29.99', features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'] },
    { title: 'Basic', price: '$9.99', features: ['Feature 1', 'Feature 2', 'Feature 3'] },
    { title: 'Standard', price: '$19.99', features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'] },
    { title: 'Premium', price: '$29.99', features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'] },
{ title: 'Basic', price: '$9.99', features: ['Feature 1', 'Feature 2', 'Feature 3'] },
    { title: 'Standard', price: '$19.99', features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'] },
    { title: 'Premium', price: '$29.99', features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'] },

  ];

  return (
    <section className="bg-gray-200 py-8 w-full h-screen">
      <h2 className="text-3xl text-center font-bold mb-4 text-white">Pricing</h2>
      <div className="flex overflow-x-scroll space-x-4 px-4">
        {pricingData.map((card, index) => (
          <div className="bg-white rounded shadow p-4 w-64 flex-shrink-0" key={index}>
            <h3 className="text-xl font-bold mb-2">{card.title}</h3>
            <p className="text-2xl mb-4">{card.price}</p>
            <ul className="list-disc pl-4">
              {card.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
