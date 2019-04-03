const autoresDao = require('../dao/autoresDao');

module.exports = (app) => {
  app.get("/autores/", async (req, res) => {
    autoresDao.
    return res.send(200);
  });

  app.get("/autores/:id", async (req, res) => {
    return res.send(200);
  });
}