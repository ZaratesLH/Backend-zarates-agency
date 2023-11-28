const { registerService } = require("../services/service.service");


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


module.exports = {
    createService,
}