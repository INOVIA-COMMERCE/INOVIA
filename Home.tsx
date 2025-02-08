import React from 'react';
import ReactDOM from 'react-dom';
import './styles/tailwind.css';

const App: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <h1 className="text-white">Inovia</h1>
      {/* Ajoutez les liens de navigation ici */}
    </nav>
  );
};

const Home: React.FC = () => {
  return (
    <>
      <Section title="Petits prix sur les appareils avec Alexa" />
      <Section title="Aménagez votre maison" />
      <Section title="Cuisine et maison" />
      <Section title="High-Tech" />
      <Section title="Entretenez-vous" />
    </>
  );
};

const Section: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
      <img src="https://via.placeholder.com/150" alt="Produit" className="w-full h-32 object-cover" />
      <h3 className="text-lg font-semibold">Titre du produit</h3>
      <p className="text-gray-600">Prix</p>
    </div>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 p-4 text-white text-center">
      &copy; 2025 Inovia. Tous droits réservés.
    </footer>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
