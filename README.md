# 🤖 Assistente de IA para Redes e Telecomunicações

Este é um **Assistente de Inteligência Artificial** desenvolvido para auxiliar **atendentes de telemarketing** na resolução de dúvidas diárias sobre **redes e telecomunicações**.  

O sistema foi criado com foco em **agilidade, eficiência e praticidade**, integrando **IA generativa** para tornar o atendimento mais inteligente e produtivo.  

# 🌟 Visão Geral
Este repositório apresenta uma aplicação web simples que permite aos usuários obter informações sobre seus jogos favoritos. A mágica acontece nos bastidores, onde um agente de IA dinâmico é instanciado para atuar como um especialista no jogo selecionado, garantindo respostas precisas e contextuais.

# ✨ Tecnologias Utilizadas

HTML/CSS/JavaScript: Para a estrutura, estilização e interatividade da interface do usuário.

# API do Google Gemini: A espinha dorsal da inteligência artificial, permitindo a comunicação com modelos de linguagem avançados.

Showdown.js: Uma biblioteca JavaScript utilizada para converter texto Markdown (recebido da API do Gemini) em HTML, facilitando a exibição das respostas formatadas.

# 🧠 Agentes de IA e a API do Gemini
O diferencial deste projeto reside na implementação de agentes de IA. Em vez de um modelo genérico, cada consulta aciona um "agente" especializado. Como isso funciona?

Instrução Dinâmica: Antes de enviar a pergunta do usuário para a API do Gemini, um systemInstructionText é construído dinamicamente. Este texto define o papel do nosso agente, instruindo-o a se comportar como um especialista no jogo selecionado (game).


Especialidade: Define explicitamente que o agente é um especialista no jogo específico.

Tarefa: Guia o agente a responder a pergunta do usuário com base no jogo e a fornecer informações úteis e interessantes.

Restrições: Limita o tamanho da resposta (máximo de 500 caracteres), evita respostas em inglês quando o português é a língua desejada e estabelece regras para lidar com perguntas fora do escopo do jogo.

Formato: Solicita que a resposta seja em Markdown para uma apresentação clara.

API do Gemini (gemini-2.0-flash): Utilizamos o modelo gemini-2.0-flash para processar as perguntas e gerar as respostas. A flexibilidade da API nos permite enviar as instruções de sistema junto com a pergunta do usuário, criando uma experiência de IA altamente contextualizada.

Ferramentas (Google Search): A inclusão de Google Search: {} nas tools (ferramentas) do fetch indica que o modelo Gemini tem a capacidade de utilizar a pesquisa do Google se precisar de informações adicionais para responder à pergunta. Isso amplia o conhecimento do nosso agente de IA, tornando-o ainda mais poderoso!

Essa abordagem permite que a IA atue como um verdadeiro especialista no domínio, fornecendo respostas mais relevantes e precisas em comparação com uma consulta genérica.
