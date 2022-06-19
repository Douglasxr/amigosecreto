const {Router} = require('express');

const participanteController = require('..controllers/grupoController');

const routes = Router();

routes.get('/grupo/:responsavel', grupoController.getById);
routes.get('/grupo/:participante', grupoController.getById);
routes.post('/grupo', grupoController.create);
routes.put('/grupo', grupoController.edit);
routes.delete('/grupo/:id', grupoController.delete);
routes.post('/participante', participanteController.create);
routes.delete('/participante/:id', participanteController.delete);

module.exports = routes;