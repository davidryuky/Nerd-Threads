
import React from 'react';

const AboutPage: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-5xl font-bold text-white mb-6 neon-text-blue">Sobre a Nerd Threads</h1>
            <div className="prose prose-invert prose-lg text-gray-300 space-y-6">
                <p>
                    A Nerd Threads nasceu de uma paixão compartilhada: a cultura geek. Somos mais do que uma loja de camisetas; somos um ponto de encontro para fãs de animes, games, filmes, séries e tudo que envolve o universo nerd e da tecnologia.
                </p>
                <p>
                    Nossa missão é simples: criar produtos de alta qualidade que permitam que você vista sua paixão com orgulho e estilo. Cada estampa é pensada e criada por uma equipe de designers que, assim como você, vive e respira essa cultura. Usamos apenas os melhores materiais, desde o algodão premium até as tintas de última geração, para garantir que sua camiseta seja tão durável quanto a sua saga favorita.
                </p>
                <p>
                    Acreditamos que uma camiseta é uma forma de expressão, uma armadura para o dia a dia, um estandarte. É a forma silenciosa de encontrar seus aliados no mundo real. Quando você veste Nerd Threads, você não está apenas vestindo uma peça de roupa, está carregando um pedaço do universo que você ama.
                </p>
                <p>
                    Bem-vindo à nossa comunidade. Vista sua paixão.
                </p>
            </div>
        </div>
    );
};

export default AboutPage;
