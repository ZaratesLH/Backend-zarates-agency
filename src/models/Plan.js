const { Schema, model } = require( 'mongoose');
const { PlanFeatureSchema } = require('./PlanFeature');


const PlanSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
        default: 'non-category'
    },
    features: {
        type: Array,
        required: true,
        of: PlanFeatureSchema,
    },
    total: {
        type: Number,
        required: true,
        default: 0
    },
    userId: {           // El creador del Plan
        type: String,
        required: true
    }
},{
    timestamps: true
});

const PlanModel = model( 'Plan', PlanSchema );


module.exports = PlanModel;