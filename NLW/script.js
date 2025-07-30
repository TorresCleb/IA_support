const apiKeyInput = document.getElementById('apiKey')
const gameSelect = document.getElementById('gameSelect')
const questionInput = document.getElementById('questionInput')
const askButton = document.getElementById('askButton')
const aiResponse = document.getElementById('aiResponse')
const form = document.getElementById('form')

// Function to convert Markdown text to HTML
const markdownToHTML = (text) =>{
    const converter = new showdown.Converter()
    return converter.makeHtml(text)
}

//AIzaSyD57flc2_tSuB22ohrK0RwCn9WaXfdXibo - Google API Key 

const perguntarAi = async (question, game, apiKey) =>{ // Function to ask the AI a question
    const model = 'gemini-2.0-flash'
    const baseURL = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`
    const systemInstructionText  = `

     ## Especialidade
        Você é um especialista em ${game} e pode responder perguntas técnicas sobre redes e telecomunicações.
        E em casos de clientes atritados, você pode fornecer informações sobre como identificar e lidar com clientes que estão insatisfeitos ou que podem deixar de usar o serviço.
        
     ## Tarefa
        Responda a pergunta do usuário com base no conhecimento na area de redes e telecomunicação ${game} e forneça informações úteis e interessantes ao usuário.

    ## Pergunta
        ${question}

    ## Reposta  
        Forneça uma resposta clara e concisa, com informações relevantes sobre redes e telecomunicações.
       - Uma resposta com no máximo 400 caracteres.
       - Não quero respostas que podem ser faladas em português, mas que estão em inglês.
       - Quando o assunto for clientes atritados, forneça informações sobre como identificar e lidar com clientes que estão insatisfeitos ou que podem deixar de usar o serviço.

    ## Regras
        - Considere a data atual ${new Date().toISOString()}.
        - Responda apenas com informações relacionadas a redes e telecomunicações ${game}.
        - Não inclua informações irrelevantes ou não relacionadas redes e telecomunicações.
        - Se a pergunta não for sobre redes e telecomunicações, informe que não sabe a resposta.
        - Use uma linguagem clara e acessível.
        - quando for necessário, forneça exemplos ou explicações adicionais para ajudar na compreensão.
        - Quando se tratar de clientes atritados ou insatisfeitos, dar a resposta mais adequada para o cliente, e não a mais técnica.
        
    ## Formato da Resposta
        A resposta deve ser escrita em Markdown, incluindo títulos, listas e formatação adequada para facilitar
        a leitura e compreensão.
        mas os subtitulos devem ser  em negrito, e o texto deve ser claro e conciso.
        - não quero numeração de títulos, apenas subtítulos em negrito.

     ## Instruções
        Responda de forma clara e concisa, fornecendo informações relevantes sobre redes e telecomunicações.
        Se não souber a resposta, diga que não sabe.
    `
    const contents = [{
        role:"user",
        parts:[{
            text: systemInstructionText 
        }]
    }]
     const tools = [{
        google_search: {}
     }]

    // Calling API
    const response = await fetch(baseURL,{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            contents,
            tools
        })
    })

    const data = await response.json() // Parse the JSON response
    return data.candidates[0].content.parts[0].text
}
const enviarFormulario = async (event) =>{ // Function to handle form submission
    event.preventDefault()// Prevent the default form submission behavior
    const apiKey = apiKeyInput.value
    const game = gameSelect.value
    const question = questionInput.value
    
    if(apiKey == '' || game == '' || question == ''){
        alert('por favor, preencha todos os campos.')
        return
    }
    askButton.disabled = true // Disable the button to prevent multiple submissions
    askButton.textContent = 'Perguntando...' // Change button text to indica'te submission
    askButton.classList.add('loading')

    // Here you would typically make an API call to send the question and get a response
    try{
        const text = await perguntarAi(question,game,apiKey)
        aiResponse.querySelector('.response-content').innerHTML = markdownToHTML(text) // Display the AI's response


    } catch (error) {
        console.log('Erro:' ,error)
    } finally{
        askButton.disabled = false // Re-enable the button after processing
        askButton.textContent = 'Perguntar' // Reset button text
        askButton.classList.remove('loading') // Remove loading class
    }
}

form.addEventListener('submit', enviarFormulario)