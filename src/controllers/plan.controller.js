const PlanModel = require('../models/Plan');
const ServiceModel = require('../models/Service');

const { getExistingServices, registerCreate } = require('../services/plan.service');


const createPlan = async (req, res) => {
    const inputData = req.body;
    const payload = req.authUser;

    // Asignamos a la data el ID del usuario
    inputData.userId = payload._id;

    console.log('inputData.serviceIds', inputData.serviceIds);

    try {
        if( inputData.serviceIds.length === 0 ) {
            return res.status(400).json({
                ok: false,
                msg: 'Debe seleccionar al menos un servicio para el plan',
            });
        }

        const existingServices = await getExistingServices(inputData.serviceIds);

        console.log('existingServices', existingServices);

        // Verifica si al menos uno de los servicios proporcionados no existe.
        if ( existingServices.length < inputData.serviceIds.length ) {
            return res.status(400).json({
                ok: false,
                msg: 'Al menos uno de los servicios proporcionados no existe.',
            });
        }

        // Filtra los servicios seleccionados
        const selectedServices = existingServices.filter(service =>
            inputData.serviceIds.includes(service._id.toString())
        );

        console.log('selectedServices', selectedServices);

        inputData.services = selectedServices;
        delete inputData.serviceIds;

        inputData.total = calculateTotalPrice(selectedServices);

        const savedPlan = await registerCreate(inputData);

        res.json({ ok: true, data: savedPlan });
    } catch (error) {
        console.log(error);
        res.json({ ok: false, msg: 'Error al crear el plan' });
    }
};

const calculateTotalPrice = (services) => {
    return services.reduce((total, servicio) => total + servicio.price, 0);
};

module.exports = {
    createPlan,
};
