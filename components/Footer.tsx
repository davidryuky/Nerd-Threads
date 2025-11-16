
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 border-t border-gray-800">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Institucional</h3>
                        <ul className="mt-4 space-y-4">
                            <li><Link to="/about" className="text-base text-gray-300 hover:text-white">Sobre Nós</Link></li>
                            <li><Link to="/contact" className="text-base text-gray-300 hover:text-white">Contato</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Ajuda</h3>
                        <ul className="mt-4 space-y-4">
                            <li><Link to="/faq" className="text-base text-gray-300 hover:text-white">FAQ</Link></li>
                            <li><Link to="/returns-policy" className="text-base text-gray-300 hover:text-white">Trocas e Devoluções</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
                        <ul className="mt-4 space-y-4">
                            <li><Link to="/privacy-policy" className="text-base text-gray-300 hover:text-white">Política de Privacidade</Link></li>
                            <li><Link to="/terms-of-use" className="text-base text-gray-300 hover:text-white">Termos de Uso</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Conecte-se</h3>
                        <div className="flex mt-4 space-x-6">
                            {/* Replace with actual social links */}
                            <a href="#" className="text-gray-400 hover:text-white"><span className="sr-only">Facebook</span><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">{/* Facebook Icon Path */}</svg></a>
                            <a href="#" className="text-gray-400 hover:text-white"><span className="sr-only">Instagram</span><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">{/* Instagram Icon Path */}</svg></a>
                            <a href="#" className="text-gray-400 hover:text-white"><span className="sr-only">Twitter</span><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">{/* Twitter Icon Path */}</svg></a>
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-800 pt-8">
                    <p className="text-base text-gray-400 xl:text-center">&copy; {new Date().getFullYear()} Nerd Threads. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
