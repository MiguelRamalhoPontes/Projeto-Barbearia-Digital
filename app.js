const server = require('./server')
const sequelize = require("./Database/config")

async function run() {
    const port = 8000
    try {
        await sequelize.authenticate()
        console.log('Conexão com o banco de dados estabelecida com sucesso.')

        await sequelize.sync({ alter: true })
        console.log('Modelos sincronizados com o banco de dados.')

        sever.port = port;
        sever.listen();
}
    catch (error) {
        console.error('Não foi possível conectar ao banco de dados:', error)
    }
}
