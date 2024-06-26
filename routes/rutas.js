const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');
const ubicacionController = require('../controllers/ubicacionController');

router.post('/', clienteController.agregarClientes);
router.get('/', clienteController.buscarClientes);
router.get('/:id', clienteController.buscarCliente);
router.delete('/:id', clienteController.eliminarCliente);
router.put('/:id', clienteController.actualizarCliente);


router.post('/ubi/', ubicacionController.agregarUbicaciones);
router.get('/ubi/', ubicacionController.buscarUbicaciones);
router.get('/ubi/:id', ubicacionController.buscarUbicacion);
router.delete('/ubi/:id', ubicacionController.eliminarUbicacion);
router.put('/ubi/:id', ubicacionController.actualizarUbicacion);

module.exports = router;