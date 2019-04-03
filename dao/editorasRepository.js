const mysql = require('jano-mysql')({
    host: 'localhost',
    user: 'root',
    database: 'dados_fatec',
    password: 'root',
    port: 3306
});

module.exports = {
    getById: (id) => {
        return mysql.executeString(`SELECT * FROM editoras WHERE edt_cep = ${id}`);
    },
    getAll: () => {
        return mysql.executeString(`SELECT * FROM editoras`);
    },
    insert: (body) => {
        return mysql.executeObject(`INSERT INTO editoras SET ?`, { edt_cidade: body.edt_cidade, edt_codigo: body.edt_codigo, edt_dtcadastro: body.edt_dtcadastro, edt_email: body.edt_email, edt_estado: body.edt_estado, edt_nome: body.edt_nome, edt_telefone: body.edt_telefone });
    },
    update: (body) => {
        return mysql.executeObject(`UPDATE editoras SET ? WHERE id = ${edt_cep}`, { edt_cidade: body.edt_cidade, edt_codigo: body.edt_codigo, edt_dtcadastro: body.edt_dtcadastro, edt_email: body.edt_email, edt_estado: body.edt_estado, edt_nome: body.edt_nome, edt_telefone: body.edt_telefone });
    },
    delete: (id) => {
        return mysql.executeString(`DELETE FROM editoras WHERE id = ${edt_cep}`);
    }
};
