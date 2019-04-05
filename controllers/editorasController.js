const editorasDao = require('../dao/editorasDao');

module.exports = (app) => {
  app.get('/editoras', async (req, res) => {
    const response = await editorasDao.getAll();
    return res.send(response).status(200);
  });

  app.get('/editoras/:id', async (req, res) => {
    const response = await editorasDao.getById(req.params.id);
    return res.send(response).status(200);
  });

  app.post('/editoras/', async (req, res) => {
    const response = await editorasDao.post(req.body);
    return res.send(response).status(201);
  });

  app.put('/editoras/:id', async (req, res) => {
    const response = await editorasDao.put(req.body, req.params.id);
    return res.send(response).status(200);
  });

  app.delete('/editoras/:id', async (req, res) => {
    await editorasDao.deleteById(req.params.id);
    return res.send({}).status(204);
  });
};
