var buscar = require('./buscarpokemon.js');
exports.mayormenor = function (req, res) {

    const pokemonInfos = buscar.MaxMin();
    res.render('MaxMin.html', {
        arreglo: pokemonInfos
    });
}