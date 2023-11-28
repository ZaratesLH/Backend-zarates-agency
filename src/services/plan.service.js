const PlanModel = require("../models/Plan");
const ServiceModel = require("../models/Service");



async function getExistingServices( inputData ) {

    return await ServiceModel.find({ _id: { $in: inputData.services }});
}

async function registerCreate( newPlan ) {
    const dbPlan = new PlanModel( newPlan );

    return await dbPlan.save();
}


module.exports = {
    getExistingServices,
    registerCreate
}