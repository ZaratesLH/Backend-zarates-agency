const { Schema, model } = require( 'mongoose');


const PlanFeatureSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
        default: 'non-category'
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    description: {
        type: String,
        required: false,
    },
    userId: {           // El creador del servicio
        type: String,
        required: true
    }
},{
    timestamps: true
});

const PlanFeatureModel = model( 'Plan-Feature', PlanFeatureSchema );


module.exports = PlanFeatureModel, {
    PlanFeatureSchema
};
