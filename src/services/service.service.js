const ServiceModel = require("../models/Service");


async function registerService( newService ) {

    return await ServiceModel.create( newService );
}

async function getAllServices() {

    return await ServiceModel.find();
}

async function getOneServiceById( id ) {

    return await ServiceModel.findById( id );
}

async function removeOneServiceById( id ) {

    return await ServiceModel.findOneAndRemove({ _id: id });
}

async function updateOneServiceById( id, updatedService ) {

    return await ServiceModel.findOneAndUpdate(
        { _id: id },
        updatedService,
        { new: true }
    );
}


module.exports = {
    registerService,
    getAllServices,
    getOneServiceById,
    removeOneServiceById,
    updateOneServiceById
}