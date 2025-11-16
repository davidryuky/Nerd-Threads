
import React, { useState } from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const categories = ['Todos', 'Animes', 'Games', 'Filmes', 'Séries', 'Humor', 'Tecnologia'];
const sizes = ['P', 'M', 'G', 'GG', 'XG'];

const CatalogPage: React.FC = () => {
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [activeCategory, setActiveCategory] = useState('Todos');

    const handleFilter = (category: string) => {
        setActiveCategory(category);
        if (category === 'Todos') {
            setFilteredProducts(products);
        } else {
            setFilteredProducts(products.filter(p => p.category === category));
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <header className="text-center mb-12">
                <h1 className="text-5xl font-bold text-white neon-text-blue">Nosso Catálogo</h1>
                <p className="text-lg text-gray-400 mt-2">Encontre a camiseta que representa seu universo.</p>
            </header>

            <div className="flex flex-col md:flex-row gap-8">
                {/* Filters */}
                <aside className="w-full md:w-1/4 lg:w-1/5">
                    <div className="sticky top-24">
                        <h2 className="text-2xl font-semibold text-white mb-4">Filtros</h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="font-bold text-cyan-400 mb-2">Categorias</h3>
                                <ul className="space-y-1">
                                    {categories.map(cat => (
                                        <li key={cat}>
                                            <button 
                                                onClick={() => handleFilter(cat)}
                                                className={`w-full text-left p-2 rounded-md transition-colors ${activeCategory === cat ? 'bg-cyan-500 text-black' : 'hover:bg-gray-800'}`}
                                            >
                                                {cat}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-bold text-cyan-400 mb-2">Tamanho</h3>
                                <div className="flex flex-wrap gap-2">
                                    {sizes.map(size => (
                                        <button key={size} className="w-10 h-10 border border-gray-600 rounded-md hover:border-cyan-400 transition-colors">{size}</button>
                                    ))}
                                </div>
                            </div>
                             <div>
                                <h3 className="font-bold text-cyan-400 mb-2">Preço</h3>
                                <input type="range" min="50" max="150" className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer" />
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Product Grid */}
                <main className="w-full md:w-3/4 lg:w-4/5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default CatalogPage;
