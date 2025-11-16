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

// FIX: Omitted 'sizes' from the Product type and then added it back as a string.
// This correctly types `sizes` as a string for the form state, resolving the type conflict.
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
            gallery: [`${newProduct.image}-2`, `${newProduct.image}-3`, `${newProduct.image}-4`], // Mock gallery
            details: ['100% Algodão', 'Estampa de alta qualidade'],
        };
        setProducts(prev => [productToAdd, ...prev]);
        setNewProduct(newProductInitialState);
        setIsAddingProduct(false);
    };

    const renderAddProductForm = () => (
        <div>
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Adicionar Novo Produto</h2>
                <button onClick={() => setIsAddingProduct(false)} className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded">
                    Cancelar
                </button>
            </div>
            <form onSubmit={handleAddProduct} className="bg-gray-800 p-6 rounded-lg space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" name="name" value={newProduct.name} onChange={handleInputChange} placeholder="Nome do Produto" required className="bg-gray-900 border border-gray-600 rounded-md p-3 focus:border-cyan-500 focus:outline-none w-full" />
                    <input type="number" name="price" value={newProduct.price} onChange={handleInputChange} placeholder="Preço (ex: 89.90)" required className="bg-gray-900 border border-gray-600 rounded-md p-3 focus:border-cyan-500 focus:outline-none w-full" />
                </div>
                <textarea name="description" value={newProduct.description} onChange={handleInputChange} placeholder="Descrição do Produto" rows={4} required className="bg-gray-900 border border-gray-600 rounded-md p-3 focus:border-cyan-500 focus:outline-none w-full"></textarea>
                <input type="text" name="image" value={newProduct.image} onChange={handleInputChange} placeholder="URL da Imagem Principal" required className="bg-gray-900 border border-gray-600 rounded-md p-3 focus:border-cyan-500 focus:outline-none w-full" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <select name="category" value={newProduct.category} onChange={handleInputChange} className="bg-gray-900 border border-gray-600 rounded-md p-3 focus:border-cyan-500 focus:outline-none w-full">
                        <option>Animes</option>
                        <option>Games</option>
                        <option>Filmes</option>
                        <option>Séries</option>
                        <option>Humor</option>
                        <option>Tecnologia</option>
                    </select>
                    <input type="text" name="sizes" value={newProduct.sizes} onChange={handleInputChange} placeholder="Tamanhos (P,M,G)" required className="bg-gray-900 border border-gray-600 rounded-md p-3 focus:border-cyan-500 focus:outline-none w-full" />
                    <input type="number" name="stock" value={newProduct.stock} onChange={handleInputChange} placeholder="Estoque" required className="bg-gray-900 border border-gray-600 rounded-md p-3 focus:border-cyan-500 focus:outline-none w-full" />
                </div>
                <button type="submit" className="w-full bg-cyan-500 text-black font-bold py-3 rounded-lg hover:bg-cyan-400 transition-colors">
                    Salvar Produto
                </button>
            </form>
        </div>
    );
    
    const renderProductsView = () => (
         <div>
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Gerenciar Produtos</h2>
                <button onClick={() => setIsAddingProduct(true)} className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-2 px-4 rounded">
                    Adicionar Novo Produto
                </button>
            </div>
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
                                    <button className="text-cyan-400 mr-2 hover:underline">Editar</button>
                                    <button className="text-red-500 hover:underline">Excluir</button>
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
            <main className="flex-grow p-8 overflow-y-auto">
                {renderView()}
            </main>
        </div>
    );
};

export default AdminDashboard;