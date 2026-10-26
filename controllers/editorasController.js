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
    const response = await editorasDao.insert(req.body);
    return res.send(response).status(201);
  });

  app.put('/editoras/:id', async (req, res) => {
    const response = await editorasDao.update({ ...req.body, edt_codigo: req.params.id });
    return res.send(response).status(200);
  });

  app.delete('/editoras/:id', async (req, res) => {
    await editorasDao.delete(req.params.id);
    return res.send({}).status(204);
  });
};
