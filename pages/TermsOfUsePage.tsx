import React from 'react';

const TermsOfUsePage: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-5xl font-bold text-white mb-6">Termos da Aventura</h1>
            <div className="prose prose-invert prose-lg text-gray-300 space-y-4">
                <h2>1. O Pacto</h2>
                <p>Ao entrar nos domínios da Nerd Threads, você concorda em seguir as leis e regulamentos desta guilda. Se você não concordar com algum destes termos, sua entrada nestas terras é proibida. Os tesouros (materiais) aqui contidos são protegidos por leis de direitos autorais.</p>
                <h2>2. Uso de Artefatos</h2>
                <p>É concedida permissão para visualizar temporariamente os artefatos (informações) no site Nerd Threads apenas para fins pessoais e não comerciais. Esta é uma licença de uso, não uma transferência de posse. Sob esta licença, você não pode: modificar ou copiar os artefatos; usá-los para fins comerciais; tentar decifrar a magia (engenharia reversa) de nosso software; ou remover inscrições de propriedade. Esta licença será anulada se você violar estas regras.</p>
                <h2>3. Limites da Magia</h2>
                <p>Em nenhum caso a guilda Nerd Threads ou seus ferreiros serão responsáveis por quaisquer danos (incluindo perda de dados ou lucros) decorrentes do uso ou da incapacidade de usar os artefatos em nossos domínios. Nossas defesas mágicas são fortes, mas algumas jurisdições não permitem limitações em garantias, então estas limitações podem não se aplicar a você.</p>
            </div>
        </div>
    );
};

export default TermsOfUsePage;
