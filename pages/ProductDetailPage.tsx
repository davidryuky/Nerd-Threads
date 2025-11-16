
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../contexts/CartContext';
import ProductCard from '../components/ProductCard';

const ProductDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const product = products.find(p => p.id === id);
    const { addToCart } = useCart();

    const [selectedSize, setSelectedSize] = useState<string | null>(product ? product.sizes[0] : null);
    const [quantity, setQuantity] = useState(1);
    const [mainImage, setMainImage] = useState(product?.image);

    if (!product) {
        return <div className="text-center py-20 text-white">Produto não encontrado.</div>;
    }
    
    const handleAddToCart = () => {
        if (selectedSize) {
            addToCart(product, selectedSize, quantity);
            alert(`${product.name} adicionado ao carrinho!`);
        } else {
            alert("Por favor, selecione um tamanho.");
        }
    };
    
    const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Image Gallery */}
                <div>
                    <div className="aspect-square bg-gray-800 rounded-lg mb-4 overflow-hidden">
                        <img src={mainImage} alt={product.name} className="w-full h-full object-cover"/>
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        {product.gallery.map((img, index) => (
                             <div key={index} className="aspect-square bg-gray-800 rounded-lg cursor-pointer overflow-hidden border-2 border-transparent hover:border-cyan-400 transition-colors" onClick={() => setMainImage(img)}>
                                <img src={img} alt={`${product.name} thumbnail ${index + 1}`} className="w-full h-full object-cover"/>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Product Info */}
                <div>
                    <h1 className="text-4xl font-bold text-white">{product.name}</h1>
                    <p className="text-3xl font-semibold text-cyan-400 mt-4">R$ {product.price.toFixed(2)}</p>
                    <p className="text-gray-300 mt-6">{product.description}</p>
                    
                    <div className="mt-8">
                        <h3 className="text-lg font-semibold text-white">Tamanho:</h3>
                        <div className="flex flex-wrap gap-3 mt-3">
                            {product.sizes.map(size => (
                                <button 
                                    key={size} 
                                    onClick={() => setSelectedSize(size)}
                                    className={`w-12 h-12 border rounded-md transition-all duration-200 font-bold ${selectedSize === size ? 'bg-cyan-500 text-black border-cyan-500' : 'border-gray-600 hover:border-cyan-400'}`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="mt-8">
                         <h3 className="text-lg font-semibold text-white">Quantidade:</h3>
                         <div className="flex items-center mt-3">
                            <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="w-10 h-10 border border-gray-600 rounded-l-md hover:bg-gray-700">-</button>
                            <span className="w-12 h-10 flex items-center justify-center border-t border-b border-gray-600">{quantity}</span>
                            <button onClick={() => setQuantity(q => q + 1)} className="w-10 h-10 border border-gray-600 rounded-r-md hover:bg-gray-700">+</button>
                         </div>
                    </div>
                    
                    <button onClick={handleAddToCart} className="mt-8 w-full bg-cyan-500 text-black font-bold py-4 px-8 rounded-lg text-lg uppercase hover:bg-cyan-400 transition-all duration-300 transform hover:scale-105 neon-shadow-blue">
                        Adicionar ao Carrinho
                    </button>
                </div>
            </div>

            {/* Product Details & Reviews */}
            <div className="mt-16">
                 {/* You might also like */}
                <section className="mt-20">
                    <h2 className="text-3xl font-bold text-center text-white mb-8">Você também pode gostar</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {relatedProducts.map(p => (
                            <ProductCard key={p.id} product={p} />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ProductDetailPage;
