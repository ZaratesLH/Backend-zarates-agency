const ProjectModel = require("../models/Project");


async function registerProject( newProject ) {

    return await ProjectModel.create( newProject );
}

async function getAllProjects() {

    return await ProjectModel.find();
}

async function getOneProjectById( id ) {

    return await ProjectModel.findOne({ _id: id }, {
        createdAt: 0, 
        updatedAt: 0,
        __v: 0
    });
    // return await ProjectModel.findById( id );
}

async function removeOneProjectById( id ) {

    return await ProjectModel.findOneAndRemove({ _id: id });
}

async function updateOneProjectById( id, updatedProject ) {

    return await ProjectModel.findOneAndUpdate(
        { _id: id },
        updatedProject,
        { new: true }
    );
}


module.exports = {
    registerProject,
    getAllProjects,
    getOneProjectById,
    removeOneProjectById,
    updateOneProjectById
}