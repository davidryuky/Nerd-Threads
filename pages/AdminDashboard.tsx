
import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { Order } from '../types';

const mockOrders: Order[] = [
    { id: '#NT12345', date: '01/01/2024', total: 179.80, status: 'Delivered', items: [] },
    { id: '#NT12346', date: '15/01/2024', total: 89.90, status: 'Shipped', items: [] },
    { id: '#NT12347', date: '28/01/2024', total: 99.90, status: 'Processing', items: [] },
    { id: '#NT12348', date: '29/01/2024', total: 250.00, status: 'Processing', items: [] },
];

type AdminView = 'dashboard' | 'products' | 'orders' | 'coupons';

const AdminDashboard: React.FC = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();
    const [activeView, setActiveView] = useState<AdminView>('dashboard');
    
    const handleLogout = () => {
        logout();
        navigate('/');
    };

    const renderView = () => {
        switch (activeView) {
            case 'products':
                return (
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Gerenciar Produtos</h2>
                        <div className="bg-gray-800 rounded-lg overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="bg-gray-700">
                                    <tr>
                                        <th className="p-4">Produto</th>
                                        <th className="p-4">Preço</th>
                                        <th className="p-4">Estoque</th>
                                        <th className="p-4">Ações</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map(p => (
                                        <tr key={p.id} className="border-b border-gray-700">
                                            <td className="p-4">{p.name}</td>
                                            <td className="p-4">R$ {p.price.toFixed(2)}</td>
                                            <td className="p-4">{p.stock}</td>
                                            <td className="p-4">
                                                <button className="text-cyan-400 mr-2">Editar</button>
                                                <button className="text-red-500">Excluir</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                );
            case 'orders':
                 return (
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Gerenciar Pedidos</h2>
                        <div className="bg-gray-800 rounded-lg overflow-x-auto">
                           <table className="w-full text-left">
                                <thead className="bg-gray-700">
                                    <tr>
                                        <th className="p-4">Pedido ID</th>
                                        <th className="p-4">Data</th>
                                        <th className="p-4">Total</th>
                                        <th className="p-4">Status</th>
                                        <th className="p-4">Ações</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {mockOrders.map(order => (
                                        <tr key={order.id} className="border-b border-gray-700">
                                            <td className="p-4">{order.id}</td>
                                            <td className="p-4">{order.date}</td>
                                            <td className="p-4">R$ {order.total.toFixed(2)}</td>
                                            <td className="p-4">{order.status}</td>
                                            <td className="p-4">
                                                <button className="text-cyan-400">Ver</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                );
            case 'dashboard':
            default:
                return (
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Visão Geral</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-gray-800 p-4 rounded-lg">
                                <h3 className="text-gray-400">Vendas Totais</h3>
                                <p className="text-3xl font-bold">R$ 15,234.50</p>
                            </div>
                             <div className="bg-gray-800 p-4 rounded-lg">
                                <h3 className="text-gray-400">Novos Pedidos</h3>
                                <p className="text-3xl font-bold">2</p>
                            </div>
                            <div className="bg-gray-800 p-4 rounded-lg">
                                <h3 className="text-gray-400">Total de Produtos</h3>
                                <p className="text-3xl font-bold">{products.length}</p>
                            </div>
                        </div>
                    </div>
                );
        }
    }

    return (
        <div className="min-h-screen bg-gray-900 text-white flex">
            <aside className="w-64 bg-gray-800 p-4 flex flex-col justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-cyan-400 mb-8">Admin Panel</h1>
                    <nav className="flex flex-col space-y-2">
                        <button onClick={() => setActiveView('dashboard')} className={`text-left p-3 rounded-md transition-colors ${activeView === 'dashboard' ? 'bg-cyan-500 text-black' : 'hover:bg-gray-700'}`}>Dashboard</button>
                        <button onClick={() => setActiveView('products')} className={`text-left p-3 rounded-md transition-colors ${activeView === 'products' ? 'bg-cyan-500 text-black' : 'hover:bg-gray-700'}`}>Produtos</button>
                        <button onClick={() => setActiveView('orders')} className={`text-left p-3 rounded-md transition-colors ${activeView === 'orders' ? 'bg-cyan-500 text-black' : 'hover:bg-gray-700'}`}>Pedidos</button>
                        <button onClick={() => setActiveView('coupons')} className={`text-left p-3 rounded-md transition-colors ${activeView === 'coupons' ? 'bg-cyan-500 text-black' : 'hover:bg-gray-700'}`}>Cupons</button>
                    </nav>
                </div>
                <div>
                     <button onClick={handleLogout} className="w-full text-left p-3 rounded-md text-red-500 hover:bg-red-500/10 transition-colors">Sair</button>
                </div>
            </aside>
            <main className="flex-grow p-8">
                {renderView()}
            </main>
        </div>
    );
};

export default AdminDashboard;
