const express = require("express"); //Importando o express
const app = express(); //Iniciando o express

app.get("/",function(req,res){
    res.send("Oi");
});

app.get("/blog/:artigo?",function(req,res){
    var artigo = req.params.artigo;
    if(artigo){
        res.send("<h2>Artigo: " + artigo + " </h2>");
    }else{
    res.send("Bloguinho");
    }
})

app.get("/canal/youtube",function(req,res){
    var canal = req.query["canal"];

    if(canal){
        res.send(canal);
    }else{
    res.send("Nenhum canal");
    }
})

app.get("/ola/:nome/:empresa",function(req,res){
    // REQ - Dados enviados pelo usuário
    // RES - Resposta que irá ser enviada para o usuário
    var nome = req.params.nome;
    var empresa = req.params.empresa;
    res.send("<h2>Hola " + nome + " do " + empresa + " </h2>");
})

app.listen(4000,function(erro){
    if(erro){
        console.log("Ocorreu um erro");
        }else{
            console.log("Iniciou com sucesso");
        }
})