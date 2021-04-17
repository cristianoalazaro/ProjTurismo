import express from 'express';
import TourController from './controllers/TourController.js';

import tourController from './controllers/TourController.js';

const router = express.Router();

//rota de teste
router.get('/', (req, res)=>{
    res.json({status:'ok'});
});

//rota de listagem de pontos turísticos
router.get('/list', tourController.list );

//rota de estados
router.get('/uf', TourController.uf);

//rota de cadastro
router.post('/new',tourController.add);

export default router;