const PlanModel = require("../models/Plan");
const ServiceModel = require("../models/Service");



async function getExistingServices( serviceIds ) {

    // Busca documentos cuyo _id, esté incluido en el array serviceIds.
    return await ServiceModel.find({ _id: { $in: serviceIds }});
}

async function registerCreate( newPlan ) {
    const dbPlan = new PlanModel( newPlan );

    return await dbPlan.save();
}


module.exports = {
    getExistingServices,
    registerCreate
}