const {Router} = require('express');

const grupoController = require('../controllers/grupoController');

const routes = Router();

routes.get('/grupo/:participante', grupoController.getById);
routes.get('/grupo/:responsavel', grupoController.getById);
routes.post('/grupo', grupoController.create);
routes.post('/grupo/:participante', grupoController.create);
routes.put('/grupo', grupoController.edit);
routes.delete('/grupo/:participante', grupoController.delete);

module.exports = routes;