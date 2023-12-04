const { Router } = require( 'express' );

const { authUser } = require('../middlewares/validate-user.middleware');
const { getPlanFeatures, getPlanFeatureById, createPlanFeature, removePlanFeatureById, updatePlanFeatureById } = require('../controllers/plan-feature.controller');

const router = Router();


// http://localhost:4000/api/plan-features/
router.get( '/', authUser, getPlanFeatures );
router.get( '/:id', authUser, getPlanFeatureById );
router.post( '/', authUser, createPlanFeature );
router.delete( '/:id', authUser, removePlanFeatureById );
router.patch( '/:id', authUser, updatePlanFeatureById );


module.exports = router;