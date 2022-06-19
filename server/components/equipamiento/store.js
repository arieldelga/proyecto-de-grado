const Model = require('./model');

function listEquipamiento(filterEquipamiento) {
    return new Promise((resolve, reject) => {
        let filter = {};
        if (filterEquipamiento != null) {
            filter = {_id: filterEquipamiento};
        }

        const equipamiento = Model.find(filter);
        resolve(equipamiento);
    });
}

function addEquipamiento(equipamiento) {
    const myEquipamiento = new Model(equipamiento);
    myEquipamiento.save();
}

function removeEquipamiento(id) {
    return new Promise((resolve, reject) => {
        equipamiento = Model.findById(id);
        equipamiento.deleteOne({_id: id});
        resolve(equipamiento);
    });
}

module.exports = {
    list: listEquipamiento,
    add: addEquipamiento,
    remove: removeEquipamiento,
}