const { registerProject } = require("../services/project.service");


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


module.exports = {
    createProject
}