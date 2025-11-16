import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';

const NavLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => (
    <Link to={to} className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium uppercase tracking-widest">{children}</Link>
);

const Header: React.FC = () => {
    const { cartCount } = useCart();
    const { user } = useAuth();
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleAuthAction = () => {
        if (user) {
            navigate('/dashboard');
        } else {
            navigate('/login');
        }
    }

    return (
        <header className="bg-gray-900 bg-opacity-70 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex items-center">
                        <Link to="/" className="text-3xl font-bold text-white font-cinzel">
                           <span className="text-glow-accent">Nerd</span> Threads
                        </Link>
                    </div>
                    <div className="hidden md:flex md:items-center md:space-x-2">
                        <NavLink to="/">Taverna</NavLink>
                        <NavLink to="/catalog">Arsenal</NavLink>
                        <NavLink to="/about">A Guilda</NavLink>
                        <NavLink to="/contact">Contato</NavLink>
                    </div>
                    <div className="flex items-center space-x-3">
                        <button onClick={handleAuthAction} className="p-2 text-gray-300 hover:text-cyan-400" aria-label="Conta do Aventureiro">
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                        </button>
                        <Link to="/cart" className="relative p-2 text-gray-300 hover:text-cyan-400" aria-label="Mochila de Itens">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                            {cartCount > 0 && (
                                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-gray-900 transform translate-x-1/2 -translate-y-1/2 bg-cyan-400 rounded-full">{cartCount}</span>
                            )}
                        </Link>
                        <div className="md:hidden">
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-gray-300 hover:text-cyan-400">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
             {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <NavLink to="/">Taverna</NavLink>
                        <NavLink to="/catalog">Arsenal</NavLink>
                        <NavLink to="/about">A Guilda</NavLink>
                        <NavLink to="/contact">Contato</NavLink>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;