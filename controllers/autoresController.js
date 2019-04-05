const autoresDao = require('../dao/autoresDao');

module.exports = (app) => {
  app.get('/autores', async (req, res) => {
    const response = await autoresDao.getAll();
    return res.send(response).status(200);
  });

  app.get('/autores/:id', async (req, res) => {
    const response = await autoresDao.getById(req.params.id);
    return res.send(response).status(200);
  });

  app.post('/autores/', async (req, res) => {
    const response = await autoresDao.post(req.body);
    return res.send(response).status(201);
  });

  app.put('/autores/:id', async (req, res) => {
    const response = await autoresDao.put(req.body, req.params.id);
    return res.send(response).status(200);
  });

  app.delete('/autores/:id', async (req, res) => {
    await autoresDao.deleteById(req.params.id);
    return res.send({}).status(204);
  });
};
