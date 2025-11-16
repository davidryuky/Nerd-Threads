
import React from 'react';

const ReturnsPolicyPage: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-5xl font-bold text-white mb-6">Política de Trocas e Devoluções</h1>
            <div className="prose prose-invert prose-lg text-gray-300 space-y-4">
                <p>Nossa política de trocas e devoluções visa proporcionar ao cliente total segurança em relação aos produtos adquiridos em nossa loja. Todos os nossos produtos possuem garantia contra defeitos de fabricação.</p>
                <h3>1. Desistência da Compra</h3>
                <p>O cliente tem o prazo de 7 (sete) dias corridos, a contar da data de recebimento do produto, para desistir da compra e solicitar a devolução do valor pago. O produto deverá ser devolvido na embalagem original, sem indícios de uso, acompanhado de todos os acessórios.</p>
                <h3>2. Troca por Tamanho ou Modelo</h3>
                <p>Caso deseje trocar o produto por outro tamanho ou modelo, o cliente deverá entrar em contato conosco em até 7 (sete) dias corridos após o recebimento. A primeira troca é por nossa conta. O produto deve estar em perfeitas condições e sem sinais de uso.</p>
                <h3>3. Produto com Defeito</h3>
                <p>Se o produto adquirido apresentar algum defeito de fabricação, o cliente terá o prazo de 30 (trinta) dias corridos após o recebimento para solicitar a troca. Faremos a análise do produto e, constatado o defeito, enviaremos um novo produto sem custos adicionais.</p>
                <h3>Como Solicitar</h3>
                <p>Para solicitar uma troca ou devolução, entre em contato com nosso time de suporte através do e-mail <a href="mailto:suporte@nerdthreads.com" className="text-cyan-400">suporte@nerdthreads.com</a>, informando o número do pedido e o motivo da solicitação.</p>
            </div>
        </div>
    );
};

export default ReturnsPolicyPage;
