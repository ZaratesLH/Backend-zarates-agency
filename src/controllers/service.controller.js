const { registerService, getAllServices, getOneServiceById } = require("../services/service.service");


const createService = async ( req, res ) => {
    const inputData = req.body;
    const payload = req.authUser;

    // Asignamos a la data el ID del usuario
    inputData.userId = payload._id;

    try {
        const data = await registerService( inputData );

        res.json({ ok: true, data });
    }
    catch ( error ) {
        console.log( error );
        res.json({ ok: false, msg: 'Error al crear el servicio' });
    }

}

const getServices = async ( req, res ) => {

    try {
        const data = await getAllServices();

        res.json({ ok: true, data });
    }
    catch( error ) {
        console.log( error );
        res.json({ ok: false, msg: 'Error al obtener la lista de servicios' });
    }

}

const getServiceById = async ( req, res ) => {
    const service_id = req.params.id;

    try {
        const data = await getOneServiceById( service_id );

        res.json({ ok: true, data });
    } 
    catch ( error ) {
        console.log( error );
        res.json({ ok: false, msg: 'Error al obtener servicio por ID' });
    }

}


module.exports = {
    createService,
    getServices,
    getServiceById
}