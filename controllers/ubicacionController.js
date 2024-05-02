const Ubicacion = require('../models/Ubicacion');


exports.buscarUbicaciones = async(req,res) => {

try{
    const ubicacion = await Ubicacion.find();
    res.json(ubicacion)

}catch(error){
    console.log(error)
    res.status(500).send('hubo un error al buscar la ubicacion')
}

}

exports.agregarUbicaciones = async(req,res) =>{

    try{

        let ubicaciones;
        ubicaciones = new Ubicacion (req.body)
        await ubicaciones.save();
        res.send(ubicaciones);


    } catch (error){
        console.log(error)
        res.status(500).send('hubo un error al agregar una ubicacion')
    }
}

exports.buscarUbicacion = async (req,res) => {

    try {
        let ubicacion = await Ubicacion.findById(req.params.id);
        if(!ubicacion){
            res.status(400).json({msg: "no se encuentra la ubicacion con ese ID"})
            return
        }

        res.send(ubicacion);
        
    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al buscar la ubicacion');
    }
}

exports.eliminarUbicacion = async (req,res)=>{

    try {
        let ubicacion = await Ubicacion.findById(req.params.id);
        if(!ubicacion){
            res.status(404).json({msg: "no se encuentra la ubicacion con ese ID"})
            return
        }

        await Ubicacion.findOneAndDelete({_id: req.params.id});
        res.json({msg: 'la ubicacion a sido eliminada'});
        return

    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al eliminar la ubicacion');
    }

}

exports.actualizarUbicacion = async(req,res)=>{
    
    try {
        
    const {nombres, cPostal, direccion, municipio} = req.body
    let ubicacion = await Ubicacion.findById(req.params.id);

        if(!Ubicacion){
            res.status(404).json({msg: 'la ubicacion no existe'});
        }else{
            ubicacion.nombres = nombres;
            ubicacion.cPostal = cPostal;
            ubicacion.direccion = direccion;
            ubicacion.municipio = municipio;

            ubicacion = await Ubicacion.findOneAndUpdate({_id: req.params.id}, ubicacion,{new:true});
            res.json(ubicacion);
            return
        }
        
    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al actualizar la ubicacion');
       return
    }
}