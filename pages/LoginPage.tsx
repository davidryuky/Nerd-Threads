
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
            alert("Por favor, preencha todos os campos.");
            return;
        }
        // Mock login
        login(email);
        
        // Special admin case
        if (email === 'admin@nerdthreads.com' && password === 'admin123') {
             navigate('/admin');
        } else {
             navigate('/dashboard');
        }
    };
    
    return (
        <div className="flex items-center justify-center min-h-[80vh] px-4">
            <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg border border-gray-700 shadow-lg shadow-cyan-500/10">
                <h1 className="text-3xl font-bold text-center text-white mb-6">{isLogin ? 'Login' : 'Criar Conta'}</h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {!isLogin && (
                        <input type="text" placeholder="Nome Completo" required className="w-full bg-gray-900 border border-gray-600 rounded-md p-3 focus:border-cyan-500 focus:outline-none"/>
                    )}
                    <input 
                        type="email" 
                        placeholder="E-mail" 
                        required 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-gray-900 border border-gray-600 rounded-md p-3 focus:border-cyan-500 focus:outline-none"
                    />
                    <input 
                        type="password" 
                        placeholder="Senha" 
                        required 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full bg-gray-900 border border-gray-600 rounded-md p-3 focus:border-cyan-500 focus:outline-none"
                    />
                     <button type="submit" className="w-full bg-cyan-500 text-black font-bold py-3 px-6 rounded-lg uppercase hover:bg-cyan-400 transition-colors neon-shadow-blue">
                        {isLogin ? 'Entrar' : 'Cadastrar'}
                    </button>
                </form>
                <div className="text-center mt-6">
                    <button onClick={() => setIsLogin(!isLogin)} className="text-cyan-400 hover:underline">
                        {isLogin ? 'Não tem uma conta? Cadastre-se' : 'Já tem uma conta? Faça login'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
