const express = require ('express');
const mongoose = require ('mongoose');
const routes = require('./routes/routes');

const app = express ();
app.listen(3333);
app.use (express.json());
app.use(routes);


mongoose.connect ('mongodb+srv://douglas:p30p13wsx@cluster0.pe1mwz6.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});



app.get('/:nome', (request,response) => {
         return response.send("Olá Mundo " + `${request.params.nome}`);
});


app.post('/participante' , (request,response) => {
    console.log(request.body);
    const {nome} = request.body;
    return response.json({"mensagem":`Olá Mundo ${nome}`});
});

