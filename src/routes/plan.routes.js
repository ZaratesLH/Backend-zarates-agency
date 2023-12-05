const { Router } = require( 'express' );
const { authUser } = require('../middlewares/validate-user.middleware');
const { createPlan, getPlans, getPlanById, removePlanById } = require('../controllers/plan.controller');

const router = Router();


// http://localhost:4000/api/plans/
router.get( '/', authUser, getPlans );
router.get( '/:id', authUser, getPlanById );
router.post( '/', authUser, createPlan );
router.delete( '/:id', authUser, removePlanById );


module.exports = router;