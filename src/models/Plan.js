const { Schema, model } = require( 'mongoose');
const { ServiceSchema } = require('./Service');


const PlanSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    services: {
        type: Array,
        required: true,
        of: ServiceSchema,
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