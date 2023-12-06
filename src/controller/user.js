const calculaIdade = (req, res)=>{
    const nascimento = new Date("1995-12-21")
    const hoje = new Date(Date.now());
    const idade = hoje.getFullYear() - nascimento.getFullYear();
    res.json({
        "nome":"Igor",
        "sobrenome":"Lucena",
        "profissao":"atendente",
        "nascimento": idade
    })

};

module.exports = calculaIdade;
