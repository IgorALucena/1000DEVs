const express = require('express');
const app = express();
const PORT = process.env.PORT || 3007;
const routes = require('./src/routes')

app.use(express.json());

app.use("/",routes);

app.listen(3000, ()=>{
    console.log("rodando na porta 3000");
});