import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../contexts/CartContext';
import { useNotification } from '../contexts/NotificationContext';
import ProductCard from '../components/ProductCard';

const ProductDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const product = products.find(p => p.id === id);
    const { addToCart } = useCart();
    const { showNotification } = useNotification();

    const [selectedSize, setSelectedSize] = useState<string | null>(product ? product.sizes[0] : null);
    const [quantity, setQuantity] = useState(1);
    const [mainImage, setMainImage] = useState(product?.image);

    if (!product) {
        return <div className="text-center py-20 text-white font-cinzel text-2xl">Este item não foi encontrado no nosso arsenal.</div>;
    }
    
    const handleAddToCart = () => {
        if (selectedSize) {
            addToCart(product, selectedSize, quantity);
            showNotification('Item adicionado à sua Mochila!', 'success');
        } else {
            showNotification('Aventureiro, escolha um tamanho!', 'warning');
        }
    };
    
    const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Image Gallery */}
                <div>
                    <div className="aspect-square bg-gray-800 rounded-lg mb-4 overflow-hidden border-2 border-gray-700">
                        <img src={mainImage} alt={product.name} className="w-full h-full object-cover"/>
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        {[product.image, ...product.gallery].slice(0, 4).map((img, index) => (
                             <div key={index} className={`aspect-square bg-gray-800 rounded-lg cursor-pointer overflow-hidden border-2 transition-colors ${mainImage === img ? 'border-amber-400' : 'border-gray-700 hover:border-amber-400/50'}`} onClick={() => setMainImage(img)}>
                                <img src={img} alt={`${product.name} thumbnail ${index + 1}`} className="w-full h-full object-cover"/>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Product Info */}
                <div>
                    <p className="text-amber-400 uppercase tracking-widest text-sm">{product.category}</p>
                    <h1 className="text-4xl font-bold font-cinzel text-white mt-2">{product.name}</h1>
                    <p className="text-4xl font-semibold text-glow-gold mt-4">R$ {product.price.toFixed(2)}</p>
                    <p className="text-gray-300 mt-6 leading-relaxed">{product.description}</p>
                    
                    <div className="mt-8">
                        <h3 className="text-lg font-cinzel font-semibold text-white">Tamanho:</h3>
                        <div className="flex flex-wrap gap-3 mt-3">
                            {product.sizes.map(size => (
                                <button 
                                    key={size} 
                                    onClick={() => setSelectedSize(size)}
                                    className={`w-14 h-14 border rounded-md transition-all duration-200 font-bold text-lg ${selectedSize === size ? 'bg-amber-500 text-black border-amber-500' : 'border-gray-600 hover:border-amber-400'}`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="mt-8">
                         <h3 className="text-lg font-cinzel font-semibold text-white">Quantidade:</h3>
                         <div className="flex items-center mt-3">
                            <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="w-12 h-12 border border-gray-600 rounded-l-md hover:bg-gray-700 text-2xl">-</button>
                            <span className="w-16 h-12 flex items-center justify-center border-t border-b border-gray-600 text-xl font-bold">{quantity}</span>
                            <button onClick={() => setQuantity(q => q + 1)} className="w-12 h-12 border border-gray-600 rounded-r-md hover:bg-gray-700 text-2xl">+</button>
                         </div>
                    </div>
                    
                    <button onClick={handleAddToCart} className="mt-8 w-full rpg-button text-lg">
                        Guardar na Mochila
                    </button>
                </div>
            </div>

            {/* Related Products */}
            <div className="mt-24">
                 <h2 className="text-4xl font-bold text-center text-white mb-10">Itens Similares na Forja</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {relatedProducts.map(p => (
                        <ProductCard key={p.id} product={p} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;