
import React from 'react';
import { theme } from '../theme';

const faqs = [
    {
        q: 'Qual o prazo para minha encomenda chegar?',
        a: 'O tempo da jornada varia conforme sua localização no mapa. Em média, as entregas levam de 5 a 10 dias úteis após a confirmação do pagamento. Você receberá um mapa de rastreio por e-mail para acompanhar sua encomenda.'
    },
    {
        q: 'Como posso rastrear meu tesouro?',
        a: 'Assim que sua encomenda for despachada, um corvo mensageiro levará até você um e-mail com o código de rastreamento. Use-o para saber exatamente onde seu tesouro está na jornada até sua fortaleza.'
    },
    {
        q: 'Quais moedas vocês aceitam?',
        a: 'Aceitamos as principais moedas do reino: cartões de crédito (Visa, MasterCard), boleto e, para os mais rápidos, PIX. Todas as transações são protegidas por feitiços de segurança de alto nível.'
    },
    {
        q: 'Meu item não serviu. Posso trocar?',
        a: 'Claro! Se a armadura (camiseta) não ficou do tamanho certo, você tem 7 dias após o recebimento para solicitar uma troca. Consulte nossos Pergaminhos sobre Trocas e Retornos para mais detalhes da missão.'
    }
];

const FAQPage: React.FC = () => {
    return (
        <div className={theme.container.page4xl}>
            <h1 className={theme.heading.page(true)}>Pergaminhos Antigos</h1>
            <div className="space-y-6">
                {faqs.map((faq, index) => (
                    <div key={index} className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                        <h2 className="text-xl font-bold text-cyan-400 mb-2">{faq.q}</h2>
                        <p className="text-gray-300 leading-relaxed">{faq.a}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQPage;
