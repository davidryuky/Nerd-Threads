
import React from 'react';
import { Link } from 'react-router-dom';

const OrderConfirmationPage: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
             <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center bg-green-500/20 rounded-full">
                <svg className="w-16 h-16 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
             </div>
            <h1 className="text-4xl font-bold text-white mb-4">Obrigado pela sua compra!</h1>
            <p className="text-lg text-gray-300 mb-2">Seu pedido #NT12348 foi recebido e está sendo processado.</p>
            <p className="text-gray-400 mb-8">Você receberá uma confirmação por e-mail em breve com os detalhes do pedido.</p>
            <div className="flex justify-center gap-4">
                 <Link to="/catalog" className="bg-gray-700 text-white font-bold py-3 px-8 rounded-lg hover:bg-gray-600 transition-colors">
                    Continuar Comprando
                </Link>
                <Link to="/dashboard" className="bg-cyan-500 text-black font-bold py-3 px-8 rounded-lg hover:bg-cyan-400 transition-colors">
                    Ver Meus Pedidos
                </Link>
            </div>
        </div>
    );
};

export default OrderConfirmationPage;
