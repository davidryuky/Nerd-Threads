
import React from 'react';
import { theme } from '../theme';

const AboutPage: React.FC = () => {
    return (
        <div className={theme.container.page4xl}>
            <h1 className={`${theme.heading.page(false)} mb-6`}>A História da Guilda</h1>
            <div className={theme.text.prose}>
                <p>
                    Nos anais da cultura pop, onde reinos de animes, masmorras de games e galáxias de filmes colidem, a guilda Nerd Threads foi forjada. Nascemos de um pacto entre aventureiros que compartilhavam uma mesma paixão: a cultura geek em todas as suas formas.
                </p>
                <p>
                    Nossa missão é mais do que apenas criar camisetas; nós forjamos armaduras para o cotidiano. Cada item em nosso arsenal é uma relíquia, imbuída com a essência de suas sagas favoritas. Nossos ferreiros (designers) são mestres em seu ofício, e só utilizam os melhores materiais do reino — do algodão mais puro aos encantamentos de impressão mais duradouros.
                </p>
                <p>
                    Acreditamos que vestir uma camiseta é como erguer um estandarte. É um símbolo que conecta você a outros membros da sua tribo, um sinal silencioso que diz: "Eu entendo essa referência". Quando você veste Nerd Threads, você não está apenas usando uma peça de roupa; está carregando um artefato, uma parte do universo que te moldou.
                </p>
                <p>
                    Bem-vindo à nossa irmandade, aventureiro. Forje sua lenda.
                </p>
            </div>
        </div>
    );
};

export default AboutPage;
