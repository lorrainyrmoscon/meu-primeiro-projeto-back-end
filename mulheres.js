const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333 

const mulheres = [
    {
        nome: 'Lorrainy Moscon',
        imagem: 'https://media.licdn.com/dms/image/D4D03AQGb9zmrfUpdpw/profile-displayphoto-shrink_400_400/0/1678668904131?e=1691020800&v=beta&t=rHFLKEb-dKXWJikABvKi1OKeDyfLe4S7K2A032WAlS4',
        minibio: 'Desenvolvedora Jr',
    },

    {
        nome: 'Iana Chan',
        imagem: 'https://bit.ly/3JCXBqP',
        minibio: 'CEO & Founder da PrograMaria',
    },
 
    {    
        nome: 'Luana Pimentel',
        imagem: 'https://bit.ly/3FKpFaz', 
        minibio: 'Senior Staff Software Engineer',
    }
]

function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta);
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)