class Atendimento
{
    nome
    telefone
    horario
    tempoService
    TipoService
    data

    constructor(email, senha, nome, telefone, horario, tempoService, TipoService, data)
    {
        this.nome = nome
        this.telefone = telefone
        this.horario = horario
        this.tempoService = tempoService
        this.TipoService = TipoService
        this.data = data
    }

}

module.exports = Atendimento