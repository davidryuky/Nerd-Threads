
import React from 'react';
import { Link } from 'react-router-dom';
import { theme } from '../theme';

const OrderConfirmationPage: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
             <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center bg-cyan-500/20 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4"></path><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>
             </div>
            <h1 className={theme.heading.page(true)}>Missão Cumprida!</h1>
            <p className="text-lg text-gray-300 mb-2">Seu pedido #NT12348 foi registrado nos anais da Guilda.</p>
            <p className="text-gray-400 mb-8">Um corvo mensageiro foi enviado ao seu e-mail com os detalhes da sua aquisição.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                 <Link to="/catalog" className="bg-gray-700 text-white font-bold py-3 px-8 rounded-lg hover:bg-gray-600 transition-colors">
                    Buscar mais Tesouros
                </Link>
                <Link to="/dashboard" className={theme.button}>
                    Ver minhas Missões
                </Link>
            </div>
        </div>
    );
};

export default OrderConfirmationPage;
