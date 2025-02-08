import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <Section title="Petits prix sur les appareils avec Alexa" />
      <Section title="Aménagez votre maison" />
      <Section title="Cuisine et maison" />
      <Section title="High-Tech" />
      <Section title="Entretenez-vous" />
    </div>
  );
};

const Section: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Remplacez ceci par des composants ProductCard */}
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

const ProductCard: React.FC = () => {
  return (
    <div className="border rounded-lg p-4">
      <img src="image_url" alt="Produit" className="w-full h-32 object-cover" />
      <h3 className="text-lg font-semibold">Titre du produit</h3>
      <p className="text-gray-600">Prix</p>
    </div>
  );
};

export default Home;
