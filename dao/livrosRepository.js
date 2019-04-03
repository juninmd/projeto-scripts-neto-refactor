const mysql = require('jano-mysql')({
    host: 'localhost',
    user: 'root',
    database: 'dados_fatec',
    password: 'root',
    port: 3306
});

module.exports = {
    getById: (id) => {
        return mysql.executeString(`SELECT * FROM livros WHERE aut_codigo = ${id}`);
    },
    getAll: () => {
        return mysql.executeString(`SELECT * FROM livros`);
    },
    insert: (body) => {
        return mysql.executeObject(`INSERT INTO livros SET ?`, { edt_codigo: body.edt_codigo, liv_ano: body.liv_ano, liv_codigo: body.liv_codigo, liv_dtcadastro: body.liv_dtcadastro, liv_edicao: body.liv_edicao, liv_isbn: body.liv_isbn, liv_titulo: body.liv_titulo });
    },
    update: (body) => {
        return mysql.executeObject(`UPDATE livros SET ? WHERE id = ${aut_codigo}`, { edt_codigo: body.edt_codigo, liv_ano: body.liv_ano, liv_codigo: body.liv_codigo, liv_dtcadastro: body.liv_dtcadastro, liv_edicao: body.liv_edicao, liv_isbn: body.liv_isbn, liv_titulo: body.liv_titulo });
    },
    delete: (id) => {
        return mysql.executeString(`DELETE FROM livros WHERE id = ${aut_codigo}`);
    }
};
