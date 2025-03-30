// Importando e instanciando dotenv
require('dotenv').config();

//Importando e instanciando o express
const express = require("express")
const app = express()
const port = process.env.PORT || 3000;

//Importando e instanciando o mongoose
const mongoose = require("mongoose")

//Importand cors
const cors = require('cors')

//Json para poder receber as req
app.use(express.json())

//Ativando cors
app.use(cors())

// Conectando com o banco usando a variável de ambiente
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("MongoDB conectado com sucesso!"))
    .catch(err => console.error("Erro ao conectar ao MongoDB:", err));


//Ouvindo a porta o tempo todo para qualuqer tipo de req e res
app.listen(port, () => {
    console.log(`App rodando na porta ${port}`);
})


//Fazendo um modelo de como irá funcionar os documentos do banco


// ------ TABELA PRODUTOS 

//Modelo do documento
const Produtos = mongoose.model('Produtos', {
    colecao: String,
    nome: String,
    preco: Number,
    imagem_url: String
})

// ------ Métodos CRUD

//Criando e salvando um novo dado
app.post("/", async (req, res) => {
    try {
        const produtos = new Produtos({
            colecao: req.body.colecao,
            nome: req.body.nome,
            preco: req.body.preco,
            imagem_url: req.body.imagem_url
        });

        await produtos.save();
        res.status(201).send(produtos); // 201 Created
    } catch (error) {
        console.error("Erro ao criar produto:", error);
        res.status(500).send({ error: "Erro ao criar produto" }); // 500 Internal Server Error
    }
});

//Listando todos os dados do banco
app.get("/", async (req, res) => {
    const produtos = await Produtos.find()
    res.send(produtos)
})

//Deletando por id
app.delete("/:id", async (req, res) => {
    const produtos = await Produtos.findByIdAndDelete(req.params.id)
    res.send(produtos)
})

//Editando por id
app.put("/:id", async (req, res) => {
    const produtos = await Produtos.findByIdAndUpdate(req.params.id, {
        colecao: req.body.colecao,
        nome: req.body.nome,
        preco: req.body.preco,
        imagem_url: req.body.imagem_url
    })
    res.send(produtos)
})


// ------ TABELA ADM

//Modelo do documento
const Adm = mongoose.model('Adm', {
    email:String,
    senha:String
})

//Criando e salvando um novo dado
app.post("/adm", async (req, res) => {
    try {
        const adm = new Adm({
            email: req.body.email,
            senha: req.body.senha
        });

        await adm.save();
        res.status(201).send(adm); // 201 Created
    } catch (error) {
        console.error("Erro ao criar produto:", error);
        res.status(500).send({ error: "Erro ao criar produto" }); // 500 Internal Server Error
    }
});

//Listando todos os dados do banco
app.get("/adm", async (req, res) => {
    const adm = await Adm.find()
    res.send(adm)
})

//Deletando por ID
app.delete("/adm/:id", async (req, res) => {
    const adm = await Adm.findByIdAndDelete(req.params.id)
    res.send(adm)
})

//Editando por id
app.put("/adm/:id", async (req, res) => {
    const adm = await Adm.findByIdAndUpdate(req.params.id, {
        email: req.body.email,
        senha: req.body.senha
    })
    res.send(adm)
})


//Autenticação da existencia do adm
app.post("/adm/auth", async (req, res) => {
    const { email, senha } = req.body;

    try {
        const adm = await Adm.findOne({ email, senha });

        if (!adm) {
            return res.status(401).send({ message: "Credenciais inválidas" });
        }

        res.send({ message: "Autenticação bem-sucedida" });
    } catch (error) {
        res.status(500).send(error);
    }
});