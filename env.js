// Configuração das variáveis de ambiente
// Para desenvolvimento local, use o arquivo .env
// Para produção, configure as variáveis no Vercel

const config = {
    env: {
        // API Key do Google Gemini
        GEMINI_API_KEY: 'AIzaSyD57flc2_tSuB22ohrK0RwCn9WaXfdXibo',
        
        // Ambiente
        NODE_ENV: 'development'
    }
};

// Para produção na Vercel, as variáveis de ambiente serão injetadas
if (typeof window !== 'undefined' && window.__ENV__) {
    config.env = { ...config.env, ...window.__ENV__ };
}

export default config;