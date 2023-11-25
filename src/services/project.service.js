const ProjectModel = require("../models/Project");


async function registerProject( newProject ) {

    return await ProjectModel.create( newProject );
}


module.exports = {
    registerProject
}