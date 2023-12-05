const PlanModel = require("../models/Plan");
const PlanFeatureModel = require("../models/PlanFeature");



async function getExistingPlanFeatures( planFeatureIds ) {

    // Busca documentos cuyo _id, esté incluido en el array.
    return await PlanFeatureModel.find({ _id: { $in: planFeatureIds }});
}

async function registerPlan( newPlan ) {
    const dbPlan = new PlanModel( newPlan );

    return await dbPlan.save();
}

async function getAllPlans() {

    return await PlanModel.find();
}

async function getOnePlanById( id ) {

    return await PlanModel.find({ _id: id });
}

async function removeOnePlanById( id ) {

    return await PlanModel.findOneAndRemove({ _id: id });
}


module.exports = {
    getExistingPlanFeatures,
    registerPlan,
    getAllPlans,
    getOnePlanById,
    removeOnePlanById
}