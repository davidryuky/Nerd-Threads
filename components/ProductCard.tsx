
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { theme } from '../theme';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className={`${theme.card} rounded-lg overflow-hidden group`}>
            <Link to={`/product/${product.id}`} className="block">
                <div className="relative w-full aspect-square overflow-hidden">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-4">
                    <h3 className={theme.heading.card}>{product.name}</h3>
                    <p className="text-sm text-gray-400 mt-1">{product.category}</p>
                    <div className="mt-4 flex items-center justify-between">
                        <p className={`text-xl font-semibold ${theme.textGlow}`}>R$ {product.price.toFixed(2)}</p>
                         <div className="text-xs text-cyan-400 font-bold py-2 px-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-x-0 translate-x-2">
                            Inspecionar Item &rarr;
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ProductCard;
