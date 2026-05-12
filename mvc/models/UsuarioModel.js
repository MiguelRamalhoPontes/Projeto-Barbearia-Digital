class Usuario
{
    #email
    #senha
    #nome
    #telefone
    #cpf

    constructor(email, senha, nome, telefone, cpf)
    {
        this.#validarEmail(email)
    
        this.#email = email
        this.#senha = senha
        this.#nome = nome
        this.#telefone = telefone
        this.#cpf = cpf
    }

    get email()
    {
        return this.#email
    }

    get senha()
    {
        return this.#senha
    }

    get nome()
    {
        return this.#nome
    }

    set email(valor)
    {
        this.#email = valor
    } 

    #validarEmail()
    {
        const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

        if(pattern.test(this.#email))
        {
            throw new Error("Email inválido")
        }
        
    }
}

module.exports = Usuario 