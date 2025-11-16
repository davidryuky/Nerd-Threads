import React from 'react';

const PrivacyPolicyPage: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-5xl font-bold text-white mb-6">Pacto de Privacidade da Guilda</h1>
            <div className="prose prose-invert prose-lg text-gray-300 space-y-4">
                <p>Sua confiança é a base da nossa guilda. É nossa política sagrada respeitar sua privacidade em relação a qualquer informação que possamos coletar em nossos domínios.</p>
                <p>Solicitamos informações pessoais apenas quando estritamente necessário para completar uma missão (fornecer um serviço). Fazemos isso de forma justa e transparente, com seu consentimento. Sempre informaremos por que os dados são necessários e como serão usados.</p>
                <p>Guardamos suas informações apenas pelo tempo necessário para cumprir o prometido. Protegemos esses dados com feitiços de segurança para evitar roubos, acessos não autorizados ou modificações.</p>
                <p>Não compartilhamos suas informações de identificação com outros reinos ou com o público, exceto quando exigido por leis maiores.</p>
                <p>Nossos domínios podem conter portais para locais externos não operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e as práticas desses locais.</p>
                <p>Você é livre para recusar nosso pedido de informações, entendendo que talvez não possamos realizar certas missões para você.</p>
                <p>A continuação da sua jornada em nosso site será considerada como aceitação de nossas práticas. Se tiver dúvidas, envie-nos um corvo mensageiro.</p>
            </div>
        </div>
    );
};

export default PrivacyPolicyPage;
