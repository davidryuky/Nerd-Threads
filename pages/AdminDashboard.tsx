import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { products as initialProducts } from '../data/products';
import { Order, Product } from '../types';

const mockOrders: Order[] = [
    { id: '#NT12345', date: '01/01/2024', total: 179.80, status: 'Delivered', items: [] },
    { id: '#NT12346', date: '15/01/2024', total: 89.90, status: 'Shipped', items: [] },
    { id: '#NT12347', date: '28/01/2024', total: 99.90, status: 'Processing', items: [] },
    { id: '#NT12348', date: '29/01/2024', total: 250.00, status: 'Processing', items: [] },
];

type AdminView = 'dashboard' | 'products' | 'orders' | 'coupons';

const newProductInitialState: Omit<Product, 'id' | 'reviews' | 'gallery' | 'details' | 'sizes'> & { sizes: string } = {
    name: '',
    price: 0,
    description: '',
    image: '',
    category: 'Animes',
    sizes: '',
    stock: 0,
};

const AdminDashboard: React.FC = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();
    const [activeView, setActiveView] = useState<AdminView>('dashboard');
    const [products, setProducts] = useState<Product[]>(initialProducts);
    const [isAddingProduct, setIsAddingProduct] = useState(false);
    const [newProduct, setNewProduct] = useState(newProductInitialState);

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setNewProduct(prev => ({ ...prev, [name]: name === 'price' || name === 'stock' ? parseFloat(value) : value }));
    };

    const handleAddProduct = (e: React.FormEvent) => {
        e.preventDefault();
        const productToAdd: Product = {
            ...newProduct,
            id: new Date().getTime().toString(),
            price: Number(newProduct.price),
            stock: Number(newProduct.stock),
            sizes: newProduct.sizes.split(',').map(s => s.trim().toUpperCase()),
            reviews: [],
            gallery: [`${newProduct.image}-2`, `${newProduct.image}-3`, `${newProduct.image}-4`],
            details: ['100% Algodão', 'Estampa de alta qualidade'],
        };
        setProducts(prev => [productToAdd, ...prev]);
        setNewProduct(newProductInitialState);
        setIsAddingProduct(false);
    };

    const renderAddProductForm = () => (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-cinzel font-bold">Forjar Novo Item</h2>
                <button onClick={() => setIsAddingProduct(false)} className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded">
                    Cancelar
                </button>
            </div>
            <form onSubmit={handleAddProduct} className="bg-gray-800 p-6 rounded-lg space-y-4 border border-gray-700">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" name="name" value={newProduct.name} onChange={handleInputChange} placeholder="Nome do Item" required className="rpg-input w-full" />
                    <input type="number" step="0.01" name="price" value={newProduct.price} onChange={handleInputChange} placeholder="Valor (moedas de ouro)" required className="rpg-input w-full" />
                </div>
                <textarea name="description" value={newProduct.description} onChange={handleInputChange} placeholder="Descrição do Item (Lore)" rows={4} required className="rpg-input w-full"></textarea>
                <input type="text" name="image" value={newProduct.image} onChange={handleInputChange} placeholder="URL da Imagem" required className="rpg-input w-full" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <select name="category" value={newProduct.category} onChange={handleInputChange} className="rpg-input w-full">
                        <option>Animes</option>
                        <option>Games</option>
                        <option>Filmes</option>
                        <option>Séries</option>
                        <option>Humor</option>
                        <option>Tecnologia</option>
                    </select>
                    <input type="text" name="sizes" value={newProduct.sizes} onChange={handleInputChange} placeholder="Tamanhos (P,M,G)" required className="rpg-input w-full" />
                    <input type="number" name="stock" value={newProduct.stock} onChange={handleInputChange} placeholder="Estoque" required className="rpg-input w-full" />
                </div>
                <button type="submit" className="w-full rpg-button">
                    Forjar Item
                </button>
            </form>
        </div>
    );
    
    const renderProductsView = () => (
         <div>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-cinzel font-bold">Gerenciar Arsenal</h2>
                <button onClick={() => setIsAddingProduct(true)} className="rpg-button">
                    Forjar Novo Item
                </button>
            </div>
            <div className="bg-gray-800 rounded-lg overflow-x-auto border border-gray-700">
                <table className="w-full text-left">
                    <thead className="bg-gray-700/50">
                        <tr>
                            <th className="p-4 font-cinzel">Item</th>
                            <th className="p-4 font-cinzel">Valor</th>
                            <th className="p-4 font-cinzel">Estoque</th>
                            <th className="p-4 font-cinzel">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(p => (
                            <tr key={p.id} className="border-b border-gray-700">
                                <td className="p-4">{p.name}</td>
                                <td className="p-4">R$ {p.price.toFixed(2)}</td>
                                <td className="p-4">{p.stock}</td>
                                <td className="p-4">
                                    <button className="text-amber-400 mr-4 hover:underline">Editar</button>
                                    <button className="text-red-500 hover:underline">Destruir</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

    const renderView = () => {
        switch (activeView) {
            case 'products':
                return isAddingProduct ? renderAddProductForm() : renderProductsView();
            case 'orders':
                 return (
                    <div>
                        <h2 className="text-3xl font-cinzel font-bold mb-6">Gerenciar Missões</h2>
                        <div className="bg-gray-800 rounded-lg overflow-x-auto border border-gray-700">
                           <table className="w-full text-left">
                                <thead className="bg-gray-700/50">
                                    <tr>
                                        <th className="p-4 font-cinzel">Missão ID</th>
                                        <th className="p-4 font-cinzel">Data</th>
                                        <th className="p-4 font-cinzel">Recompensa</th>
                                        <th className="p-4 font-cinzel">Status</th>
                                        <th className="p-4 font-cinzel">Ações</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {mockOrders.map(order => (
                                        <tr key={order.id} className="border-b border-gray-700">
                                            <td className="p-4">{order.id}</td>
                                            <td className="p-4">{order.date}</td>
                                            <td className="p-4 text-amber-400">R$ {order.total.toFixed(2)}</td>
                                            <td className="p-4">{order.status}</td>
                                            <td className="p-4">
                                                <button className="text-amber-400 hover:underline">Ver Detalhes</button>
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
                        <h2 className="text-3xl font-cinzel font-bold mb-6">Relatório da Guilda</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                                <h3 className="text-gray-400 font-cinzel">Tesouro Total</h3>
                                <p className="text-4xl font-bold text-glow-gold">R$ 15,234.50</p>
                            </div>
                             <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                                <h3 className="text-gray-400 font-cinzel">Novas Missões</h3>
                                <p className="text-4xl font-bold">2</p>
                            </div>
                            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                                <h3 className="text-gray-400 font-cinzel">Itens no Arsenal</h3>
                                <p className="text-4xl font-bold">{products.length}</p>
                            </div>
                        </div>
                    </div>
                );
        }
    }

    return (
        <div className="min-h-screen bg-gray-900 text-white flex">
            <aside className="w-64 bg-gray-800 p-4 flex flex-col justify-between border-r border-gray-700">
                <div>
                    <h1 className="text-3xl font-cinzel font-bold text-glow-gold mb-10 text-center">Mestre da Guilda</h1>
                    <nav className="flex flex-col space-y-3 font-cinzel text-lg">
                        <button onClick={() => setActiveView('dashboard')} className={`text-left p-4 rounded-md transition-colors ${activeView === 'dashboard' ? 'bg-amber-500 text-black' : 'hover:bg-gray-700'}`}>Relatório</button>
                        <button onClick={() => setActiveView('products')} className={`text-left p-4 rounded-md transition-colors ${activeView === 'products' ? 'bg-amber-500 text-black' : 'hover:bg-gray-700'}`}>Arsenal</button>
                        <button onClick={() => setActiveView('orders')} className={`text-left p-4 rounded-md transition-colors ${activeView === 'orders' ? 'bg-amber-500 text-black' : 'hover:bg-gray-700'}`}>Missões</button>
                        <button onClick={() => setActiveView('coupons')} className={`text-left p-4 rounded-md transition-colors ${activeView === 'coupons' ? 'bg-amber-500 text-black' : 'hover:bg-gray-700'}`}>Pergaminhos</button>
                    </nav>
                </div>
                <div>
                     <button onClick={handleLogout} className="w-full text-left p-4 rounded-md text-red-500 hover:bg-red-500/10 transition-colors font-cinzel text-lg">Encerrar Sessão</button>
                </div>
            </aside>
            <main className="flex-grow p-8 overflow-y-auto">
                {renderView()}
            </main>
        </div>
    );
};

export default AdminDashboard;
