const { Router } = require( 'express' );
const { createProject, getProjects, getProjectById, removeProjectById, updateProject } = require('../controllers/project.controller');
const { authUser } = require('../middlewares/validate-user.middleware');

const router = Router();


// http://localhost:4000/api/projects/
router.get( '/', authUser, getProjects );
router.get( '/all', getProjects );
router.get( '/:id', authUser, getProjectById );
router.get( '/one/:id', getProjectById );
router.post( '/', authUser, createProject );
router.delete( '/:id', authUser, removeProjectById );
router.patch( '/:id', authUser, updateProject );

module.exports = router;