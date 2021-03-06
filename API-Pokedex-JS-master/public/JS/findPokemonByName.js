const db_pokedex = require("../../pokedex.json");

exports.BuscarXnombre = function (nombre) {
    const data = db_pokedex.find((p) => p.name.toLowerCase() === nombre.toLowerCase());
    if (!data) {
        return null;
    }
    return data;
}

exports.tipos = function () {
    let data_tipos = [];
    var j = 0;
    db_pokedex.forEach(item => {
        for (let i = 0; i < item.types.length; i++) {

            data_tipos[j] = item.types[i];
            j++;
        }
    });

    let result = data_tipos.filter((item, index) => {
        return data_tipos.indexOf(item) === index;
    })
    return result;
}
exports.buscarxtipos = function (tipo) {
    let data_tipos = db_pokedex.filter((item, index) => {
        for (let i = 0; i < item.types.length; i++) {

            return tipo === item.types[i];

        }

    })
    return data_tipos;
}

exports.buscar_base = function (min, max) {
    let data_tipos = db_pokedex.filter((item, index) => {

        return parseInt(item.base_experience, 10) >= min && parseInt(item.base_experience, 10) <= max;

    })
    return data_tipos;
}
exports.MaxMin = function () {
    let data_tipos = db_pokedex.sort(((a, b) => {
        return b.height - a.height && b.weight - a.weight
    }))
    console.log(data_tipos.length);
    return data_tipos;
}