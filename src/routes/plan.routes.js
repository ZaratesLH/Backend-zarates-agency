const { Router } = require( 'express' );
const { authUser } = require('../middlewares/validate-user.middleware');
const { createPlan } = require('../controllers/plan.controller');

const router = Router();


// http://localhost:4000/api/plans/
router.post( '/', authUser, createPlan );


module.exports = router;