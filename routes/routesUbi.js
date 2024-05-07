const express = require('express');
const router = express.Router();
const ubicacionController = require('../controllers/ubicacionController');


router.post('/ubi/', ubicacionController.agregarUbicaciones);
router.get('/ubi/', ubicacionController.buscarUbicaciones);
router.get('/ubi/:id', ubicacionController.buscarUbicacion);
router.delete('/ubi/:id', ubicacionController.eliminarUbicacion);
router.put('/ubi/:id', ubicacionController.actualizarUbicacion);

module.exports = router;