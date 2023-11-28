const { Router } = require( 'express' );
const { createService } = require('../controllers/service.controller');
const { authUser } = require('../middlewares/validate-user.middleware');

const router = Router();


// http://localhost:4000/api/services/
router.post( '/', authUser, createService );


module.exports = router;