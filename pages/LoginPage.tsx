import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const LoginPage: React.FC = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email.trim() === '' || password.trim() === '') {
            // Placeholder for a toast notification
            console.log("Por favor, preencha todos os campos.");
            return;
        }
        login(email);
        
        if (email === 'admin@nerdthreads.com' && password === 'admin123') {
             navigate('/admin');
        } else {
             navigate('/dashboard');
        }
    };
    
    return (
        <div className="flex items-center justify-center min-h-[80vh] px-4">
            <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg border border-gray-700 shadow-lg shadow-amber-500/10">
                <h1 className="text-4xl font-cinzel font-bold text-center text-white mb-6 text-glow-gold">{isLogin ? 'Portal da Guilda' : 'Junte-se à Aventura'}</h1>
                <p className="text-center text-gray-400 mb-8">{isLogin ? 'Identifique-se, aventureiro!' : 'Crie sua identidade para começar.'}</p>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {!isLogin && (
                        <input type="text" placeholder="Nome de Aventureiro" required className="w-full rpg-input"/>
                    )}
                    <input 
                        type="email" 
                        placeholder="E-mail" 
                        required 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full rpg-input"
                    />
                    <input 
                        type="password" 
                        placeholder="Senha Secreta" 
                        required 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full rpg-input"
                    />
                     <button type="submit" className="w-full rpg-button">
                        {isLogin ? 'Entrar' : 'Forjar Identidade'}
                    </button>
                </form>
                <div className="text-center mt-6">
                    <button onClick={() => setIsLogin(!isLogin)} className="text-amber-400 hover:underline">
                        {isLogin ? 'Não tem registro? Aliste-se!' : 'Já é da Guilda? Entre no Portal.'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
