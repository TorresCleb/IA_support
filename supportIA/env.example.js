// Configuração da API Key do Google Gemini
// Copie este arquivo para env.js e adicione sua API Key real
const config = {
    GEMINI_API_KEY: 'SUA_API_KEY_DO_GOOGLE_GEMINI_AQUI'
};

// Exportar para uso em outros arquivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = config;
} 