const { registerProject, getAllProjects, getOneProjectById, removeOneProjectById, updateOneProjectById } = require("../services/project.service");


const createProject = async ( req, res ) => {
    const inputData = req.body;
    const payload = req.authUser;

    // Asignamos a la data el ID del usuario
    inputData.userId = payload._id;

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

const removeProjectById = async ( req, res ) => {
    const project_id = req.params.id;

    try {
        const data = await removeOneProjectById( project_id );

        res.json({ ok: true, data });
    } 
    catch ( error ) {
        console.log( error );
        res.json({ ok: false, msg: 'Error al eliminar el producto' });
    }

}

const updateProject = async ( req, res ) => {
    const project_id = req.params.id;
    const inputData = req.body;

    try {
        const data = await updateOneProjectById( project_id, inputData );

        res.json({ ok: true, data });
    } 
    catch ( error ) {
        console.log( error );
        res.json({ ok: false, msg: 'Error al actualizar proyecto' });
    }

}


module.exports = {
    createProject,
    getProjects,
    getProjectById,
    removeProjectById,
    updateProject
}