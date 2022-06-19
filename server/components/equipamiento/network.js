const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');

const app = express();

app.get('/', (req, res) => {
    const filter = req.query.id || null;
    controller.getEquipamiento(filter)
        .then((equipamiento) => {
            response.succes(req, res, equipamiento, 200);
        })
        .catch(e => {
            response.error(req, res, 'Unexpected error', 500, e);
        });
});

app.post('/', (req, res) => {
    controller.addEquipamiento(req.body.nombre, req.body.marca, req.body.estado, req.body.ultimoUso.observacion)
        .then((equipamiento) => {
            response.succes(req, res, equipamiento, 201);
        })
        .catch(e => {
            response.error(req, res, 'Información inválida', 500, e);
        });
});

app.delete('/:id', (req, res) => {
    controller.deleteEquipamiento(req.params.id)
        .then(() => {
            response.succes(req, res, `Equipamiento ${req.params.id} eliminado`, 200);
        })
        .catch(e => {
            response.error(req, res, 'Error interno', 500, e);
        });
});


module.exports = app;