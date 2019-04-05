const mysql = require('./baseDao');

module.exports = {
  getById: async (id) => {
    return (await mysql.executeString(`SELECT * FROM editoras WHERE edt_codigo = ${id}`)).content;
  },
  getAll: async () => {
    return (await mysql.executeString(`SELECT * FROM editoras`)).content;
  },
  insert: async (body) => {
    return (await mysql.executeObject(`INSERT INTO editoras SET ?`, body)).content;
  },
  update: async (body) => {
    return (await mysql.executeObject(`UPDATE editoras SET ? WHERE edt_codigo = ${body.edt_codigo}`, body)).content;
  },
  delete: async (id) => {
    return (await mysql.executeString(`DELETE FROM editoras WHERE edt_codigo = ${id}`)).content;
  }
};
