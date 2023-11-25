const { Router } = require( 'express' );
const { createProject, getProjects, getProjectById } = require('../controllers/project.controller');

const router = Router();


// http://localhost:4000/api/projects/
router.get( '/', getProjects );
router.get( '/:id', getProjectById );
router.post( '/', createProject );


module.exports = router;