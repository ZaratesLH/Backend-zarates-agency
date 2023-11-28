const { Schema, model } = require( 'mongoose');
const ServiceModel = require('./Services');


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
},{
    timestamps: true
});

const PlanModel = model( 'Project', PlanSchema );


module.exports = PlanModel;