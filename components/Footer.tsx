
import React from 'react';
import { Link } from 'react-router-dom';
import { theme } from '../theme';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 border-t-2 border-gray-800">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className={theme.heading.footer}>A Guilda</h3>
                        <ul className="mt-4 space-y-4">
                            <li><Link to="/about" className="text-base text-gray-300 hover:text-cyan-400">Nossa História</Link></li>
                            <li><Link to="/contact" className="text-base text-gray-300 hover:text-cyan-400">Fale com o Mestre</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className={theme.heading.footer}>Suporte</h3>
                        <ul className="mt-4 space-y-4">
                            <li><Link to="/faq" className="text-base text-gray-300 hover:text-cyan-400">Pergaminhos Antigos (FAQ)</Link></li>
                            <li><Link to="/returns-policy" className="text-base text-gray-300 hover:text-cyan-400">Trocas e Retornos</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className={theme.heading.footer}>Regras</h3>
                        <ul className="mt-4 space-y-4">
                            <li><Link to="/privacy-policy" className="text-base text-gray-300 hover:text-cyan-400">Pacto de Privacidade</Link></li>
                            <li><Link to="/terms-of-use" className="text-base text-gray-300 hover:text-cyan-400">Termos da Aventura</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className={theme.heading.footer}>Redes Sociais</h3>
                        <p className="text-base text-gray-400 mt-4">Siga-nos para novas missões e loots!</p>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col items-center text-center">
                    <p className={`font-cinzel text-xl ${theme.textGlow}`}>Nerd Threads</p>
                    <p className="text-base text-gray-400 mt-2">&copy; {new Date().getFullYear()} Todos os reinos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
