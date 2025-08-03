# Configuração de Variáveis de Ambiente

Este documento explica como configurar as variáveis de ambiente para o projeto SupportIA.

## Variáveis Necessárias

### 1. GEMINI_API_KEY
- **Descrição**: Chave da API do Google Gemini
- **Obrigatório**: Sim
- **Como obter**: 
  1. Acesse [Google AI Studio](https://makersuite.google.com/app/apikey)
  2. Crie uma nova API key
  3. Copie a chave gerada

## Configuração Local (Desenvolvimento)

### Passo 1: Criar arquivo .env
```bash
# Copie o arquivo de exemplo
cp env.example .env
```

### Passo 2: Editar o arquivo .env
```env
# API Key do Google Gemini
GEMINI_API_KEY=sua_api_key_aqui

# Ambiente
NODE_ENV=development
```

### Passo 3: Substituir "sua_api_key_aqui" pela sua chave real
```env
GEMINI_API_KEY=AIzaSyD57flc2_tSuB22ohrK0RwCn9WaXfdXibo
```

## Configuração para Produção (Vercel)

### Passo 1: Acessar o Dashboard da Vercel
1. Vá para [vercel.com](https://vercel.com)
2. Acesse seu projeto

### Passo 2: Configurar Variáveis de Ambiente
1. Vá para **Settings** > **Environment Variables**
2. Adicione as seguintes variáveis:

| Nome | Valor | Ambiente |
|------|-------|----------|
| `GEMINI_API_KEY` | `sua_api_key_aqui` | Production, Preview, Development |
| `NODE_ENV` | `production` | Production |

### Passo 3: Fazer Deploy
Após configurar as variáveis, faça o deploy novamente.

## Verificação

Para verificar se as variáveis estão configuradas corretamente:

1. **Local**: Abra o console do navegador e verifique se não há erros
2. **Produção**: Teste a funcionalidade da aplicação

## Segurança

⚠️ **Importante**: 
- Nunca commite o arquivo `.env` no Git
- O arquivo `.env` já está no `.gitignore`
- Use sempre variáveis de ambiente para chaves sensíveis
- Para produção, configure as variáveis no Vercel

## Troubleshooting

### Erro: "API Key não configurada"
- Verifique se o arquivo `.env` existe
- Verifique se a variável `GEMINI_API_KEY` está definida
- Para produção, verifique se as variáveis estão configuradas no Vercel

### Erro: "API Key inválida"
- Verifique se a chave está correta
- Verifique se a chave tem permissões adequadas
- Teste a chave no Google AI Studio 