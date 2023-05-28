const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response) {
    response.json({
        nome: 'Lorrainy Moscon',
        imagem: 'https://media.licdn.com/dms/image/D4D03AQGb9zmrfUpdpw/profile-displayphoto-shrink_400_400/0/1678668904131?e=1691020800&v=beta&t=rHFLKEb-dKXWJikABvKi1OKeDyfLe4S7K2A032WAlS4',
        minibio: 'Desenvolvedora Jr'
    })
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)
