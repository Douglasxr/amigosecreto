const {Router} = require('express');

const desejoController = require('../controllers/desejoController');


const routes = Router();

routes.get('/desejo/:nome', desejoController.getById);
routes.post('/desejo/', desejoController.create);
routes.put('/desejo', desejoController.edit);
routes.delete('/desejo/:nome', desejoController.delete);



module.exports = routes;