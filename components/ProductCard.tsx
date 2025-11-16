
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 group transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
            <Link to={`/product/${product.id}`} className="block">
                <div className="relative w-full aspect-square overflow-hidden">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                </div>
                <div className="p-4">
                    <h3 className="text-lg font-bold text-white truncate">{product.name}</h3>
                    <p className="text-sm text-gray-400 mt-1">{product.category}</p>
                    <div className="mt-4 flex items-center justify-between">
                        <p className="text-xl font-semibold text-cyan-400">R$ {product.price.toFixed(2)}</p>
                         <button className="text-xs bg-gray-700 text-cyan-400 font-bold py-2 px-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Ver Detalhes
                        </button>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ProductCard;
