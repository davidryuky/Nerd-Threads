
import React from 'react';

const faqs = [
    {
        q: 'Qual o prazo de entrega?',
        a: 'O prazo de entrega varia de acordo com a sua localidade. Em média, os pedidos são entregues entre 5 a 10 dias úteis após a confirmação do pagamento. Você receberá um código de rastreio por e-mail para acompanhar seu pedido.'
    },
    {
        q: 'Como posso rastrear meu pedido?',
        a: 'Assim que seu pedido for despachado, enviaremos um e-mail com o código de rastreamento e o link da transportadora. Você pode usar esse código para acompanhar o status da entrega em tempo real.'
    },
    {
        q: 'Quais formas de pagamento são aceitas?',
        a: 'Aceitamos as principais bandeiras de cartão de crédito (Visa, MasterCard, American Express), boleto bancário e PIX. Todas as transações são processadas em um ambiente seguro.'
    },
    {
        q: 'Posso trocar um produto?',
        a: 'Sim! Se a camiseta não serviu ou se você não ficou satisfeito, você pode solicitar a troca em até 7 dias corridos após o recebimento. Consulte nossa Política de Trocas e Devoluções para mais detalhes.'
    }
];

const FAQPage: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-5xl font-bold text-center text-white mb-10 neon-text-blue">Perguntas Frequentes</h1>
            <div className="space-y-6">
                {faqs.map((faq, index) => (
                    <div key={index} className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                        <h2 className="text-xl font-bold text-cyan-400 mb-2">{faq.q}</h2>
                        <p className="text-gray-300">{faq.a}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQPage;
