
import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { products as initialProducts } from '../data/products';
import { Order, Product } from '../types';
import { theme } from '../theme';

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
                <h2 className={theme.heading.subLeft}>Forjar Novo Item</h2>
                <button onClick={() => setIsAddingProduct(false)} className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded">
                    Cancelar
                </button>
            </div>
            <form onSubmit={handleAddProduct} className="bg-gray-800 p-6 rounded-lg space-y-4 border border-gray-700">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" name="name" value={newProduct.name} onChange={handleInputChange} placeholder="Nome do Item" required className={`w-full ${theme.input}`} />
                    <input type="number" step="0.01" name="price" value={newProduct.price} onChange={handleInputChange} placeholder="Valor (moedas de ouro)" required className={`w-full ${theme.input}`} />
                </div>
                <textarea name="description" value={newProduct.description} onChange={handleInputChange} placeholder="Descrição do Item (Lore)" rows={4} required className={`w-full ${theme.input}`}></textarea>
                <input type="text" name="image" value={newProduct.image} onChange={handleInputChange} placeholder="URL da Imagem" required className={`w-full ${theme.input}`} />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <select name="category" value={newProduct.category} onChange={handleInputChange} className={`w-full ${theme.input}`}>
                        <option>Animes</option>
                        <option>Games</option>
                        <option>Filmes</option>
                        <option>Séries</option>
                        <option>Humor</option>
                        <option>Tecnologia</option>
                    </select>
                    <input type="text" name="sizes" value={newProduct.sizes} onChange={handleInputChange} placeholder="Tamanhos (P,M,G)" required className={`w-full ${theme.input}`} />
                    <input type="number" name="stock" value={newProduct.stock} onChange={handleInputChange} placeholder="Estoque" required className={`w-full ${theme.input}`} />
                </div>
                <button type="submit" className={`w-full ${theme.button}`}>
                    Forjar Item
                </button>
            </form>
        </div>
    );
    
    const renderProductsView = () => (
         <div>
            <div className="flex justify-between items-center mb-6">
                <h2 className={theme.heading.subLeft}>Gerenciar Arsenal</h2>
                <button onClick={() => setIsAddingProduct(true)} className={theme.button}>
                    Forjar Novo Item
                </button>
            </div>
            <div className={theme.admin.table.container}>
                <table className="w-full text-left">
                    <thead className={theme.admin.table.header}>
                        <tr>
                            <th className={theme.admin.table.th}>Item</th>
                            <th className={theme.admin.table.th}>Valor</th>
                            <th className={theme.admin.table.th}>Estoque</th>
                            <th className={theme.admin.table.th}>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(p => (
                            <tr key={p.id} className={theme.admin.table.tr}>
                                <td className={theme.admin.table.td}>{p.name}</td>
                                <td className={theme.admin.table.td}>R$ {p.price.toFixed(2)}</td>
                                <td className={theme.admin.table.td}>{p.stock}</td>
                                <td className={theme.admin.table.td}>
                                    <button className={`${theme.text.link} mr-4`}>Editar</button>
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
                        <h2 className={theme.heading.subLeft}>Gerenciar Missões</h2>
                        <div className={theme.admin.table.container}>
                           <table className="w-full text-left">
                                <thead className={theme.admin.table.header}>
                                    <tr>
                                        <th className={theme.admin.table.th}>Missão ID</th>
                                        <th className={theme.admin.table.th}>Data</th>
                                        <th className={theme.admin.table.th}>Recompensa</th>
                                        <th className={theme.admin.table.th}>Status</th>
                                        <th className={theme.admin.table.th}>Ações</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {mockOrders.map(order => (
                                        <tr key={order.id} className={theme.admin.table.tr}>
                                            <td className={theme.admin.table.td}>{order.id}</td>
                                            <td className={theme.admin.table.td}>{order.date}</td>
                                            <td className={`${theme.admin.table.td} text-cyan-400`}>R$ {order.total.toFixed(2)}</td>
                                            <td className={theme.admin.table.td}>{order.status}</td>
                                            <td className={theme.admin.table.td}>
                                                <button className={theme.text.link}>Ver Detalhes</button>
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
                        <h2 className={theme.heading.subLeft}>Relatório da Guilda</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                                <h3 className="text-gray-400">Tesouro Total</h3>
                                <p className={`text-4xl font-bold ${theme.textGlow}`}>R$ 15,234.50</p>
                            </div>
                             <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                                <h3 className="text-gray-400">Novas Missões</h3>
                                <p className="text-4xl font-bold">2</p>
                            </div>
                            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                                <h3 className="text-gray-400">Itens no Arsenal</h3>
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
                    <h1 className={`text-3xl font-cinzel font-bold mb-10 text-center ${theme.textGlow}`}>Mestre da Guilda</h1>
                    <nav className="flex flex-col space-y-3">
                        <button onClick={() => setActiveView('dashboard')} className={theme.navButton(activeView === 'dashboard')}>Relatório</button>
                        <button onClick={() => setActiveView('products')} className={theme.navButton(activeView === 'products')}>Arsenal</button>
                        <button onClick={() => setActiveView('orders')} className={theme.navButton(activeView === 'orders')}>Missões</button>
                        <button onClick={() => setActiveView('coupons')} className={theme.navButton(activeView === 'coupons')}>Pergaminhos</button>
                    </nav>
                </div>
                <div>
                     <button onClick={handleLogout} className="w-full text-left p-4 rounded-md text-red-500 hover:bg-red-500/10 transition-colors text-lg">Encerrar Sessão</button>
                </div>
            </aside>
            <main className="flex-grow p-8 overflow-y-auto">
                {renderView()}
            </main>
        </div>
    );
};

export default AdminDashboard;
