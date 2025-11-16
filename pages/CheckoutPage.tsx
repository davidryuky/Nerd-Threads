
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const CheckoutPage: React.FC = () => {
    const { cartItems, totalPrice, clearCart } = useCart();
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would process the payment
        alert("Pedido realizado com sucesso!");
        clearCart();
        navigate('/order-confirmation');
    };

    if (cartItems.length === 0) {
        return <div className="text-center py-20 text-white">Seu carrinho está vazio para finalizar a compra.</div>;
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl font-bold text-white mb-8">Finalizar Compra</h1>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <h2 className="text-2xl font-bold text-white mb-6">Informações de Entrega</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                         <input type="text" placeholder="Nome Completo" required className="bg-gray-900 border border-gray-600 rounded-md p-3 focus:border-cyan-500 focus:outline-none"/>
                         <input type="email" placeholder="E-mail" required className="bg-gray-900 border border-gray-600 rounded-md p-3 focus:border-cyan-500 focus:outline-none"/>
                         <input type="text" placeholder="Endereço" required className="md:col-span-2 bg-gray-900 border border-gray-600 rounded-md p-3 focus:border-cyan-500 focus:outline-none"/>
                         <input type="text" placeholder="Cidade" required className="bg-gray-900 border border-gray-600 rounded-md p-3 focus:border-cyan-500 focus:outline-none"/>
                         <input type="text" placeholder="CEP" required className="bg-gray-900 border border-gray-600 rounded-md p-3 focus:border-cyan-500 focus:outline-none"/>
                         <input type="text" placeholder="Estado" required className="bg-gray-900 border border-gray-600 rounded-md p-3 focus:border-cyan-500 focus:outline-none"/>
                    </div>

                    <h2 className="text-2xl font-bold text-white mt-10 mb-6">Informações de Pagamento</h2>
                    <div className="space-y-4">
                        <input type="text" placeholder="Número do Cartão" required className="w-full bg-gray-900 border border-gray-600 rounded-md p-3 focus:border-cyan-500 focus:outline-none"/>
                        <input type="text" placeholder="Nome no Cartão" required className="w-full bg-gray-900 border border-gray-600 rounded-md p-3 focus:border-cyan-500 focus:outline-none"/>
                        <div className="grid grid-cols-2 gap-4">
                             <input type="text" placeholder="Validade (MM/AA)" required className="bg-gray-900 border border-gray-600 rounded-md p-3 focus:border-cyan-500 focus:outline-none"/>
                             <input type="text" placeholder="CVV" required className="bg-gray-900 border border-gray-600 rounded-md p-3 focus:border-cyan-500 focus:outline-none"/>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 h-fit sticky top-24">
                    <h2 className="text-2xl font-bold text-white mb-4">Seu Pedido</h2>
                    <div className="space-y-3 mb-4 max-h-60 overflow-y-auto">
                        {cartItems.map(item => (
                            <div key={`${item.id}-${item.size}`} className="flex justify-between items-center text-sm">
                                <span className="text-gray-300">{item.name} (x{item.quantity})</span>
                                <span className="text-gray-200 font-medium">R$ {(item.price * item.quantity).toFixed(2)}</span>
                            </div>
                        ))}
                    </div>
                    <div className="border-t border-gray-700 my-4"></div>
                     <div className="flex justify-between text-white font-bold text-xl">
                        <span>Total</span>
                        <span>R$ {totalPrice.toFixed(2)}</span>
                    </div>
                    <button type="submit" className="mt-6 w-full text-center block bg-cyan-500 text-black font-bold py-3 px-6 rounded-lg uppercase hover:bg-cyan-400 transition-colors neon-shadow-blue">
                        Pagar e Finalizar Pedido
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CheckoutPage;
