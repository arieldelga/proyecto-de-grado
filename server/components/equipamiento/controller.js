const store = require('./store');

function getEquipamiento(filter) {
    return new Promise((resolve, reject) => {
        resolve(store.list(filter));
    });
}

function addEquipamiento(nombre, marca, estado, observacion) {
    return new Promise((resolve, reject) => {
        if (!nombre || !marca || !estado || !observacion) {
            reject('[controller] Los datos son incorrectos');
            return false;
        }

        const equipamiento = {
            nombre: nombre,
            marca: marca,
            estado: estado,
            ultimoUso: {
                fecha: new Date(),
                observacion: observacion
            }
        };

        store.add(equipamiento);
        resolve(equipamiento);
    });
}

function deleteEquipamiento(id) {
    return new Promise((resolve, reject) => {
        if (!id) {
            reject('Id inválido');
            return false;
        }
        store.remove(id)
            .then((equipamiento) => {
                resolve(equipamiento);
            })
            .catch(e => {
                reject(e);
            });
    });
}

module.exports = {
    getEquipamiento,
    addEquipamiento,
    deleteEquipamiento,
}