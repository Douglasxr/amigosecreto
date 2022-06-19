const {Router} = require('express');

const participanteController = require('../controllers/participanteController');
const grupoController = require('../controllers/grupoController');
const sorteioController = require('../controllers/sorteioController');


const routes = Router();

routes.get('/participante/:id', participanteController.getById);
routes.post('/participante', participanteController.create);
routes.put('/participante', participanteController.edit);
routes.delete('/participante/:id', participanteController.delete);
routes.get('/grupo/:participante', grupoController.getById);
routes.get('/grupo/:responsavel', grupoController.getById);
routes.post('/grupo', grupoController.create);
routes.post('/grupo/:participante', grupoController.create);
routes.put('/grupo', grupoController.edit);
routes.delete('/grupo/:participante', grupoController.delete);
routes.post('/sorteio', sorteioController.sortear);


module.exports = routes;