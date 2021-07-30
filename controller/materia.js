const db = require('../models/index');
const Materias = db.Materias;

exports.viewAllMaterias = async ( req, res) => {
    const resultado = await Materias.findAll();
    res.json(resultado);
}

exports.viewMaterias = async (req, res) => {
    const resultado = await Materias.findByPk(
        req.params.id
    );
    res.json(resultado);
}

exports.insertMaterias = async (req, res) => {
    const { name, comment } = req.body;
    const materiaNueva = await Materias.create({ name, comment }); 
    res.json(materiaNueva);
}