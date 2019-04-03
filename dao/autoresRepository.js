const mysql = require('jano-mysql')({
    host: 'localhost',
    user: 'root',
    database: 'dados_fatec',
    password: 'root',
    port: 3306
});

module.exports = {
    getById: (id) => {
        return mysql.executeString(`SELECT * FROM autores WHERE aut_apelido = ${id}`);
    },
    getAll: () => {
        return mysql.executeString(`SELECT * FROM autores`);
    },
    insert: (body) => {
        return mysql.executeObject(`INSERT INTO autores SET ?`, { aut_codigo: body.aut_codigo, aut_dtcadastro: body.aut_dtcadastro, aut_email: body.aut_email, aut_nome: body.aut_nome, aut_sexo: body.aut_sexo, aut_telefone: body.aut_telefone });
    },
    update: (body) => {
        return mysql.executeObject(`UPDATE autores SET ? WHERE id = ${aut_apelido}`, { aut_codigo: body.aut_codigo, aut_dtcadastro: body.aut_dtcadastro, aut_email: body.aut_email, aut_nome: body.aut_nome, aut_sexo: body.aut_sexo, aut_telefone: body.aut_telefone });
    },
    delete: (id) => {
        return mysql.executeString(`DELETE FROM autores WHERE id = ${aut_apelido}`);
    }
};
