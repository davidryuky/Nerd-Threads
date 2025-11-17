
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { theme } from '../theme';

const CheckoutPage: React.FC = () => {
    const { cartItems, totalPrice, clearCart } = useCart();
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would process the payment
        console.log("Missão Concluída! Pagamento processado.");
        clearCart();
        navigate('/order-confirmation');
    };

    if (cartItems.length === 0) {
        return (
            <div className="text-center py-20 text-white">
                <p className="text-2xl">Sua mochila está vazia. Não há missão para finalizar.</p>
                <Link to="/catalog" className={`mt-8 inline-block ${theme.button}`}>Buscar Tesouros</Link>
            </div>
        );
    }

    return (
        <div className={theme.container.page}>
            <h1 className={theme.heading.page()}>Alquimia da Transação</h1>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className={`lg:col-span-2 ${theme.container.section}`}>
                    <h2 className={theme.heading.sub}>Informações do Aventureiro</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                         <input type="text" placeholder="Nome Completo" required className={`w-full ${theme.input}`}/>
                         <input type="email" placeholder="E-mail" required className={`w-full ${theme.input}`}/>
                         <input type="text" placeholder="Endereço (Sua Base de Operações)" required className={`md:col-span-2 w-full ${theme.input}`}/>
                         <input type="text" placeholder="Cidade" required className={`w-full ${theme.input}`}/>
                         <input type="text" placeholder="CEP" required className={`w-full ${theme.input}`}/>
                         <input type="text" placeholder="Estado" required className={`w-full ${theme.input}`}/>
                    </div>

                    <h2 className={`${theme.heading.sub} mt-10`}>Forma de Pagamento</h2>
                    <div className="space-y-4">
                        <input type="text" placeholder="Número do Cartão Mágico" required className={`w-full ${theme.input}`}/>
                        <input type="text" placeholder="Nome no Cartão" required className={`w-full ${theme.input}`}/>
                        <div className="grid grid-cols-2 gap-4">
                             <input type="text" placeholder="Validade (MM/AA)" required className={theme.input}/>
                             <input type="text" placeholder="CVV (Código Rúnico)" required className={theme.input}/>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 h-fit sticky top-24">
                    <h2 className="text-2xl font-bold text-white mb-4">Resumo da Missão</h2>
                    <div className="space-y-3 mb-4 max-h-60 overflow-y-auto pr-2">
                        {cartItems.map(item => (
                            <div key={`${item.id}-${item.size}`} className="flex justify-between items-center text-sm">
                                <span className="text-gray-300 truncate pr-2">{item.name} (x{item.quantity})</span>
                                <span className="text-gray-200 font-medium whitespace-nowrap">R$ {(item.price * item.quantity).toFixed(2)}</span>
                            </div>
                        ))}
                    </div>
                    <div className="border-t border-gray-700 my-4"></div>
                     <div className="flex justify-between text-white font-bold text-xl">
                        <span>Total</span>
                        <span className={theme.textGlow}>R$ {totalPrice.toFixed(2)}</span>
                    </div>
                    <button type="submit" className={`mt-6 w-full text-center block ${theme.button}`}>
                        Pagar e Concluir Missão
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CheckoutPage;
