
import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const categories = [
    { name: 'Animes', img: 'https://picsum.photos/seed/anime-cat/600/400' },
    { name: 'Games', img: 'https://picsum.photos/seed/games-cat/600/400' },
    { name: 'Filmes', img: 'https://picsum.photos/seed/movies-cat/600/400' },
    { name: 'Tecnologia', img: 'https://picsum.photos/seed/tech-cat/600/400' },
];

const HomePage: React.FC = () => {
    const featuredProducts = products.slice(0, 4);
    const offerProduct = products[1];

    return (
        <div className="space-y-16 md:space-y-24 pb-16">
            {/* Hero Section */}
            <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center text-center text-white overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
                <img src="https://picsum.photos/seed/hero-bg/1920/1080" alt="Hero background" className="absolute inset-0 w-full h-full object-cover animate-pulse-slow" />
                <div className="relative z-20 p-4">
                    <h1 className="text-4xl md:text-7xl font-bold uppercase neon-text-blue tracking-widest">Vista Sua Paixão</h1>
                    <p className="mt-4 text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto">As melhores camisetas da cultura geek, nerd e pop. Qualidade premium para fãs de verdade.</p>
                    <Link to="/catalog" className="mt-8 inline-block bg-cyan-500 text-black font-bold py-3 px-8 rounded-lg text-lg uppercase hover:bg-cyan-400 transition-all duration-300 transform hover:scale-105 neon-shadow-blue">
                        Explorar Coleção
                    </Link>
                </div>
            </section>

            {/* Categories Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-white mb-8">Nossas Categorias</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                    {categories.map(category => (
                        <Link to="/catalog" key={category.name} className="relative rounded-lg overflow-hidden group aspect-w-1 aspect-h-1">
                            <img src={category.img} alt={category.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                                <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Featured Products Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-white mb-8">Destaques da Semana</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {featuredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </section>

            {/* Offer Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="bg-gray-800 rounded-lg p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 border border-fuchsia-500/50 shadow-lg shadow-fuchsia-500/20">
                    <div className="md:w-1/2">
                        <img src={offerProduct.image} alt={offerProduct.name} className="rounded-lg w-full aspect-square object-cover"/>
                    </div>
                    <div className="md:w-1/2 text-center md:text-left">
                        <h3 className="text-sm font-bold text-fuchsia-400 uppercase">Oferta Especial</h3>
                        <h2 className="text-4xl font-bold text-white mt-2">{offerProduct.name}</h2>
                        <p className="text-gray-300 mt-4">{offerProduct.description.substring(0, 150)}...</p>
                        <div className="flex items-center justify-center md:justify-start gap-4 mt-6">
                             <p className="text-3xl font-bold text-fuchsia-400">R$ {offerProduct.price.toFixed(2)}</p>
                             <p className="text-xl text-gray-500 line-through">R$ 119,90</p>
                        </div>
                        <Link to={`/product/${offerProduct.id}`} className="mt-8 inline-block bg-fuchsia-500 text-black font-bold py-3 px-8 rounded-lg text-lg uppercase hover:bg-fuchsia-400 transition-all duration-300 transform hover:scale-105 neon-shadow-purple">
                            Comprar Agora
                        </Link>
                    </div>
                </div>
            </section>
            
        </div>
    );
};

export default HomePage;
