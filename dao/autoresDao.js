const config = require('../config');
const mysql = require('jano-mysql')(config.mysql);

module.exports = {
  getAll: () => {
    return mysql.executeObject("INSERT INTO cliente SET ?", { NOME: nome });
  },
  getById: (id) => {
    return mysql.readProcedure("CLIENTES", [1]);
  },
  post: (model) => {
    return mysql.readProcedure("CLIENTES", [1]);
  },
  put: (model, id) => {
    return mysql.readProcedure("CLIENTES", [1]);
  },
  deleteById: (id) => {
    return mysql.readProcedure("CLIENTES", [1]);
  },
}