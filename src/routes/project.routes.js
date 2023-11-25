const { Router } = require( 'express' );
const { createProject, getProjects, getProjectById, removeProjectById, updateProject } = require('../controllers/project.controller');

const router = Router();


// http://localhost:4000/api/projects/
router.get( '/', getProjects );
router.get( '/:id', getProjectById );
router.post( '/', createProject );
router.delete( '/:id', removeProjectById );
router.patch( '/:id', updateProject );


module.exports = router;