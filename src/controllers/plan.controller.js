const PlanModel = require( '../models/Plan' )
const ServiceModel = require('../models/Service'); // Asegúrate de tener la ruta correcta al modelo
const { getExistingServices, registerCreate } = require('../services/plan.service');


const createPlan = async ( req, res ) => {
    const inputData = req.body;
    const payload = req.authUser;

    // Asignamos a la data el ID del usuario
    inputData.userId = payload._id;

    try {

        const existingServices = await getExistingServices( inputData );

        if ( existingServices.length < inputData.services.length ) {
            return res.status( 400 ).json({ 
                ok: false, 
                msg: 'Al menos uno de los servicios proporcionados no existe.' 
            });
        }

        inputData.total = calculateTotalPrice( inputData );

        const savedPlan = await registerCreate( inputData );

        res.json({ ok: true, data: savedPlan });
    }
    catch ( error ) {
        console.log( error );
        res.json({ ok: false, msg: 'Error al crear el plan' });
    }

}


const calculateTotalPrice = ( plan ) => {
    return plan.services.reduce( ( total, servicio ) => total + servicio.price, 0 );
};


module.exports = {
    createPlan
}