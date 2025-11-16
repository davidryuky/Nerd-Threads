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
    const featuredProducts = products.slice(0, 8);
    const offerProduct = products[1];

    return (
        <div className="space-y-20 md:space-y-32 pb-20">
            {/* Hero Section */}
            <section className="relative h-[70vh] md:h-[90vh] flex items-center justify-center text-center text-white overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
                <img src="https://picsum.photos/seed/hero-bg/1920/1080" alt="Hero background" className="absolute inset-0 w-full h-full object-cover scale-110" />
                <div className="relative z-20 p-4 animate-fade-in">
                    <h1 className="text-5xl md:text-8xl font-bold uppercase text-glow-accent tracking-widest font-cinzel">Forje Sua Lenda</h1>
                    <p className="mt-4 text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto">Itens lendários para aventureiros modernos. A melhor seleção da cultura geek, direto da nossa forja para a sua coleção.</p>
                    <Link to="/catalog" className="mt-8 inline-block theme-button">
                        Explorar o Arsenal
                    </Link>
                </div>
            </section>

            {/* Categories Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center text-white mb-10">Territórios Exploráveis</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                    {categories.map(category => (
                        <Link to="/catalog" key={category.name} className="relative rounded-lg overflow-hidden group aspect-w-4 aspect-h-3 border-2 border-transparent hover:border-cyan-400/50 transition-all duration-300">
                            <img src={category.img} alt={category.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-center p-4">
                                <h3 className="text-2xl font-bold text-white group-hover:text-glow-accent transition-colors">{category.name}</h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Featured Products Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center text-white mb-10">Arsenal da Semana</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {featuredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </section>

            {/* Offer Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="bg-gray-800 rounded-lg p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 border border-cyan-500/30 shadow-lg shadow-cyan-500/10">
                    <div className="md:w-1/2">
                        <img src={offerProduct.image} alt={offerProduct.name} className="rounded-lg w-full aspect-square object-cover border-2 border-cyan-500/50"/>
                    </div>
                    <div className="md:w-1/2 text-center md:text-left">
                        <h3 className="text-md font-bold text-cyan-400 uppercase tracking-widest">Tesouro em Destaque</h3>
                        <h2 className="text-4xl font-bold text-white mt-2">{offerProduct.name}</h2>
                        <p className="text-gray-300 mt-4">{offerProduct.description.substring(0, 150)}...</p>
                        <div className="flex items-center justify-center md:justify-start gap-4 mt-6">
                             <p className="text-3xl font-bold text-glow-accent">R$ {offerProduct.price.toFixed(2)}</p>
                             <p className="text-xl text-gray-500 line-through">R$ 119,90</p>
                        </div>
                        <Link to={`/product/${offerProduct.id}`} className="mt-8 inline-block theme-button">
                            Adquirir este Tesouro
                        </Link>
                    </div>
                </div>
            </section>
            
        </div>
    );
};

export default HomePage;