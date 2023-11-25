const { registerProject, getAllProjects, getOneProjectById } = require("../services/project.service");


const createProject = async ( req, res ) => {
    const inputData = req.body;

    try {
        const data = await registerProject( inputData );

        res.json({ ok: true, data });
    }
    catch ( error ) {
        console.log( error );
        res.json({ ok: false, msg: 'Error al crear el proyecto' });
    }

}

const getProjects = async ( req, res ) => {

    try {
        const data = await getAllProjects();

        res.json({ ok: true, data });
    }
    catch( error ) {
        console.log( error );
        res.json({ ok: false, msg: 'Error al obtener la lista de proyectos' });
    }

}

const getProjectById = async ( req, res ) => {
    const project_id = req.params.id;

    try {
        const data = await getOneProjectById( project_id );

        res.json({ ok: true, data });
    } 
    catch ( error ) {
        console.log( error );
        res.json({ ok: false, msg: 'Error al obtener proyecto por ID' });
    }

}


module.exports = {
    createProject,
    getProjects,
    getProjectById
}