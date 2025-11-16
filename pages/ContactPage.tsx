import React from 'react';

const ContactPage: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-5xl font-bold text-center text-white mb-4 text-glow-accent">Fale com o Mestre da Guilda</h1>
            <p className="text-center text-lg text-gray-400 mb-10">Tem alguma dúvida, sugestão ou precisa de ajuda em uma missão? Envie seu pergaminho.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-gray-800 p-8 rounded-lg border border-gray-700">
                <div>
                    <h2 className="text-2xl font-bold text-white mb-4">Enviar um Pergaminho</h2>
                    <form className="space-y-4">
                        <input type="text" placeholder="Seu Nome de Aventureiro" className="w-full theme-input"/>
                        <input type="email" placeholder="Seu E-mail" className="w-full theme-input"/>
                        <textarea placeholder="Sua Mensagem..." rows={5} className="w-full theme-input"></textarea>
                        <button type="submit" className="w-full theme-button">Enviar Mensagem</button>
                    </form>
                </div>
                <div className="text-gray-300">
                     <h2 className="text-2xl font-bold text-white mb-4">Outros Meios</h2>
                     <div className="space-y-4 text-lg">
                        <p><strong>Corvo Mensageiro (E-mail):</strong><br/><a href="mailto:suporte@nerdthreads.com" className="text-cyan-400 hover:underline">suporte@nerdthreads.com</a></p>
                        <p><strong>Horário de Atendimento:</strong><br/>Segunda a Sexta, das 9h às 18h</p>
                        <p><strong>Sinais de Fumaça (Redes Sociais):</strong><br/>Encontre-nos para receber novas missões!</p>
                     </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;