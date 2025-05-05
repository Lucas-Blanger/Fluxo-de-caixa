const sequelize = require("./config/database");
const Caixa = require("./models/caixa.js");

async function init() {
  try {
    await sequelize.authenticate();
    console.log("Conexão estabelecida com sucesso.");

    await sequelize.sync();
    console.log("Tabela sincronizada.");
  } catch (error) {
    console.error("Erro na conexão:", error);
  }
}

init();
