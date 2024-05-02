const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');
const ubicacionController = require('../controllers/ubicacionController');

router.post('/', clienteController.agregarClientes);
router.get('/', clienteController.buscarClientes);
router.get('/:id', clienteController.buscarCliente);
router.delete('/:id', clienteController.eliminarCliente);
router.put('/:id', clienteController.actualizarCliente);


router.post('/u/', ubicacionController.agregarUbicaciones);
router.get('/u/', ubicacionController.buscarUbicaciones);
router.get('/u/:id', ubicacionController.buscarUbicacion);
router.delete('/u/:id', ubicacionController.eliminarUbicacion);
router.put('/u/:id', ubicacionController.actualizarUbicacion);

module.exports = router;