class Atendimento
{
    nomeCLiente
    telefone
    horarioAtendimento
    dataAtendimento
    dataNascimento
    tipoServico
    profissional
    constructor(nomeCLiente, telefone, horarioAtendimento, dataAtendimento, dataNascimento, tipoServico, profissional)
    {
        this.nomeCLiente = nomeCLiente
        this.telefone = telefone
        this.horarioAtendimento = horarioAtendimento
        this.dataAtendimento = dataAtendimento
        this.dataNascimento = dataNascimento
        this.tipoServico = tipoServico
        this.profissional = profissional
    }

    getNomeCliente()
    {
        return this.nomeCLiente
    }
    setNomeCliente(nomeCLiente)
    {
        this.nomeCLiente = nomeCLiente
    }
    getTelefone()
    {
        return this.telefone
    }
    setTelefone(telefone)
    {
        this.telefone = telefone
    }
    
    getHorarioAtendimento()
    {
        return this.horarioAtendimento
    }
    setHorarioAtendimento(horarioAtendimento)
    {
        this.horarioAtendimento = horarioAtendimento
    }
    getDataAtendimento()
    {
        return this.dataAtendimento
    }
    setDataAtendimento(dataAtendimento)
    {
        this.dataAtendimento = dataAtendimento
    }
    getDataNascimento()
    {
        return this.dataNascimento
    }
    getTipoServico()
    {
        return this.tipoServico
    }
    setTipoServico(tipoServico)
    {
        this.tipoServico = tipoServico
    }
    getProfissional()
    {
        return this.profissional
    }
    setProfissional(profissional)
    {
        this.profissional = profissional
    }
}
module.exports = Atendimento