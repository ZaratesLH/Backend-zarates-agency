const { Schema, model } = require( 'mongoose');
const ServiceModel = require('./Service');


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
        of: [ ServiceModel ],
    },
    userId: {           // El creador del Plan
        type: String,
        required: true
    }
},{
    timestamps: true
});

const PlanModel = model( 'Project', PlanSchema );


module.exports = PlanModel;