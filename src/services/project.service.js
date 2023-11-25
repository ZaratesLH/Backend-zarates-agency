const ProjectModel = require("../models/Project");


async function registerProject( newProject ) {

    return await ProjectModel.create( newProject );
}

async function getAllProjects() {

    return await ProjectModel.find();
}

async function getOneProjectById( id ) {

    // return await ProjectModel.find({ _id: id });
    return await ProjectModel.findById( id );
}


module.exports = {
    registerProject,
    getAllProjects,
    getOneProjectById
}