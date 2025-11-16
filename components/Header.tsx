
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';

const NavLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => (
    <Link to={to} className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium">{children}</Link>
);

const Header: React.FC = () => {
    const { cartCount } = useCart();
    const { user, logout } = useAuth();
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
        <header className="bg-gray-900 bg-opacity-80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex items-center">
                        <Link to="/" className="text-2xl font-bold text-white neon-text-blue">
                            Nerd Threads
                        </Link>
                    </div>
                    <div className="hidden md:flex md:items-center md:space-x-4">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/catalog">Catálogo</NavLink>
                        <NavLink to="/about">Sobre</NavLink>
                        <NavLink to="/contact">Contato</NavLink>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="relative hidden md:block">
                            <input
                                type="text"
                                placeholder="Buscar..."
                                className="bg-gray-800 border border-gray-700 text-white text-sm rounded-full py-2 pl-4 pr-10 focus:outline-none focus:border-cyan-500 transition-colors"
                            />
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>
                        <button onClick={handleAuthAction} className="p-2 text-gray-300 hover:text-cyan-400">
                             <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </button>
                        <Link to="/cart" className="relative p-2 text-gray-300 hover:text-cyan-400">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            {cartCount > 0 && (
                                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-black transform translate-x-1/2 -translate-y-1/2 bg-cyan-400 rounded-full">{cartCount}</span>
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
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/catalog">Catálogo</NavLink>
                        <NavLink to="/about">Sobre</NavLink>
                        <NavLink to="/contact">Contato</NavLink>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
