import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Order } from '../types';

const mockOrders: Order[] = [
    { id: '#NT12345', date: '01/01/2024', total: 179.80, status: 'Delivered', items: [] },
    { id: '#NT12346', date: '15/01/2024', total: 89.90, status: 'Shipped', items: [] },
    // FIX: Corrected the type of 'total' from string to number and added the missing 'status' property.
    { id: '#NT12347', date: '28/01/2024', total: 92.50, status: 'Processing', items: [] },
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
    
    const getStatusClass = (status: Order['status']) => {
        switch (status) {
            case 'Delivered': return 'bg-green-500/20 text-green-400';
            case 'Shipped': return 'bg-blue-500/20 text-blue-400';
            case 'Processing': return 'bg-yellow-500/20 text-yellow-400';
            case 'Cancelled': return 'bg-red-500/20 text-red-400';
            default: return 'bg-gray-500/20 text-gray-400';
        }
    }

    const renderView = () => {
        switch (activeView) {
            case 'orders':
                return (
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Minhas Missões</h2>
                        <div className="space-y-4">
                            {mockOrders.map(order => (
                                <div key={order.id} className="bg-gray-800 p-4 rounded-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                    <div className="flex-1">
                                        <p className="font-bold text-lg">{order.id}</p>
                                        <p className="text-sm text-gray-400">{order.date}</p>
                                    </div>
                                    <p className="text-lg text-cyan-400">R$ {order.total.toFixed(2)}</p>
                                    <p className={`px-3 py-1 text-sm rounded-full font-semibold ${getStatusClass(order.status)}`}>{order.status}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 'address':
                 return (
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Minha Base de Operações</h2>
                        <div className="bg-gray-800 p-6 rounded-lg text-lg">
                            <p>Rua dos Nerds, 123</p>
                            <p>Bairro da Programação</p>
                            <p>São Paulo, SP - 01010-010</p>
                        </div>
                    </div>
                );
            case 'support':
                return (
                     <div>
                        <h2 className="text-3xl font-bold mb-6">Fale com um Mestre</h2>
                        <p className="text-lg">Precisa de ajuda? Envie um corvo mensageiro para <a href="mailto:suporte@nerdthreads.com" className="text-cyan-400 hover:underline">suporte@nerdthreads.com</a>.</p>
                    </div>
                );
            case 'account':
            default:
                return (
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Ficha do Aventureiro</h2>
                        <div className="bg-gray-800 p-6 rounded-lg text-lg space-y-2">
                            <p><strong>Nome:</strong> {user?.name}</p>
                            <p><strong>Email:</strong> {user?.email}</p>
                        </div>
                    </div>
                );
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-5xl font-bold text-white mb-8">Bem-vindo, <span className="text-glow-accent">{user?.name}!</span></h1>
            <div className="flex flex-col md:flex-row gap-10">
                <aside className="w-full md:w-1/4">
                    <nav className="flex flex-col space-y-2 text-lg">
                        <button onClick={() => setActiveView('account')} className={`text-left p-4 rounded-md transition-colors ${activeView === 'account' ? 'bg-cyan-500 text-black' : 'hover:bg-gray-800'}`}>Minha Ficha</button>
                        <button onClick={() => setActiveView('orders')} className={`text-left p-4 rounded-md transition-colors ${activeView === 'orders' ? 'bg-cyan-500 text-black' : 'hover:bg-gray-800'}`}>Missões</button>
                        <button onClick={() => setActiveView('address')} className={`text-left p-4 rounded-md transition-colors ${activeView === 'address' ? 'bg-cyan-500 text-black' : 'hover:bg-gray-800'}`}>Base</button>
                        <button onClick={() => setActiveView('support')} className={`text-left p-4 rounded-md transition-colors ${activeView === 'support' ? 'bg-cyan-500 text-black' : 'hover:bg-gray-800'}`}>Suporte</button>
                        <button onClick={handleLogout} className="text-left p-4 rounded-md text-red-500 hover:bg-red-500/10 transition-colors">Abandonar Sessão</button>
                    </nav>
                </aside>
                <main className="w-full md:w-3/4 bg-gray-900/50 p-8 rounded-lg border border-gray-700">
                    {renderView()}
                </main>
            </div>
        </div>
    );
};

export default DashboardPage;