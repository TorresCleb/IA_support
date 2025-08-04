<<<<<<< HEAD

# Assistente de Suporte - NLW

Este é um assistente de suporte que utiliza a API do Google Gemini para responder perguntas sobre redes e telecomunicações.

## Configuração

### Desenvolvimento Local

1. Copie o arquivo `env.example.js` para `env.js`:

   ```bash
   cp env.example.js env.js
   ```

2. Edite o arquivo `env.js` e adicione sua API key do Google Gemini:

   ```javascript
   const config = {
     GEMINI_API_KEY: "SUA_API_KEY_REAL_AQUI",
   };
   ```

   ⚠️ **IMPORTANTE**: Nunca commite o arquivo `env.js` com sua API Key real no repositório!

### Deploy no Vercel (Recomendado)

Para fazer deploy no Vercel com variáveis de ambiente seguras, consulte o arquivo [DEPLOY_VERCEL.md](./DEPLOY_VERCEL.md) para instruções detalhadas.

## Como usar

1. Abra o arquivo `index.html` no seu navegador
2. Selecione o tipo de assistência desejado
3. Digite sua pergunta
4. Clique em "Tire sua dúvida"

## Funcionalidades

- **Problemas técnicos**: Assistência com questões técnicas de redes e telecomunicações
- **Atendimento ao cliente**: Orientações sobre atendimento ao cliente
- **Clientes atritados**: Estratégias para lidar com clientes insatisfeitos
- **Deploy seguro**: Configuração pronta para Vercel com variáveis de ambiente

## Estrutura do Projeto

```
supportIA/
├── api/
│   └── gemini.js          # API route para o Gemini (Vercel)
├── assets/
│   ├── bg.jpg
│   └── logo.png
├── index.html             # Página principal
├── script.js              # JavaScript do frontend
├── style.css              # Estilos
├── vercel.json            # Configuração do Vercel
├── DEPLOY_VERCEL.md       # Instruções de deploy
└── .gitignore             # Arquivos ignorados pelo Git
```

## Segurança

⚠️ **Importante**:

- O arquivo `env.js` contém informações sensíveis e não deve ser commitado no repositório. Ele já está incluído no `.gitignore`.
- Para produção, a API key é configurada através de variáveis de ambiente no Vercel
- Todas as chamadas para a API do Gemini são feitas através de uma API route segura

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- Google Gemini API
- Showdown.js (para conversão de Markdown)
- # Vercel (para deploy e API routes)

# 🤖 Assistente de IA para Redes e Telecomunicações

Este é um **Assistente de Inteligência Artificial** desenvolvido para auxiliar **atendentes de telemarketing** na resolução de dúvidas diárias sobre **redes e telecomunicações**.

O sistema foi criado com foco em **agilidade, eficiência e praticidade**, integrando **IA generativa** para tornar o atendimento mais inteligente e produtivo.

# 🌟 Visão Geral

Este repositório apresenta uma aplicação web simples que permite aos usuários obter informações sobre seus jogos favoritos. A mágica acontece nos bastidores, onde um agente de IA dinâmico é instanciado para atuar como um especialista no jogo selecionado, garantindo respostas precisas e contextuais.

# ✨ Tecnologias Utilizadas

HTML/CSS/JavaScript: Para a estrutura, estilização e interatividade da interface do usuário.

# 🧠 Agentes de IA e a API do Gemini

O diferencial deste projeto reside na implementação de agentes de IA. Em vez de um modelo genérico, cada consulta aciona um "agente" especializado. Como isso funciona?

Instrução Dinâmica: Antes de enviar a pergunta do usuário para a API do Gemini, um systemInstructionText é construído dinamicamente. Este texto define o papel do nosso agente, instruindo-o a se comportar como um especialista no jogo selecionado (game).

Ferramentas (Google Search): A inclusão de Google Search: {} nas tools (ferramentas) do fetch indica que o modelo Gemini tem a capacidade de utilizar a pesquisa do Google se precisar de informações adicionais para responder à pergunta. Isso amplia o conhecimento do nosso agente de IA, tornando-o ainda mais poderoso!

Essa abordagem permite que a IA atue como um verdadeiro especialista no domínio, fornecendo respostas mais relevantes e precisas em comparação com uma consulta genérica.

> > > > > > > 817bffc1e8b525428f861a36342a760b547dd17c
