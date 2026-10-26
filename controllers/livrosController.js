const livrosDao = require('../dao/livrosDao');

module.exports = (app) => {
  app.get('/livros', async (req, res) => {
    const response = await livrosDao.getAll();
    return res.send(response).status(200);
  });

  app.get('/livros/:id', async (req, res) => {
    const response = await livrosDao.getById(req.params.id);
    return res.send(response).status(200);
  });

  app.post('/livros/', async (req, res) => {
    const response = await livrosDao.insert(req.body);
    return res.send(response).status(201);
  });

  app.put('/livros/:id', async (req, res) => {
    const response = await livrosDao.update({ ...req.body, aut_codigo: req.params.id });
    return res.send(response).status(200);
  });

  app.delete('/livros/:id', async (req, res) => {
    await livrosDao.delete(req.params.id);
    return res.send({}).status(204);
  });
};
