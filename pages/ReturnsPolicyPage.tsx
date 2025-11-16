import React from 'react';

const ReturnsPolicyPage: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-5xl font-bold text-white mb-6">Papiro de Trocas e Retornos</h1>
            <div className="prose prose-invert prose-lg text-gray-300 space-y-4">
                <p>Nossa guilda garante a qualidade de cada item forjado. Todos os nossos produtos têm garantia contra falhas de fabricação.</p>
                <h3>1. Mudança de Planos na Missão</h3>
                <p>Se você se arrepender da aquisição, tem 7 dias corridos, a partir do recebimento do item, para desistir da missão e solicitar a devolução de suas moedas. O item deve ser devolvido em sua embalagem original, sem sinais de uso.</p>
                <h3>2. Ajuste de Armadura</h3>
                <p>Se a armadura (camiseta) não serviu ou não era o que você esperava, entre em contato em até 7 dias corridos. A primeira troca de tamanho é por nossa conta! O item deve estar em perfeitas condições.</p>
                <h3>3. Item Amaldiçoado (com defeito)</h3>
                <p>Se seu item chegou com algum defeito de forja, você tem 30 dias corridos para solicitar a troca. Após análise, enviaremos um novo artefato sem custo adicional para sua jornada.</p>
                <h3>Como Iniciar uma Troca</h3>
                <p>Para solicitar uma troca ou devolução, envie um corvo mensageiro para nosso suporte em <a href="mailto:suporte@nerdthreads.com" className="text-amber-400">suporte@nerdthreads.com</a>, informando o número da sua missão (pedido) e o motivo.</p>
            </div>
        </div>
    );
};

export default ReturnsPolicyPage;
