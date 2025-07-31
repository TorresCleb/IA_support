# Assistente de Suporte - NLW

Este é um assistente de suporte que utiliza a API do Google Gemini para responder perguntas sobre redes e telecomunicações.

## Configuração

### 1. Configurar a API Key

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

### 2. Obter uma API Key do Google Gemini

1. Acesse o [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Faça login com sua conta Google
3. Clique em "Create API Key"
4. Copie a chave gerada e cole no arquivo `env.js`

## Como usar

1. Abra o arquivo `index.html` no seu navegador
2. Selecione o tipo de assistência desejado
3. Digite sua pergunta
4. Clique em "Tire sua dúvida"

## Funcionalidades

- **Problemas técnicos**: Assistência com questões técnicas de redes e telecomunicações
- **Atendimento ao cliente**: Orientações sobre atendimento ao cliente
- **Clientes atritados**: Estratégias para lidar com clientes insatisfeitos

## Segurança

⚠️ **Importante**: O arquivo `env.js` contém informações sensíveis e não deve ser commitado no repositório. Ele já está incluído no `.gitignore`.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- Google Gemini API
- Showdown.js (para conversão de Markdown)
