# Como Configurar Variáveis de Ambiente no Vercel

## Passo a Passo para Deploy

### 1. Preparar o Projeto

1. Certifique-se de que todos os arquivos estão commitados no Git
2. O arquivo `env.js` deve estar no `.gitignore` (já está configurado)

### 2. Fazer Deploy no Vercel

1. Acesse [vercel.com](https://vercel.com)
2. Faça login ou crie uma conta
3. Clique em "New Project"
4. Importe seu repositório do GitHub/GitLab/Bitbucket
5. Configure o projeto:
   - **Framework Preset**: Other
   - **Root Directory**: `support/supportIA`
   - **Build Command**: deixe vazio
   - **Output Directory**: deixe vazio

### 3. Configurar Variáveis de Ambiente

Após o deploy inicial, configure a variável de ambiente:

1. No dashboard do Vercel, vá para seu projeto
2. Clique na aba "Settings"
3. No menu lateral, clique em "Environment Variables"
4. Adicione uma nova variável:
   - **Name**: `GEMINI_API_KEY`
   - **Value**: Sua chave da API do Google Gemini
   - **Environment**: Production (e Development se quiser testar localmente)
5. Clique em "Save"

### 4. Obter a API Key do Google Gemini

1. Acesse [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Faça login com sua conta Google
3. Clique em "Create API Key"
4. Copie a chave gerada
5. Cole no campo "Value" da variável de ambiente no Vercel

### 5. Redeploy

Após configurar a variável de ambiente:

1. No dashboard do Vercel, vá para a aba "Deployments"
2. Clique nos três pontos ao lado do último deploy
3. Selecione "Redeploy"

### 6. Testar

1. Acesse a URL do seu projeto no Vercel
2. Teste fazendo uma pergunta
3. Verifique se a resposta está funcionando corretamente

## Estrutura dos Arquivos

```
supportIA/
├── api/
│   └── gemini.js          # API route para o Gemini
├── assets/
│   ├── bg.jpg
│   └── logo.png
├── index.html             # Página principal
├── script.js              # JavaScript do frontend
├── style.css              # Estilos
├── vercel.json            # Configuração do Vercel
└── .gitignore             # Arquivos ignorados pelo Git
```

## Troubleshooting

### Erro: "API Key não configurada"
- Verifique se a variável `GEMINI_API_KEY` está configurada no Vercel
- Certifique-se de que o redeploy foi feito após configurar a variável

### Erro: "Método não permitido"
- Verifique se está fazendo uma requisição POST para `/api/gemini`

### Erro: "Pergunta e tecnologia são obrigatórias"
- Verifique se está enviando os campos `question` e `tech` no corpo da requisição

### Erro na API do Gemini
- Verifique se a API key é válida
- Verifique se tem créditos suficientes na conta do Google AI Studio

## Desenvolvimento Local

Para testar localmente, você pode:

1. Instalar o Vercel CLI: `npm i -g vercel`
2. Executar `vercel dev` na pasta do projeto
3. Configurar a variável de ambiente localmente: `vercel env add GEMINI_API_KEY` 