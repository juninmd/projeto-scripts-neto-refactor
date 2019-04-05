const mysql = require('./baseDao');

module.exports = {
  getById: async (id) => {
    return (await mysql.executeString(`SELECT * FROM livros WHERE aut_codigo = ${id}`)).content;
  },
  getAll: async () => {
    return (await mysql.executeString(`SELECT * FROM livros`)).content;
  },
  insert: async (body) => {
    return (await mysql.executeObject(`INSERT INTO livros SET ?`, body)).content;
  },
  update: async (body) => {
    return (await mysql.executeObject(`UPDATE livros SET ? WHERE aut_codigo = ${body.aut_codigo}`, body)).content;
  },
  delete: async (id) => {
    return (await mysql.executeString(`DELETE FROM livros WHERE aut_codigo = ${id}`)).content;
  }
};
