const { registerService, getAllServices, getOneServiceById, removeOneServiceById, updateOneServiceById, registerPlanFeature, getAllPlanFeatures, getOnePlanFeatureById, removeOnePlanFeatureById, updateOnePlanFeatureById } = require("../services/plan-feature.service");


const createPlanFeature = async ( req, res ) => {
    const inputData = req.body;
    const payload = req.authUser;

    // Asignamos a la data el ID del usuario
    inputData.userId = payload._id;

    try {
        const data = await registerPlanFeature( inputData );

        res.json({ ok: true, data });
    }
    catch ( error ) {
        console.log( error );
        res.json({ ok: false, msg: 'Error al crear el servicio' });
    }

}

const getPlanFeatures = async ( req, res ) => {

    try {
        const data = await getAllPlanFeatures();

        res.json({ ok: true, data });
    }
    catch( error ) {
        console.log( error );
        res.json({ ok: false, msg: 'Error al obtener la lista de servicios' });
    }

}

const getPlanFeatureById = async ( req, res ) => {
    const service_id = req.params.id;

    try {
        const data = await getOnePlanFeatureById( service_id );

        res.json({ ok: true, data });
    } 
    catch ( error ) {
        console.log( error );
        res.json({ ok: false, msg: 'Error al obtener servicio por ID' });
    }

}

const removePlanFeatureById = async ( req, res ) => {
    const service_id = req.params.id;

    try {
        const data = await removeOnePlanFeatureById( service_id );

        res.json({ ok: true, data });
    } 
    catch ( error ) {
        console.log( error );
        res.json({ ok: false, msg: 'Error al eliminar el servicio' });
    }

}

const updatePlanFeatureById = async ( req, res ) => {
    const service_id = req.params.id;
    const inputData = req.body;

    try {
        const data = await updateOnePlanFeatureById( service_id, inputData );

        res.json({ ok: true, data });
    } 
    catch ( error ) {
        console.log( error );
        res.json({ ok: false, msg: 'Error al actualizar servicio' });
    }

}


module.exports = {
    createPlanFeature,
    getPlanFeatures,
    getPlanFeatureById,
    removePlanFeatureById,
    updatePlanFeatureById
}