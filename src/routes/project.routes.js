const { Router } = require( 'express' );
const { createProject } = require('../controllers/project.controller');

const router = Router();

// http://localhost:4000/api/projects/
router.post( '/', createProject );


module.exports = router;