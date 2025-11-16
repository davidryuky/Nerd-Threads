
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const CartPage: React.FC = () => {
    const { cartItems, removeFromCart, updateQuantity, totalPrice, cartCount } = useCart();

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl font-bold text-white mb-8">Seu Carrinho</h1>
            {cartCount === 0 ? (
                <div className="text-center py-20 bg-gray-800 rounded-lg">
                    <p className="text-2xl text-gray-300">Seu carrinho está vazio.</p>
                    <Link to="/catalog" className="mt-6 inline-block bg-cyan-500 text-black font-bold py-3 px-8 rounded-lg uppercase hover:bg-cyan-400 transition-colors">
                        Continuar Comprando
                    </Link>
                </div>
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-4">
                        {cartItems.map(item => (
                            <div key={`${item.id}-${item.size}`} className="flex items-center bg-gray-800 p-4 rounded-lg border border-gray-700">
                                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-md" />
                                <div className="flex-grow ml-4">
                                    <h2 className="text-lg font-bold text-white">{item.name}</h2>
                                    <p className="text-sm text-gray-400">Tamanho: {item.size}</p>
                                    <p className="text-md text-cyan-400 font-semibold mt-1">R$ {item.price.toFixed(2)}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input 
                                        type="number" 
                                        value={item.quantity}
                                        onChange={(e) => updateQuantity(item.id, item.size, parseInt(e.target.value))}
                                        className="w-16 bg-gray-900 text-center rounded-md border border-gray-600"
                                        min="1"
                                    />
                                    <button onClick={() => removeFromCart(item.id, item.size)} className="text-red-500 hover:text-red-400 p-2">
                                         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 h-fit sticky top-24">
                        <h2 className="text-2xl font-bold text-white mb-4">Resumo do Pedido</h2>
                        <div className="space-y-3">
                            <div className="flex justify-between text-gray-300">
                                <span>Subtotal ({cartCount} itens)</span>
                                <span>R$ {totalPrice.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-gray-300">
                                <span>Frete</span>
                                <span>Grátis</span>
                            </div>
                            <div className="border-t border-gray-700 my-2"></div>
                            <div className="flex justify-between text-white font-bold text-xl">
                                <span>Total</span>
                                <span>R$ {totalPrice.toFixed(2)}</span>
                            </div>
                        </div>
                        <Link to="/checkout" className="mt-6 w-full text-center block bg-cyan-500 text-black font-bold py-3 px-6 rounded-lg uppercase hover:bg-cyan-400 transition-colors neon-shadow-blue">
                            Finalizar Compra
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartPage;
