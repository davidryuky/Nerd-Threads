
import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Order } from '../types';

const mockOrders: Order[] = [
    { id: '#NT12345', date: '01/01/2024', total: 179.80, status: 'Delivered', items: [] },
    { id: '#NT12346', date: '15/01/2024', total: 89.90, status: 'Shipped', items: [] },
    { id: '#NT12347', date: '28/01/2024', total: 99.90, status: 'Processing', items: [] },
];

type DashboardView = 'account' | 'orders' | 'address' | 'support';

const DashboardPage: React.FC = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [activeView, setActiveView] = useState<DashboardView>('account');

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    const renderView = () => {
        switch (activeView) {
            case 'orders':
                return (
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Meus Pedidos</h2>
                        <div className="space-y-4">
                            {mockOrders.map(order => (
                                <div key={order.id} className="bg-gray-800 p-4 rounded-lg flex justify-between items-center">
                                    <div>
                                        <p className="font-bold">{order.id}</p>
                                        <p className="text-sm text-gray-400">{order.date}</p>
                                    </div>
                                    <p>R$ {order.total.toFixed(2)}</p>
                                    <p className={`px-3 py-1 text-sm rounded-full ${order.status === 'Delivered' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>{order.status}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 'address':
                 return (
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Meu Endereço</h2>
                        <div className="bg-gray-800 p-6 rounded-lg">
                            <p>Rua dos Nerds, 123</p>
                            <p>Bairro da Programação</p>
                            <p>São Paulo, SP - 01010-010</p>
                        </div>
                    </div>
                );
            case 'support':
                return (
                     <div>
                        <h2 className="text-2xl font-bold mb-4">Suporte</h2>
                        <p>Precisa de ajuda? Entre em contato conosco através do email <a href="mailto:suporte@nerdthreads.com" className="text-cyan-400">suporte@nerdthreads.com</a>.</p>
                    </div>
                );
            case 'account':
            default:
                return (
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Minha Conta</h2>
                        <div className="bg-gray-800 p-6 rounded-lg">
                            <p><strong>Nome:</strong> {user?.name}</p>
                            <p><strong>Email:</strong> {user?.email}</p>
                        </div>
                    </div>
                );
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl font-bold text-white mb-8">Olá, {user?.name}!</h1>
            <div className="flex flex-col md:flex-row gap-8">
                <aside className="w-full md:w-1/4">
                    <nav className="flex flex-col space-y-2">
                        <button onClick={() => setActiveView('account')} className={`text-left p-3 rounded-md transition-colors ${activeView === 'account' ? 'bg-cyan-500 text-black' : 'hover:bg-gray-800'}`}>Minha Conta</button>
                        <button onClick={() => setActiveView('orders')} className={`text-left p-3 rounded-md transition-colors ${activeView === 'orders' ? 'bg-cyan-500 text-black' : 'hover:bg-gray-800'}`}>Meus Pedidos</button>
                        <button onClick={() => setActiveView('address')} className={`text-left p-3 rounded-md transition-colors ${activeView === 'address' ? 'bg-cyan-500 text-black' : 'hover:bg-gray-800'}`}>Endereço</button>
                        <button onClick={() => setActiveView('support')} className={`text-left p-3 rounded-md transition-colors ${activeView === 'support' ? 'bg-cyan-500 text-black' : 'hover:bg-gray-800'}`}>Suporte</button>
                        <button onClick={handleLogout} className="text-left p-3 rounded-md text-red-500 hover:bg-red-500/10 transition-colors">Sair</button>
                    </nav>
                </aside>
                <main className="w-full md:w-3/4 bg-gray-900/50 p-6 rounded-lg border border-gray-700">
                    {renderView()}
                </main>
            </div>
        </div>
    );
};

export default DashboardPage;
