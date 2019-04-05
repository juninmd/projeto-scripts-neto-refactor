const mysql = require('./baseDao');

module.exports = {
  getById: async (id) => {
    return (await mysql.executeString(`SELECT * FROM autores WHERE aut_codigo = ${id}`)).content;
  },
  getAll: async () => {
    return (await mysql.executeString(`SELECT * FROM autores`)).content;
  },
  insert: async (body) => {
    return (await mysql.executeObject(`INSERT INTO autores SET ?`, body)).content;
  },
  update: async (body) => {
    return (await mysql.executeObject(`UPDATE autores SET ? WHERE aut_codigo = ${body.aut_codigo}`, body)).content;
  },
  delete: async (id) => {
    return (await mysql.executeString(`DELETE FROM autores WHERE aut_codigo = ${id}`)).content;
  }
};
