const { registerPlan, getAllPlans, getExistingPlanFeatures, getOnePlanById, removeOnePlanById } = require('../services/plan.service');


const createPlan = async (req, res) => {
    const inputData = req.body;
    const payload = req.authUser;

    // Asignamos a la data el ID del usuario
    inputData.userId = payload._id;

    console.log('inputData.featureIds', inputData.featureIds);

    try {
        if( inputData.featureIds.length === 0 ) {
            return res.status(400).json({
                ok: false,
                msg: 'Debe seleccionar al menos un servicio para el plan',
            });
        }

        const existingPlanFeatures = await getExistingPlanFeatures(inputData.featureIds);

        console.log('existingServices', existingPlanFeatures);

        // Verifica si al menos uno de los servicios proporcionados no existe.
        if ( existingPlanFeatures.length < inputData.featureIds.length ) {
            return res.status(400).json({
                ok: false,
                msg: 'Al menos uno de los servicios proporcionados no existe.',
            });
        }

        // Filtra los servicios seleccionados
        const selectedPlanFeatures = existingPlanFeatures.filter(service =>
            inputData.featureIds.includes(service._id.toString())
        );

        console.log('selectedServices', selectedPlanFeatures);

        inputData.features = selectedPlanFeatures;
        delete inputData.featureIds;

        inputData.total = calculateTotalPrice(selectedPlanFeatures);

        const savedPlan = await registerPlan(inputData);

        res.json({ ok: true, data: savedPlan });
    } catch (error) {
        console.log(error);
        res.json({ ok: false, msg: 'Error al crear el plan' });
    }
};

const calculateTotalPrice = ( planFeatures ) => {
    return planFeatures.reduce((total, planFeature) => total + planFeature.price, 0);
};

const getPlans = async ( req, res ) => {

    try {
        const data = await getAllPlans();

        res.status( 200 ).json({
            ok: true,
            data
        });
    } 
    catch( error ) {
        console.error( error );
        res.status( 500 ).json({
            ok: false,
            msg: 'Error al obtener todos los planes'
        })
    }
}

const getPlanById = async ( req, res ) => {
    const plan_id = req.params.id;
    console.log( '>>>', plan_id );
    try {
        const data = await getOnePlanById( plan_id );
        console.log( '>>>', data );
        res.json({ ok: true, data });
    } 
    catch ( error ) {
        console.log( error );
        res.json({ ok: false, msg: 'Error al obtener plan por ID' });
    }
}

const removePlanById = async ( req, res ) => {
    const plan_id = req.params.id;

    try {
        const data = await removeOnePlanById( plan_id );
        console.log({ ok: true, data });

        res.status( 200 ).json({ ok: true, data });
    } 
    catch( error ) {
        console.error( error );
        res.status( 500 ).json({
            ok: false,
            msg: 'Error al eliminar un plan por ID'
        });
    }
    
}


module.exports = {
    createPlan,
    getPlans,
    getPlanById,
    removePlanById
};
