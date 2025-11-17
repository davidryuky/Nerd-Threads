
import React, { useState } from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { theme } from '../theme';

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
        <div className={theme.container.page}>
            <header className="text-center mb-12">
                <h1 className={`text-5xl font-bold text-white font-cinzel ${theme.textGlow}`}>Arsenal do Aventureiro</h1>
                <p className="text-lg text-gray-400 mt-2">Equipe-se com os melhores itens para a sua jornada.</p>
            </header>

            <div className="flex flex-col md:flex-row gap-10">
                {/* Filters */}
                <aside className="w-full md:w-1/4 lg:w-1/5">
                    <div className="sticky top-24 bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                        <h2 className="text-2xl font-semibold text-white mb-6 border-b border-gray-700 pb-3">Encantamentos</h2>
                        <div className="space-y-8">
                            <div>
                                <h3 className={theme.text.label}>Categorias</h3>
                                <ul className="space-y-2">
                                    {categories.map(cat => (
                                        <li key={cat}>
                                            <button 
                                                onClick={() => handleFilter(cat)}
                                                className={theme.catalogFilterButton(activeCategory === cat)}
                                            >
                                                {cat}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className={theme.text.label}>Tamanho</h3>
                                <div className="flex flex-wrap gap-2">
                                    {sizes.map(size => (
                                        <button key={size} className="w-10 h-10 border border-gray-600 rounded-md hover:border-cyan-400 hover:text-cyan-400 transition-colors focus:border-cyan-500 focus:bg-cyan-500 focus:text-black">{size}</button>
                                    ))}
                                </div>
                            </div>
                             <div>
                                <h3 className={theme.text.label}>Valor</h3>
                                <input type="range" min="50" max="150" className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-cyan-500" />
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Product Grid */}
                <main className="w-full md:w-3/4 lg:w-4/5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProducts.length > 0 ? filteredProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        )) : (
                            <div className="col-span-full text-center py-16 bg-gray-800 rounded-lg">
                                <p className="text-2xl text-gray-400">Nenhum item encontrado com estes encantamentos.</p>
                            </div>
                        )}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default CatalogPage;
