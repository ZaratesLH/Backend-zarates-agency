const PlanFeatureModel = require("../models/PlanFeature");



async function registerPlanFeature( newService ) {

    return await PlanFeatureModel.create( newService );
}

async function getAllPlanFeatures() {

    return await PlanFeatureModel.find();
}

async function getOnePlanFeatureById( id ) {

    return await PlanFeatureModel.findById( id );
}

async function removeOnePlanFeatureById( id ) {

    return await PlanFeatureModel.findOneAndRemove({ _id: id });
}

async function updateOnePlanFeatureById( id, updatedPlanFeature ) {

    return await PlanFeatureModel.findOneAndUpdate(
        { _id: id },
        updatedPlanFeature,
        { new: true }
    );
}


module.exports = {
    registerPlanFeature,
    getAllPlanFeatures,
    getOnePlanFeatureById,
    removeOnePlanFeatureById,
    updateOnePlanFeatureById
}