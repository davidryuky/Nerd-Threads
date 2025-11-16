
import React from 'react';

const ContactPage: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-5xl font-bold text-center text-white mb-4 neon-text-blue">Entre em Contato</h1>
            <p className="text-center text-lg text-gray-400 mb-10">Tem alguma dúvida, sugestão ou problema? Fale com a gente!</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-gray-800 p-8 rounded-lg border border-gray-700">
                <div>
                    <h2 className="text-2xl font-bold text-white mb-4">Envie uma Mensagem</h2>
                    <form className="space-y-4">
                        <input type="text" placeholder="Seu Nome" className="w-full bg-gray-900 border border-gray-600 rounded-md p-3 focus:border-cyan-500 focus:outline-none"/>
                        <input type="email" placeholder="Seu E-mail" className="w-full bg-gray-900 border border-gray-600 rounded-md p-3 focus:border-cyan-500 focus:outline-none"/>
                        <textarea placeholder="Sua Mensagem" rows={5} className="w-full bg-gray-900 border border-gray-600 rounded-md p-3 focus:border-cyan-500 focus:outline-none"></textarea>
                        <button type="submit" className="w-full bg-cyan-500 text-black font-bold py-3 px-6 rounded-lg uppercase hover:bg-cyan-400 transition-colors">Enviar</button>
                    </form>
                </div>
                <div className="text-gray-300">
                     <h2 className="text-2xl font-bold text-white mb-4">Outros Canais</h2>
                     <div className="space-y-4">
                        <p><strong>E-mail de Suporte:</strong><br/><a href="mailto:suporte@nerdthreads.com" className="text-cyan-400">suporte@nerdthreads.com</a></p>
                        <p><strong>Horário de Atendimento:</strong><br/>Segunda a Sexta, das 9h às 18h</p>
                        <p><strong>Redes Sociais:</strong><br/>Siga-nos para novidades e promoções!</p>
                     </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
