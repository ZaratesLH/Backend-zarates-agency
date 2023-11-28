const { Router } = require( 'express' );
const { createService, getServices, getServiceById } = require('../controllers/service.controller');
const { authUser } = require('../middlewares/validate-user.middleware');

const router = Router();


// http://localhost:4000/api/services/
router.get( '/', authUser, getServices );
router.get( '/:id', authUser, getServiceById );
router.post( '/', authUser, createService );


module.exports = router;